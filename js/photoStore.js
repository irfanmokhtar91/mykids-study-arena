/**
 * Photo answers (v5). Kids write on paper and photograph it; the photo is compressed on the phone, then kept in IndexedDB
 * (localStorage would fill up almost immediately). Records store only photo ids.
 *
 * Compression goal: small upload, still readable handwriting.
 *   - longest side capped at 1600 px (never below 1280 px unless the original was smaller)
 *   - JPEG quality starts at 0.80 and drops to at least 0.55 until the file is <= ~380 KB
 */
(function (global) {
  const App = (global.App = global.App || {});

  const MAX_DIM = 1600;
  const MIN_DIM = 1280;
  const TARGET_BYTES = 380 * 1024;
  const START_Q = 0.8;
  const MIN_Q = 0.55;
  const MAX_PER_PART = 3;
  const DB_NAME = "mykids-photos";
  const STORE = "photos";

  let dbPromise = null;
  const memory = new Map(); // fallback when IndexedDB is unavailable (session only)
  let usingMemory = false;

  function openDb() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise((resolve) => {
      try {
        if (!global.indexedDB) {
          usingMemory = true;
          return resolve(null);
        }
        const req = global.indexedDB.open(DB_NAME, 1);
        req.onupgradeneeded = () => req.result.createObjectStore(STORE, { keyPath: "id" });
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => {
          usingMemory = true;
          resolve(null);
        };
      } catch (e) {
        usingMemory = true;
        resolve(null);
      }
    });
    return dbPromise;
  }

  function tx(db, mode, fn) {
    return new Promise((resolve, reject) => {
      const t = db.transaction(STORE, mode);
      const store = t.objectStore(STORE);
      const out = fn(store);
      t.oncomplete = () => resolve(out && out.result !== undefined ? out.result : undefined);
      t.onerror = () => reject(t.error);
      t.onabort = () => reject(t.error);
    });
  }

  async function put(id, blob, meta) {
    const db = await openDb();
    const rec = { id, blob, meta: meta || {}, ts: Date.now() };
    if (!db) {
      memory.set(id, rec);
      return true;
    }
    await tx(db, "readwrite", (s) => s.put(rec));
    return true;
  }

  async function get(id) {
    const db = await openDb();
    if (!db) return memory.get(id) || null;
    return new Promise((resolve) => {
      const r = db.transaction(STORE, "readonly").objectStore(STORE).get(id);
      r.onsuccess = () => resolve(r.result || null);
      r.onerror = () => resolve(null);
    });
  }

  async function remove(id) {
    const db = await openDb();
    if (!db) {
      memory.delete(id);
      return;
    }
    await tx(db, "readwrite", (s) => s.delete(id));
  }

  async function allIds() {
    const db = await openDb();
    if (!db) return Array.from(memory.keys());
    return new Promise((resolve) => {
      const r = db.transaction(STORE, "readonly").objectStore(STORE).getAllKeys();
      r.onsuccess = () => resolve(r.result || []);
      r.onerror = () => resolve([]);
    });
  }

  /** Delete every stored photo whose id is not in `keepIds` (called on start-up and after records are trimmed). */
  async function purgeExcept(keepIds) {
    const keep = new Set(keepIds);
    const ids = await allIds();
    for (const id of ids) if (!keep.has(id)) await remove(id);
    return ids.filter((id) => !keep.has(id)).length;
  }

  async function getURL(id) {
    const rec = await get(id);
    return rec && rec.blob ? URL.createObjectURL(rec.blob) : null;
  }

  // ------------------------------------------------------------------ compression
  function loadBitmap(file) {
    if (typeof global.createImageBitmap === "function") {
      return global.createImageBitmap(file, { imageOrientation: "from-image" }).catch(() => imgFallback(file));
    }
    return imgFallback(file);
  }
  function imgFallback(file) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        resolve({ width: img.naturalWidth, height: img.naturalHeight, draw: (ctx, w, h) => ctx.drawImage(img, 0, 0, w, h), close: () => URL.revokeObjectURL(url) });
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("Gambar tidak dapat dibaca."));
      };
      img.src = url;
    });
  }
  function toBlob(canvas, quality) {
    return new Promise((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Gagal memampatkan gambar."))), "image/jpeg", quality));
  }

  /**
   * @returns {Promise<{blob: Blob, width: number, height: number, bytes: number, quality: number, originalBytes: number}>}
   */
  async function compress(file, opts = {}) {
    const maxDim = opts.maxDim || MAX_DIM;
    const target = opts.targetBytes || TARGET_BYTES;
    const bmp = await loadBitmap(file);
    const srcW = bmp.width;
    const srcH = bmp.height;
    const longest = Math.max(srcW, srcH);
    const render = async (dim) => {
      const scale = Math.min(1, dim / longest);
      const w = Math.max(1, Math.round(srcW * scale));
      const h = Math.max(1, Math.round(srcH * scale));
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ffffff"; // JPEG has no alpha
      ctx.fillRect(0, 0, w, h);
      if (typeof bmp.draw === "function") bmp.draw(ctx, w, h);
      else ctx.drawImage(bmp, 0, 0, w, h);
      return { canvas, w, h };
    };
    let dim = maxDim;
    let { canvas, w, h } = await render(dim);
    let q = START_Q;
    let blob = await toBlob(canvas, q);
    while (blob.size > target && q > MIN_Q) {
      q = Math.max(MIN_Q, Math.round((q - 0.06) * 100) / 100);
      blob = await toBlob(canvas, q);
    }
    // Still too big: shrink the picture a little, but never below MIN_DIM (keeps handwriting legible).
    while (blob.size > target && dim > MIN_DIM && longest > MIN_DIM) {
      dim = Math.max(MIN_DIM, Math.round(dim * 0.88));
      ({ canvas, w, h } = await render(dim));
      blob = await toBlob(canvas, q);
    }
    if (typeof bmp.close === "function") bmp.close();
    return { blob, width: w, height: h, bytes: blob.size, quality: q, originalBytes: file.size };
  }

  const photoId = (profileId, sessionId, itemId, part, n) => [profileId, sessionId, itemId, part, n].join("|");

  App.PhotoStore = { MAX_PER_PART, put, get, remove, allIds, purgeExcept, getURL, compress, photoId, isMemoryOnly: () => usingMemory };
})(window);
