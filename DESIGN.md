# Design System & Motion Specification: EDWARD WILLIAM® Portfolio

Dokumen ini berisi spesifikasi sistem desain visual (*Design System*), tata letak, serta aturan animasi & transisi (*Motion System*) untuk platform web portofolio gaya *High-Fashion Swiss/Modernist Editorial*.

---

## 1. Konsep Visual & Estetika (Visual Philosophy)

- **Gaya Desain:** High-Fashion Swiss Minimalist / Modernist Editorial.
- **Prinsip Utama:** Tipografi monumental yang berani (*bold typography*), struktur *editorial grid*, kontras warna yang tegas, serta mikro-interaksi kustom yang presisi.
- **Suasana (Vibe):** Eksklusif, artistik, futuristik, dan terstruktur secara editorial.

---

## 2. Palet Warna (Color Palette)

| Kategori | Nama Warna | Kode Hex | Penggunaan |
| :--- | :--- | :--- | :--- |
| **Primary Accent** | Electric Brand Blue | `#1632F0` | Judul hero utama, tombol CTA primer, indikator status, dan aksen hover. |
| **Deep Accent** | Brand Deep Blue | `#0C22C5` | State active/hover pada tombol primer dan elemen interaktif. |
| **Light Background** | Off-White / Cream | `#FBFBFB` | Latar belakang utama halaman (Light Mode Base). |
| **Dark Background** | Midnight Dark | `#121212` | Latar belakang footer dan kontainer elemen berkontras tinggi. |
| **Card / Surface Dark**| Dark Charcoal | `#1A1A1A` | Latar belakang kartu foto dan modul sekunder. |
| **Neutral Text Dark** | Deep Charcoal | `#121212` / `#171717` | Teks paragraf, sub-heading, dan navigasi utama. |
| **Muted Text / Border**| Cool Zinc / Slate | `#71717A` / `#94A3B8` | Sub-teks, tanggal, keterangan *fine-print*, dan garis *grid border*. |

---

## 3. Tipografi (Typography)

- **Headings & Titles (Sans-serif display):** `'Cabinet Grotesk'`, `'Space Grotesk'`, sans-serif.
  - Sifat: Geometris, tegas, berkarakter *editorial high-fashion*.
- **Technical UI & Codes (Monospace):** `'JetBrains Mono'`, monospace.
  - Sifat: Digunakan untuk nomor urut (`01`, `02`), tanggal, label status, dan metadata.

### Skala Tipografi:
- **Massive Hero Title:** `clamp(4rem, 14.5vw, 15rem)` | *Line-height:* `0.82` | *Letter-spacing:* `-0.05em`
- **Giant Footer Title:** `clamp(3.5rem, 15vw, 18rem)` | *Line-height:* `0.75` | *Letter-spacing:* `-0.04em`
- **Section Heading (H2):** `3xl` hingga `8xl` (`font-black`, *uppercase*)
- **Sub-heading / Card Title (H3):** `2xl` hingga `3xl` (`font-black`, *uppercase*)
- **Technical Label / Code:** `10px` hingga `12px` (`font-mono`, *uppercase*, *tracking-widest*)

---

## 4. Layout & Modul Antarmuka

### A. Navigation Bar (Header)
- **Tipe:** Sticky Header dengan efek *Backdrop Blur* (`backdrop-blur-md bg-opacity-95`).
- **Elemen Navigasi:** Tautan *monospace* dengan animasi *underline slide-in* saat hover.

### B. Hero Section
- **Typography Focus:** Monolitik wordmark `EDWARD®` dengan superscript logo trademark yang dapat berputar saat di-hover.
- **Overlay Visual:** Galeri overlay dengan pencahayaan merah (*red tint*) serta efek *motion blur cyan* pada foto profil utama.
- **Bar-Code Scanner Area:** Modul dekoratif barcode dengan garis laser pemindai teranimasi secara *looping*.

### C. Curated Portfolio Showcase
- **Tampilan:** Blok biru solid (`#1632F0`) dengan teks kontras putih.
- **Grid:** Asimetris 3-Kolom dengan orientasi aspek rasio foto bervariasi (`4/5`, `1/1`, `3/5`).

### D. Exhibition Itinerary
- **Tampilan:** Tabel daftar eksibisi berbasis *editorial grid border*.
- **Efek Hover:** Latar belakang baris berubah menjadi subtle gray, foto eksibisi membesar (*scale-up*), dan ikon bullet teranimasi membesar.

### E. Floating Sticker CTA Section
- **Tampilan:** Seksi panggilan aksi dengan stiker-stiker polaroid yang mengambang interaktif (*floating ambient collage*).

---

## 5. System Animasi & Transisi (Motion Specification)

Sistem gerakan dirancang menggunakan prinsip *physics-based easing* (`cubic-bezier(0.16, 1, 0.3, 1)`) untuk memberikan kesan premium dan responsif.

### A. Micro-Interactions (Hover & Cursor Effects)

1. **Custom Editorial Cursor Follower:**
   - **Dot Cursor:** Mengikuti kursor dengan kecepatan tinggi (`easing 0.75`).
   - **Follower Circle:** Lingkaran pelacak halus (`easing 0.16`, `mix-blend-mode: difference`).
   - **Active State (`.cursor-active`):** Saat kursor menyentuh elemen interaktif (`a`, `button`, `.sticker-card`, judul), lingkaran pelacak membesar hingga `68px` dengan latar transparan.

2. **Typography Hover Dynamics:**
   - **Massive & Footer Titles:**
     - *Transition:* `letter-spacing 0.5s cubic-bezier(0.16, 1, 0.3, 1), color 0.4s ease`
     - *Hover Behavior:* Renggang teks merapat/meregang halus, dan berubah warna menjadi `Brand Blue`.
   - **Nav Links Underline Sweep:**
     - *Transition:* `width 0.3s ease-out` (dari `0%` ke `100%`).

3. **Magnetic Element Effect (`.magnetic-elem`):**
   - Tombol-tombol utama mengikuti pergerakan posisi kursor pengguna saat berada di atas tombol.
   - *Offset Shift:* `translate(x * 0.22px, y * 0.22px)`.

4. **Editorial Shimmer Sweep:**
   - Menggunakan Pseudo-element `::after` dengan gradien transparan bercahaya.
   - *Animation:* `shimmerSweep 1.2s ease-out` saat kartu foto di-hover.

---

### B. Keyframe Animations (CSS Keyframes)

1. **Barcode Laser Scanner (`scan-barcode`):**
   ```css
   @keyframes scan-barcode {
     0%   { left: 0%; opacity: 0.2; }
     50%  { opacity: 1; }
     100% { left: 100%; opacity: 0.3; }
   }
   /* Duration: 2.8s ease-in-out, infinite alternate */