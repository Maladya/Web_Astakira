# PRD — Astakira Media Website Redesign
**Document Version:** 1.0  
**Prepared for:** Tim Internal Astakira Media  
**Scope:** Redesign total semua halaman (Home, Produk, Staff, Pricing) + Footer  
**Design Philosophy:** Editorial-meets-tech — bukan AI template, bukan agency klise

---

## 1. Latar Belakang & Tujuan

Website Astakira Media saat ini sudah punya fondasi yang solid dari sisi konten dan struktur, namun secara visual belum mencerminkan posisi brand yang premium dan forward-thinking. Redesign ini bukan sekadar facelift — ini tentang membangun identitas visual yang otentik, tidak mudah ditiru, dan tahan waktu minimal 3 tahun ke depan.

**Tujuan utama:**
- Meningkatkan konversi lewat penempatan CTA yang lebih strategis dan kontekstual
- Membangun kepercayaan calon klien lewat estetika yang terasa *crafted*, bukan *generated*
- Mempertahankan semua konten eksisting sambil memperkuat hierarki informasi
- Menghadirkan pengalaman browsing yang terasa berbeda dari web agensi digital kebanyakan

---

## 2. Design Language — "Structured Chaos"

Konsep utama: **tegas di struktur, berani di ekspresi**. Perpaduan antara grid editorial yang rapi dengan elemen visual yang tidak konvensional — bukan chaos yang noisy, tapi chaos yang *curated*.

### 2.1 Prinsip Visual

| Prinsip | Penerapan |
|---|---|
| **Asymmetrical Balance** | Layout tidak selalu centered. Konten bisa offset, overlapping, atau keluar dari grid sesekali |
| **Typographic Tension** | Mix antara headline besar (display font) dan body yang clean — kontras ukuran yang ekstrem di beberapa section |
| **Controlled Depth** | Layering elemen dengan z-index yang disengaja: bukan sekadar card shadow, tapi elemen yang benar-benar terasa punya dimensi |
| **Purposeful Whitespace** | Ruang kosong dipakai sebagai elemen desain, bukan kekurangan konten |
| **Motion with Meaning** | Animasi hanya ada kalau punya tujuan — mengarahkan mata, memberi feedback, atau menjelaskan relasi |

### 2.2 Palet Warna

Warna inti dipertahankan (biru, putih, navy), tapi diperluas dengan sistem yang lebih nuanced:

```
Primary Navy     #0A1628   — background gelap, footer
Deep Blue        #0D2B55   — surface, card background
Brand Blue       #1E5FD4   — primary action, highlight
Electric Blue    #3B82F6   — accent, glow, interactive state
Sky Accent       #60A5FA   — softer accent untuk teks
Off-White        #F8FAFF   — background terang, section light
True White       #FFFFFF   — teks di atas gelap, icon
Ghost White      #EEF2FF   — subtle section divider
```

**Yang baru — accent pops (dipakai sparingly):**
```
Luminous Cyan    #06B6D4   — highlight khusus, bukan dominan
Warm Gold        #F59E0B   — badge, label "popular", satu titik saja
```

> Aturan: accent pops **maksimal muncul di 2 titik per halaman**. Bukan untuk dekorasi, tapi untuk arah mata.

### 2.3 Tipografi

```
Display / Hero      : Plus Jakarta Sans ExtraBold (800) — headline besar
Heading             : Plus Jakarta Sans Bold (700)
Subheading          : Plus Jakarta Sans SemiBold (600)
Body                : Plus Jakarta Sans Regular (400)
Caption / Label     : Plus Jakarta Sans Medium (500), letter-spacing lebih lebar
Monospace accent    : JetBrains Mono — untuk label teknis, badge, code snippet kecil
```

**Aturan skala tipografi — menggunakan Major Third (1.25x):**
```
xs    : 12px
sm    : 14px
base  : 16px
lg    : 20px
xl    : 24px
2xl   : 32px  ← subheading section
3xl   : 40px  ← heading section
4xl   : 56px  ← hero secondary
5xl   : 72px  ← hero primary (desktop)
```

---

## 3. Sistem Komponen

### 3.1 CTA System

Setiap halaman punya **minimal 3 titik CTA** yang kontekstual — bukan sekadar tombol yang ditempel:

