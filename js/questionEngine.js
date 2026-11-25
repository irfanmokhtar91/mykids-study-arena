/**
 * Question Engine: builds strictly non-repeating 5-question sets across Set 1..K
 * per grade/subject/chapter, plus Endless Revision sets and 3-pair Match helpers.
 */
(function (global) {
  const App = (global.App = global.App || {});
  const chapterCache = new Map();

  function hashSeed(str) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffleWithRng(rng, arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function normalizePrompt(str) {
    return String(str || "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  function localizeAndShuffleOptions(rng, rawQ, dlp) {
    const qText = dlp && rawQ.qEn ? rawQ.qEn : rawQ.q;
    const optsSrc = dlp && Array.isArray(rawQ.optionsEn) ? rawQ.optionsEn : rawQ.options;
    const expText = dlp && rawQ.explanationEn ? rawQ.explanationEn : rawQ.explanation;
    const correctText = optsSrc[rawQ.correctIndex];

    const indexed = optsSrc.map((text, idx) => ({ text, isCorrect: idx === rawQ.correctIndex }));
    const shuffled = shuffleWithRng(rng, indexed);
    const newCorrectIndex = shuffled.findIndex((o) => o.isCorrect);

    return {
      q: qText,
      options: shuffled.map((o) => o.text),
      correctIndex: newCorrectIndex,
      explanation: expText || `Jawapan tepat: ${correctText}`
    };
  }

  function getStaticPool(gradeId, subjectId, chapterId) {
    const gradeData = App.Data && App.Data[gradeId];
    if (!gradeData) return [];
    const subjData = gradeData[subjectId];
    if (!subjData) return [];
    return Array.isArray(subjData[chapterId]) ? subjData[chapterId] : [];
  }

  function getFactTablePool(gradeId, subjectId, chapterId) {
    const gradeFt = App.FactTables && App.FactTables[gradeId];
    if (!gradeFt) return [];
    const subjFt = gradeFt[subjectId];
    if (!subjFt) return [];
    return Array.isArray(subjFt[chapterId]) ? subjFt[chapterId] : [];
  }

  function getGeneratorPool(gradeId, chapterId) {
    const gradeGens = App.Generators && App.Generators[gradeId];
    if (!gradeGens) return [];
    return Array.isArray(gradeGens[chapterId]) ? gradeGens[chapterId] : [];
  }

  function buildChapterSets(gradeId, subjectId, chapterId, dlp) {
    const cacheKey = `${gradeId}:${subjectId}:${chapterId}:${dlp ? "en" : "bm"}`;
    if (chapterCache.has(cacheKey)) {
      return chapterCache.get(cacheKey);
    }

    const qPerSet = App.QUESTIONS_PER_SET || 5;
    const maxSets = App.SETS_PER_CHAPTER || 12;
    const gens = getGeneratorPool(gradeId, chapterId);
    const rawStatic = [...getStaticPool(gradeId, subjectId, chapterId), ...getFactTablePool(gradeId, subjectId, chapterId)];

    const chRng = mulberry32(hashSeed(`chapter:${cacheKey}`));
    const usedPrompts = new Set();
    const dedupedStatic = [];

    for (const raw of rawStatic) {
      const item = localizeAndShuffleOptions(chRng, raw, dlp);
      const norm = normalizePrompt(item.q);
      if (!usedPrompts.has(norm)) {
        usedPrompts.add(norm);
        dedupedStatic.push(item);
      }
    }

    const shuffledStatic = shuffleWithRng(chRng, dedupedStatic);
    const sets = [];
    const chapterUsedPrompts = new Set();

    // Slice disjoint static sets
    const fullStaticSets = Math.min(maxSets, Math.floor(shuffledStatic.length / qPerSet));
    for (let s = 0; s < fullStaticSets; s++) {
      const slice = shuffledStatic.slice(s * qPerSet, (s + 1) * qPerSet);
      slice.forEach((item) => chapterUsedPrompts.add(normalizePrompt(item.q)));
      sets.push(slice);
    }

    // If generators exist, carry forward leftover static items once & top up to 12 full unique sets
    if (gens.length > 0) {
      let leftoverIdx = fullStaticSets * qPerSet;
      while (sets.length < maxSets) {
        const setNum = sets.length + 1;
        const setRng = mulberry32(hashSeed(`gen:${cacheKey}:set:${setNum}`));
        const setQs = [];

        while (leftoverIdx < shuffledStatic.length && setQs.length < qPerSet) {
          const item = shuffledStatic[leftoverIdx++];
          const norm = normalizePrompt(item.q);
          if (!chapterUsedPrompts.has(norm)) {
            chapterUsedPrompts.add(norm);
            setQs.push(item);
          }
        }

        let safety = 0;
        while (setQs.length < qPerSet && safety < 420) {
          safety++;
          const gen = gens[(setNum + safety) % gens.length];
          const item = gen(setRng, dlp);
          const norm = normalizePrompt(item.q);
          if (!chapterUsedPrompts.has(norm)) {
            chapterUsedPrompts.add(norm);
            setQs.push(item);
          }
        }

        if (setQs.length === qPerSet) {
          sets.push(setQs);
        } else {
          break;
        }
      }
    }

    // Safety fallback if a chapter ever had < qPerSet static items and no generator
    if (sets.length === 0 && shuffledStatic.length > 0) {
      const slice = shuffledStatic.slice(0, qPerSet);
      slice.forEach((item) => chapterUsedPrompts.add(normalizePrompt(item.q)));
      sets.push(slice);
    }

    // Preserve genuinely unused leftover static items (never in any Set 1..K) for 3-pair Match mode
    const leftoverStatic = shuffledStatic.filter((item) => !chapterUsedPrompts.has(normalizePrompt(item.q)));

    const bundle = { sets, usedPrompts: chapterUsedPrompts, leftoverStatic };
    chapterCache.set(cacheKey, bundle);
    return bundle;
  }

  App.QuestionEngine = {
    getChapterSetCount: function (gradeId, subjectId, chapterId, dlp = false) {
      const bundle = buildChapterSets(gradeId, subjectId, chapterId, dlp);
      return bundle.sets.length;
    },

    getSetQuestions: function (gradeId, subjectId, chapterId, setNum, dlp = false) {
      const { sets } = buildChapterSets(gradeId, subjectId, chapterId, dlp);
      if (sets.length === 0) return [];
      const safeIdx = Math.max(0, Math.min(sets.length - 1, (Number(setNum) || 1) - 1));
      return sets[safeIdx].map((q) => ({
        q: q.q,
        options: q.options.slice(),
        correctIndex: q.correctIndex,
        explanation: q.explanation
      }));
    },

    getEndlessRevisionSet: function (gradeId, subjectId, chapterId, dlp = false, roundSeed = 1) {
      const count = App.QUESTIONS_PER_SET || 5;
      const rng = mulberry32(hashSeed(`rev:${gradeId}:${subjectId}:${chapterId}:${dlp ? "en" : "bm"}:${roundSeed}`));
      const gens = getGeneratorPool(gradeId, chapterId);
      const rawStatic = [...getStaticPool(gradeId, subjectId, chapterId), ...getFactTablePool(gradeId, subjectId, chapterId)];
      const pool = rawStatic.map((r) => localizeAndShuffleOptions(rng, r, dlp));
      const shuffled = shuffleWithRng(rng, pool);
      const picked = [];
      const seen = new Set();

      if (gens.length > 0) {
        let safety = 0;
        const targetGenCount = shuffled.length > 0 ? Math.max(2, count - Math.min(2, shuffled.length)) : count;
        while (picked.length < targetGenCount && safety < 160) {
          safety++;
          const gen = gens[(safety + roundSeed) % gens.length];
          const item = gen(rng, dlp);
          const norm = normalizePrompt(item.q);
          if (!seen.has(norm)) {
            seen.add(norm);
            picked.push(item);
          }
        }
      }

      for (const item of shuffled) {
        if (picked.length >= count) break;
        const norm = normalizePrompt(item.q);
        if (!seen.has(norm)) {
          seen.add(norm);
          picked.push(item);
        }
      }

      return shuffleWithRng(rng, picked);
    },

    getMatchPairsForQuestion: function (gradeId, subjectId, chapterId, currentQObj, dlp = false, seed = 1) {
      if (!currentQObj || !Array.isArray(currentQObj.options)) return null;
      const mainAns = currentQObj.options[currentQObj.correctIndex];
      if (!currentQObj.q || !mainAns || currentQObj.q.length > 130 || mainAns.length > 62) {
        return null;
      }

      const { usedPrompts, leftoverStatic } = buildChapterSets(gradeId, subjectId, chapterId, dlp);
      const rng = mulberry32(hashSeed(`match-extra:${gradeId}:${subjectId}:${chapterId}:${dlp ? "en" : "bm"}:${seed}`));
      const usedQ = new Set([normalizePrompt(currentQObj.q)]);
      const usedA = new Set([normalizePrompt(mainAns)]);
      const pairs = [
        {
          prompt: currentQObj.q,
          answer: mainAns,
          isMain: true
        }
      ];

      const tryAddPair = (item) => {
        if (!item || !Array.isArray(item.options)) return false;
        const ans = item.options[item.correctIndex];
        if (!item.q || !ans || item.q.length > 130 || ans.length > 62) return false;
        const nq = normalizePrompt(item.q);
        const na = normalizePrompt(ans);
        // Strict guarantee: extra Match pairs must NEVER appear in any Set 1..K of this chapter
        if (usedPrompts.has(nq) || usedQ.has(nq) || usedA.has(na)) return false;
        usedQ.add(nq);
        usedA.add(na);
        pairs.push({
          prompt: item.q,
          answer: ans,
          isMain: false
        });
        return true;
      };

      const shuffledLeftover = shuffleWithRng(rng, leftoverStatic);
      for (const item of shuffledLeftover) {
        if (pairs.length >= 3) break;
        tryAddPair(item);
      }

      if (pairs.length < 3) {
        const gens = getGeneratorPool(gradeId, chapterId);
        if (gens.length > 0) {
          const genRng = mulberry32(hashSeed(`match-gen:${gradeId}:${subjectId}:${chapterId}:${dlp ? "en" : "bm"}:${seed}`));
          let safety = 0;
          while (pairs.length < 3 && safety < 120) {
            safety++;
            const gen = gens[(seed + safety) % gens.length];
            const item = gen(genRng, dlp);
            tryAddPair(item);
          }
        }
      }

      return pairs.length === 3 ? pairs : null;
    },

    getDiagnosticBank: function (gradeId, subjectId) {
      const banks = App.DiagnosticBanks && App.DiagnosticBanks[gradeId];
      return (banks && banks[subjectId]) || null;
    },

    getDiagnosticQuestions: function (gradeId, subjectId, opts) {
      const bank = this.getDiagnosticBank(gradeId, subjectId);
      if (!bank || !App.DiagnosticRunner) return [];
      return App.DiagnosticRunner.selectDiagnosticQuestions(bank, opts || {});
    }
  };
})(window);
