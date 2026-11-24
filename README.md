<img src="assets/icon.svg" width="64" height="64" alt="">

# MyKids Study Arena

Aplikasi permainan pendidikan interaktif HTML5 mengikut silibus **KSSR Semakan (Darjah 6)** dan **KSSM (Tingkatan 2 & Tingkatan 4 Aliran STEM)** bagi tahun **2027**.

## Pautan Langsung (GitHub Pages)
- **Live App:** https://irfanmokhtar91.github.io/mykids-study-arena/

## Ciri Baharu v4.0
- **Pemilih Akaun Muka Depan & UI Khas Setiap Akaun:** Telefon baharu bermula bersih tanpa akaun tekaan. Anak mencipta atau memilih akaun sendiri berserta **Darjah / Tingkatan** yang disimpan kekal pada akaun tersebut, dengan penukar **🔄 Tukar Akaun** untuk telefon yang dikongsi.
- **Sifar Soalan Berulang Merentas Set & Mod Permainan:** Pengesahan automatik memastikan tiada soalan berulang antara Set 1..K, tiada pecahan tidak termudah dalam soalan pengiraan, dan mod **Sambung Pasangan (`match`)** tidak membocorkan soalan daripada set lain.
- **Pantauan Online Ibu Bapa (Cloudflare Workers + D1):** Backend ringan tanpa kebergantungan di [worker/](worker/) sedia dilancarkan ke akaun Cloudflare peribadi anda menggunakan `worker/deploy-personal.ps1` supaya ibu bapa dapat memantau keputusan & kelemahan semua anak secara dalam talian menerusi **Kod Keluarga + PIN**.

## 9 Pilihan Mod Permainan Interaktif (Telefon, Tablet, PC & Gamepad)
- **🎲 Campuran Pintar (Disyorkan):** Menggabungkan kelapan-lapan permainan interaktif & arked secara automatik mengikut soalan dalam set 5 soalan pantas (diakhiri pusingan Boss pada S5).
- **4 Permainan Sentuhan Interaktif:**
  1. **👆 Leret Fakta:** Leret kanan jika pernyataan tepat, leret kiri jika salah.
  2. **🔌 Sambung Pasangan:** Seret atau ketik untuk menyambung konsep dan jawapannya dengan kabel.
  3. **📦 Isih Pantas:** Leret kad ke tong **TEPAT** atau tong **BUKAN** pada tali sawat.
  4. **🧱 Bina Jawapan:** Susun kepingan kata atau rumus menjadi jawapan lengkap.
- **4 Permainan Arked Canvas (Dengan Parallax, Kuasa 50/50 & Beku Masa):**
  5. **🎯 Target Strike (FPS Arena)**
  6. **🦊 Crate Rush (4-Lane Runner)**
  7. **🧭 Maze Runner (Top-Down Maze)**
  8. **🧲 Reactor Puzzle (Drag-and-Drop)**