**CTA Primer (WhatsApp)**
- Style: tombol solid biru dengan ikon WhatsApp, slight glow on hover
- Copy harus kontekstual per section, bukan seragam "Hubungi Kami" terus
- Contoh: "Diskusikan Proyek Kamu →", "Minta Estimasi Gratis →", "Mulai Sekarang →"

**CTA Sekunder**
- Style: outline/ghost button atau text link dengan underline animasi
- Digunakan untuk aksi eksplorasi (lihat produk, baca lebih lanjut)

**CTA Floating (Global)**
- WhatsApp bubble di kanan bawah layar, muncul setelah scroll 30%
- Tidak mengganggu — kecil, subtle, ada tooltip saat hover
- Di mobile: tetap ada tapi ukuran lebih kecil

**CTA Inline (Baru)**
- Di dalam paragraf panjang atau deskripsi layanan, sisipkan teks link yang langsung mengarah ke WhatsApp dengan pesan pre-filled sesuai konteks layanan tersebut

### 3.2 Card System

Tiga varian card yang dipakai konsisten di seluruh situs:

**Surface Card** — untuk konten informasi (layanan, keunggulan)
- Background: `#0D2B55` atau `rgba(255,255,255,0.04)` di atas dark bg
- Border: `1px solid rgba(59,130,246,0.15)`
- Border radius: `16px`
- Hover: border opacity naik ke `0.4`, slight Y translate `-4px`

**Feature Card** — untuk highlight/produk unggulan
- Seperti Surface Card tapi dengan gradient border (bukan solid)
- Gradient border trick: `background-clip: padding-box` + pseudo-element
- Bisa punya accent icon atau label badge

**Glass Card** — untuk overlay section atau di atas foto/gradient
- Backdrop blur `12px`, background `rgba(10,22,40,0.7)`
- Dipakai sparingly — jangan semua section pakai ini

### 3.3 Efek Visual yang Dipertahankan & Diperbarui

| Efek | Status | Catatan |
|---|---|---|
| Glassmorphism | ✅ Dipertahankan | Tapi hanya di titik strategis, bukan semua section |
| Glow | ✅ Dipertahankan | Lebih subtle — radial gradient, bukan drop-shadow tebal |
| Blur | ✅ Dipertahankan | Backdrop blur untuk glass card |
| Marquee | ✅ Dipertahankan | Kecepatan lebih smooth, bisa bidirectional |
| Animasi hover | ✅ Dipertahankan | Diperkaya dengan micro-interaction |
| Particle/mesh bg | 🆕 Ditambahkan | Animated SVG mesh atau subtle dot grid di hero |
| Scroll reveal | 🆕 Ditambahkan | Staggered fade-in saat scroll, bukan sekadar fade |
| Text scramble | 🆕 Opsional | Untuk headline hero — efek karakter random sebelum settle |
| Cursor custom | 🆕 Opsional | Custom cursor dot untuk desktop — tidak ganggu usability |

---

## 4. Spesifikasi Per Halaman

---

### 4.1 HOME

#### Hero Section
**Layout:** Full viewport height, asymmetric split — teks di kiri 55%, visual di kanan 45%  
**Background:** Animated mesh gradient (biru-navy bergerak sangat lambat) + noise texture overlay tipis  
**Konten:** Tetap — tagline utama, deskripsi singkat, CTA utama  

**Yang berubah:**
- Headline dipecah jadi dua baris dengan ukuran yang berbeda (display + subheadline berbeda bobot)
- Tambah **label badge** di atas headline: `[ Astakira Media — Digital Solutions ]` dengan monospace font dan subtle border
- Visual kanan bukan foto statis tapi bisa berupa floating cards/mockup perangkat yang punya parallax ringan saat mouse bergerak
- **CTA Baru di Hero:** Dua tombol — satu primer (WhatsApp) dan satu sekunder (lihat produk)
- Tambah **social proof micro-bar** di bawah CTA: icon klien atau angka proyek selesai (misal: "50+ Proyek Selesai · 20+ Klien Puas")

#### About/Company Section
**Layout:** Teks di kiri, stats atau visual di kanan — tapi dengan grid yang sedikit overlapping  
**Konten:** Tetap — penjelasan perusahaan  

**Yang berubah:**
- Tambah **animated number counter** untuk statistik (kalau ada data angka)
- Quote atau tagline brand ditampilkan dalam format besar, italic, dengan quotation mark dekoratif berwarna biru redup

#### Services Section
**Layout:** Grid 3 kolom di desktop, 1 kolom di mobile, tiap card punya ikon dan deskripsi singkat  
**Konten:** Tetap — daftar layanan  

**Yang berubah:**
- Setiap card layanan punya **CTA inline**: teks kecil "Tanya soal ini →" yang link ke WhatsApp dengan pesan pre-filled nama layanan
- Icon layanan diganti jadi custom SVG ilustrasi minimal (bukan icon library generic)
- Hover state card lebih dramatic — gradient border muncul, ikon punya glow

#### Workflow/Process Section
**Layout:** Horizontal stepper di desktop, vertical di mobile  
**Konten:** Tetap — alur kerja  

**Yang berubah:**
- Nomor step pakai tipografi besar (semi-transparent) di belakang sebagai dekorasi
- Connector antar step pakai animasi dashed line yang berjalan saat section masuk viewport
- Tambah estimasi waktu per step (kalau relevan)

#### CTA Konsultasi Section
**Layout:** Full-width section dengan background gelap, konten terpusat  
**Konten:** Tetap — ajakan konsultasi  

**Yang berubah:**
- Background bukan flat gelap tapi ada radial glow besar di tengah (biru ke transparant)
- Teks CTA diperbesar dan diperkuat — headline besar, subtext, tombol
- Tambah **urgency element ringan**: misal "Slot konsultasi gratis tersedia bulan ini" (tanpa deadline palsu)
- Tambah opsi kontak: tombol WhatsApp + link ke Instagram/email

#### Clients Section
**Layout:** Marquee logo klien (existing behavior dipertahankan)  
**Konten:** Tetap — logo klien  

**Yang berubah:**
- Logo klien dimonokromatik (putih atau abu-abu) saat default, warna asli saat hover
- Judul section lebih editorial: "Mereka Sudah Percaya" bukan sekadar "Klien Kami"

---

### 4.2 PRODUK

**Filosofi halaman:** Bukan sekadar portofolio grid — tampilkan seperti case study yang bercerita.

#### Product Header
**Yang berubah:**
- Hero section halaman produk dengan satu baris headline besar dan subtext deskriptif
- Tambah **filter/tab** kalau ada lebih dari satu kategori produk (misal: POS System, Landing Page, dsb)

#### Product Cards
**Layout:** Grid 2 kolom di desktop, masonry atau alternating-layout  
**Konten:** Tetap — POS cafe, landing page cafe, dll  

**Yang berubah:**
- Setiap card punya **thumbnail preview** yang pada hover berubah jadi mini-slideshow (jika ada beberapa screenshot)
- Lightbox dipertahankan tapi diperbaiki — tambah navigasi keyboard, swipe di mobile, overlay lebih clean
- Tambah **label tag** di setiap produk: `[ Web App ]`, `[ Landing Page ]`, `[ POS ]`
- Di dalam lightbox atau di bawah setiap card, tambah **CTA kontekstual**: "Mau yang Serupa? →" yang link ke WhatsApp dengan konteks produk tersebut
- Informasi card diperkaya: tambah satu baris "Industri" atau "Stack Teknologi" (ringkas)

#### CTA Section Baru di Produk
- Tambah section di bawah product grid: "Punya Ide Proyek?" + tombol WhatsApp + teks deskriptif singkat tentang proses kerja sama

---

### 4.3 STAFF

**Filosofi halaman:** Tim adalah aset utama — tampilkan mereka dengan martabat dan kepribadian.

#### Staff Header
**Yang berubah:**
- Headline lebih human: "Orang-Orang di Balik Astakira" atau "Tim yang Mengerjakan Proyekmu"
- Subtext singkat tentang budaya tim atau nilai yang dipegang

#### Staff Cards
**Layout:** Grid 3–4 kolom di desktop, popup tetap dipertahankan  
**Konten:** Tetap — nama dan jabatan  

**Yang berubah:**
- **Foto styling:** foto dengan overlay warna biru subtle saat default, natural/berwarna saat hover — efek duotone
- Card shape dieksperimentasi: bisa sedikit offset, bukan semua aligned perfectly (memberi kesan lebih manusiawi)
- Popup/modal diperbarui:
  - Layout lebih luas dan bercerita
  - Tambah field opsional: keahlian utama (sebagai tag), quote singkat atau fun fact
  - Tambah link sosial media per individu (LinkedIn, Behance, GitHub — sesuai relevansi)
- Tambah **CTA di halaman staff**: "Mau Berkolaborasi dengan Tim Kami? →" di bagian bawah halaman

---

### 4.4 PRICING

**Filosofi halaman:** Pricing harus menjual, bukan sekadar menginformasikan.

#### Pricing Header
**Yang berubah:**
- Headline lebih confidence-inducing: "Investasi yang Sepadan" atau "Harga Transparan, Hasil Nyata"
- Tambah **toggle** bulanan/project-based kalau struktur pricing memungkinkan

#### Pricing Cards (Flip Effect Dipertahankan)
**Layout:** 3 kartu paket horizontal, kartu tengah slightly elevated (popular)  
**Konten:** Tetap — fitur tiap paket  

**Yang berubah:**
- Kartu "Popular" atau recommended punya visual treatment berbeda: badge `⭐ Paling Diminati`, border berwarna accent, subtle glow
- Flip effect dipertahankan tapi bagian belakang kartu diperkaya:
  - Bukan sekadar info tambahan, tapi bisa langsung ada **tombol CTA ke WhatsApp** per paket dengan pesan pre-filled nama paketnya
  - Tambah "Cocok untuk:" dengan 2–3 bullet poin tipe klien yang sesuai
- Di bawah setiap kartu: link kecil "Ada pertanyaan soal paket ini? Tanya langsung →"

#### FAQ Section (Baru)
- Tambah accordion FAQ di bawah pricing cards
- Pertanyaan umum: "Apakah harga bisa dikustomisasi?", "Berapa lama pengerjaan?", "Apakah ada revisi?", dsb
- Ini mengurangi hambatan konversi sebelum calon klien menghubungi

#### CTA Section Bawah Pricing
- "Tidak yakin paket mana yang cocok?" + tombol "Konsultasi Gratis, Tanpa Komitmen →"
- Background berbeda (gelap atau bergradient) untuk memberi penutup yang kuat

---

### 4.5 FOOTER

**Konten:** Tetap — info brand, layanan, sosial media, kontak  
**Background:** Tetap gelap (Navy #0A1628)  

**Yang berubah:**
- Tambah **tagline singkat brand** di bagian paling atas footer sebelum kolom-kolom link: satu kalimat positioning statement
- Layout kolom diatur ulang untuk hierarki yang lebih jelas:
  1. Brand + tagline + deskripsi satu baris
  2. Layanan (internal links)
  3. Sosial Media (dengan ikon)
  4. Kontak (WhatsApp + email + alamat)
- Tombol WhatsApp di footer: lebih prominent, bukan sekadar teks link
- Tambah **mini newsletter subscription** atau ajakan follow sosial media (opsional, sesuai strategi konten)
- Copyright bar di paling bawah dipisah secara visual dengan border tipis
- Tambah subtle background texture di footer (noise atau grid dot sangat tipis)

---

## 5. Navigasi & Header

**Yang dipertahankan:** Link Home, Produk, Staff, Pricing  

**Yang berubah:**
- Header menggunakan **glassmorphism blur** saat scroll (bukan opaque langsung)
- Tambah **CTA di header**: tombol kecil "Konsultasi →" di ujung kanan navigasi — ini penting karena header selalu terlihat
- Mobile menu dirombak total:
  - Full-screen overlay dengan animasi slide atau fade
  - Link navigasi besar dan mudah di-tap
  - Tambah kontak cepat di bagian bawah mobile menu (nomor WA atau ikon sosial)
- Active state navigasi lebih jelas — bukan sekadar warna berbeda tapi bisa underline animasi atau dot indicator

---

## 6. Responsivitas & Mobile

| Breakpoint | Behavior |
|---|---|
| `< 480px` (xs) | Single column, konten diprioritaskan, semua efek berat dimatikan |
| `480–768px` (sm) | Single column dengan beberapa 2-kolom |
| `768–1024px` (md) | 2 kolom dominan, tablet-optimized |
| `1024–1440px` (lg) | Layout penuh, semua efek aktif |
| `> 1440px` (xl) | Max-width container ~1400px, konten tidak melar |

**Aturan mobile-first:**
- Semua animasi berat (parallax, backdrop-filter banyak, particle) dimatikan di mobile untuk performa
- CTA WhatsApp harus lebih prominent di mobile — orang mobile lebih natural langsung WA
- Touch target minimum 44x44px untuk semua elemen interaktif

---

## 7. Performa & Teknis

- **Target Lighthouse Score:** ≥ 90 (Performance), ≥ 95 (Accessibility), 100 (Best Practices)
- **LCP:** < 2.5 detik
- **Font loading:** `font-display: swap`, preload untuk Plus Jakarta Sans weights yang dipakai
- **Image:** WebP format, lazy loading untuk gambar di bawah fold, width/height explicit untuk semua `<img>`
- **Animasi:** `prefers-reduced-motion` dihormati — semua animasi off kalau user setting reduced motion
- **CSS Variables:** semua token warna dan spacing jadi CSS custom properties untuk konsistensi dan kemudahan maintenance
- **Smooth Scroll:** `scroll-behavior: smooth` atau GSAP ScrollTrigger untuk efek scroll yang lebih controlled

---

## 8. Micro-interactions & Detail yang Membedakan

Ini list kecil-kecil tapi ini yang membuat web terasa *crafted* bukan *generated*:

- Cursor masuk ke area tombol CTA: tombol sedikit "menarik" ke arah cursor (magnet effect)
- Teks link dengan underline yang tidak langsung muncul tapi "tumbuh" dari kiri ke kanan saat hover
- Page load: tidak ada loading screen, tapi ada staggered entrance animation yang sangat cepat (tidak menahan user)
- Error state / form kosong: animasi shake yang halus, bukan alert merah frontal
- Image hover di produk: subtle scale + brightness shift, bukan sekadar scale saja
- Scroll indicator di hero section: garis atau dot kecil yang menunjukkan "scroll down" — hilang setelah user scroll
- Section transition: antar section tidak hanya putih-putih, ada micro-divider atau shape separator yang subtle

---

## 9. Konten yang Perlu Disiapkan Tim

Untuk redesign ini berjalan optimal, tim perlu menyiapkan:

- [ ] Foto tim (staff) dengan background yang konsisten atau keduanya natural — resolusi tinggi
- [ ] Screenshot/mockup produk yang update dan berkualitas tinggi (minimal 1200px wide)
- [ ] Logo klien dalam format SVG atau PNG transparan
- [ ] Copywriting baru untuk semua headline section (ikuti arahan di poin per-halaman)
- [ ] Statistik atau angka yang bisa dipakai di about section (jumlah proyek, klien, tahun berdiri)
- [ ] Foto/video untuk hero background (opsional — alternatifnya pure animated gradient)

---

## 10. Yang Sengaja Dihindari

Daftar ini penting sebagai guardrails agar tidak jatuh ke jebakan desain yang terlalu "AI-generated":

- ❌ Terlalu banyak section dengan layout yang identik (variasikan grid per section)
- ❌ Gradient ungu-pink yang sudah terlalu umum di web agensi
- ❌ Ikon Lottie animasi yang generik dan terlalu berat
- ❌ Semua card ukurannya sama persis dan jaraknya identical
- ❌ Hero dengan background foto blur + overlay — sudah terlalu klise
- ❌ Testimonial carousel yang tidak ada bedanya dengan ribuan web lain
- ❌ Teks "Kami adalah tim yang berdedikasi dan berpengalaman" — terlalu generik
- ❌ Loading screen yang panjang — pengguna tidak perlu menunggu untuk melihat konten
- ❌ Animasi yang berulang terus tanpa henti (infinite loop yang tidak bisa di-pause)

---

## 11. Referensi Style (Arah, Bukan Tiruan)

Karakteristik web yang searah dengan visi ini:

- **Linear.app** — kejelasan, whitespace, tipografi yang sangat presisi
- **Vercel.com** — dark mode premium, glow yang subtil, konten yang breathe
- **Loom.com** — energetik tapi tidak noisy, CTA yang confident
- **Basement.studio** — berani secara layout, tidak takut asimetri
- **Rauno.me** — micro-detail yang diperhatikan, terasa hand-crafted

Kombinasikan esensi keberanian layout dari referensi-referensi ini dengan identitas biru-navy Astakira yang sudah ada.

---

*Dokumen ini adalah panduan desain dan produk. Implementasi teknis menyesuaikan stack yang digunakan (HTML/CSS/JS atau framework). Setiap keputusan desain dalam dokumen ini bisa didiskusikan dan disesuaikan dengan pertimbangan teknis dan branding.*