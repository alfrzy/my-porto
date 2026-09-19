# Panduan Personalisasi Portofolio

## 🎯 Langkah-Langkah Personalisasi

### 1. Identitas Dasar
```html
<!-- Ganti di Hero Section (baris ~73) -->
<h1 class="text-5xl sm:text-6xl font-bold mb-4">Halo, Saya [NAMA_LENGKAP]</h1>
<p class="text-xl text-gray-600 mb-2">[BIDANG_KEAHLIAN] & [KEAHLIAN_SEKUNDER]</p>

<!-- Contoh:
<h1 class="text-5xl sm:text-6xl font-bold mb-4">Halo, Saya Budi Santoso</h1>
<p class="text-xl text-gray-600 mb-2">Software Engineer & Full-Stack Developer</p>
-->
```

### 2. Foto Profil
```html
<!-- Ganti emoji dengan foto (baris ~67) -->
<!-- SEBELUM: -->
<div class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white text-4xl">
    <i class="fas fa-user"></i>
</div>

<!-- SESUDAH: -->
<img src="foto-profil.jpg" alt="Foto Profil" class="w-24 h-24 mx-auto mb-6 rounded-full object-cover border-4 border-purple-400">
```

### 3. Tentang Saya (About Section)
```html
<!-- Ganti teks di baris ~99-105 -->
<p class="text-lg text-gray-700 mb-6 leading-relaxed">
    Saya adalah fresh graduate dari program S1 Teknik Informatika di Universitas Wahid Hasyim 
    dengan dedikasi tinggi dalam [SPESIALISASI]. Selama masa studi, saya telah mengembangkan 
    fondasi pemrograman yang kuat melalui [PENGALAMAN].
</p>
```

### 4. Statistik (About Cards)
```html
<!-- Update nilai di baris ~114-128 -->
<p class="text-3xl font-bold text-purple-600">5+</p>  <!-- Ganti 5 -->
<p class="text-gray-600">Proyek Selesai</p>

<p class="text-3xl font-bold text-blue-600">100%</p>  <!-- Ganti 100 -->
<p class="text-gray-600">Komitmen</p>

<p class="text-3xl font-bold text-green-600">3.8</p>  <!-- Ganti 3.8 dengan IPK Anda -->
<p class="text-gray-600">IPK</p>
```

### 5. Technical Skills
```html
<!-- Ganti skill di baris ~151-179 -->
<!-- Format: -->
<span class="skill-badge">[SKILL_NAME]</span>

<!-- Contoh untuk bahasa pemrograman: -->
<span class="skill-badge">Python</span>
<span class="skill-badge">JavaScript</span>
<span class="skill-badge">Java</span>
<span class="skill-badge">PHP</span>
<span class="skill-badge">C++</span>
```

### 6. Project Cards
```html
<!-- Ganti 6 project card (baris ~235-440) -->
<!-- Template untuk setiap project: -->

<div class="card-hover bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
    <div class="h-40 bg-gradient-to-br from-[COLOR1] to-[COLOR2] flex items-center justify-center">
        <i class="fas fa-[ICON] text-white text-4xl"></i>
    </div>
    <div class="p-6">
        <h3 class="text-xl font-bold mb-2">[NAMA_PROYEK]</h3>
        <p class="text-gray-600 text-sm mb-4">[DESKRIPSI_SINGKAT]</p>
        <div class="mb-4">
            <p class="text-xs font-semibold text-gray-500 mb-2">Tech Stack:</p>
            <div class="flex flex-wrap gap-1">
                <span class="text-xs bg-[COLOR]-100 text-[COLOR]-700 px-2 py-1 rounded">[TECH1]</span>
                <span class="text-xs bg-[COLOR]-100 text-[COLOR]-700 px-2 py-1 rounded">[TECH2]</span>
                <span class="text-xs bg-[COLOR]-100 text-[COLOR]-700 px-2 py-1 rounded">[TECH3]</span>
            </div>
        </div>
        <div class="flex gap-3">
            <a href="https://github.com/username/repo" class="flex-1 text-center py-2 bg-gray-100 rounded hover:bg-gray-200 transition text-sm font-semibold">
                <i class="fab fa-github mr-1"></i>GitHub
            </a>
            <a href="https://demo-link.com" class="flex-1 text-center py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition text-sm font-semibold">
                <i class="fas fa-globe mr-1"></i>Demo
            </a>
        </div>
    </div>
</div>

<!-- Warna Gradient Pilihan:
from-purple-400 to-blue-500       (Ungu-Biru)
from-blue-400 to-green-500        (Biru-Hijau)
from-green-400 to-blue-500        (Hijau-Biru)
from-pink-400 to-red-500          (Pink-Merah)
from-yellow-400 to-orange-500     (Kuning-Orange)
from-indigo-400 to-purple-500     (Indigo-Ungu)
-->
```

### 7. Education Section
```html
<!-- Update di baris ~443-476 -->
<h3 class="text-2xl font-bold text-purple-600">S1 [NAMA_PROGRAM]</h3>
<p class="text-lg text-gray-700 mt-2">[NAMA_UNIVERSITAS]</p>
<span class="mt-4 md:mt-0 text-lg font-semibold text-gray-600">[TAHUN_MASUK] - [TAHUN_LULUS]</span>

<!-- Update data akademik: -->
<li><span class="font-semibold">IPK:</span> [IPK_ANDA] / 4.00</li>
<li><span class="font-semibold">Predikat:</span> [PREDIKAT]</li>
<li><span class="font-semibold">Skripsi:</span> [JUDUL_SKRIPSI]</li>

<!-- Update pencapaian: -->
<li><i class="fas fa-trophy text-yellow-500 mr-2"></i>[PENCAPAIAN_1]</li>
<li><i class="fas fa-award text-blue-500 mr-2"></i>[PENCAPAIAN_2]</li>
```

### 8. Contact Information
```html
<!-- Update di baris ~522-536 -->
<a href="mailto:[EMAIL_ANDA]" class="opacity-80 hover:opacity-100">[EMAIL_ANDA]</a>
<a href="tel:+62[NO_TELEPON]" class="opacity-80 hover:opacity-100">+62 [NO_TELEPON]</a>
<p class="opacity-80">[KOTA], [PROVINSI], Indonesia</p>

<!-- Update Social Links di baris ~544-552 -->
<a href="https://linkedin.com/in/[USERNAME]" class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition">
    <i class="fab fa-linkedin text-xl"></i>
</a>
<a href="https://github.com/[USERNAME]" class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition">
    <i class="fab fa-github text-xl"></i>
</a>
```

### 9. CV Download Button
```html
<!-- Update di baris ~79 -->
<a href="path/to/cv-anda.pdf" class="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition">
    Unduh CV
</a>
```

## 🎨 Color Palette Options

```
1. Purple & Blue (Default)
   from-purple-600 to-blue-600

2. Teal & Green
   from-teal-600 to-green-600

3. Indigo & Purple
   from-indigo-600 to-purple-600

4. Red & Pink
   from-red-600 to-pink-600

5. Orange & Yellow
   from-orange-600 to-yellow-600
```

## 🔍 SEO Optimization

```html
<!-- Update title dan meta description (baris 5-6) -->
<title>Portofolio [NAMA] | Software Engineer - Universitas Wahid Hasyim</title>
<meta name="description" content="Portofolio profesional [NAMA], fresh graduate Teknik Informatika Universitas Wahid Hasyim. Showcasing proyek-proyek menarik dan keahlian di web development.">
```

## 📱 Responsive Testing

Buka DevTools (F12) dan test di berbagai ukuran:
- Mobile: 375px (iPhone SE)
- Tablet: 768px (iPad)
- Desktop: 1024px+ (Desktop)

## ✅ Checklist Sebelum Deploy

- [ ] Update nama dan deskripsi identitas
- [ ] Add foto profil (ganti emoji)
- [ ] Update IPK dan pencapaian
- [ ] Edit semua 6 project cards
- [ ] Update social links (LinkedIn, GitHub, dll)
- [ ] Update email dan nomor telepon
- [ ] Test responsive design di mobile
- [ ] Test semua link (GitHub, Demo, CV)
- [ ] Update title dan meta description
- [ ] Deploy ke GitHub Pages / Netlify / Vercel

## 🚀 Deploy ke GitHub Pages

```bash
# 1. Buat repository baru di GitHub: "my-portfolio"
# 2. Push file ke repository:
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/[USERNAME]/my-portfolio.git
git push -u origin main

# 3. Buka Settings > Pages > Deploy from branch > main > Save
# 4. Akses di: https://[USERNAME].github.io/my-portfolio
```

## 📧 Setup Email Notification (Optional)

Untuk menerima notifikasi email saat ada yang submit form, gunakan service seperti:
- **Formspree** (Gratis): https://formspree.io
- **Basin** (Gratis): https://basinapp.com
- **Firebase** (Gratis tier): https://firebase.google.com

Ganti action form:
```html
<form action="https://formspree.io/f/[FORM_ID]" method="POST" id="contactForm">
    <!-- form content tetap sama -->
</form>
```

---

Selamat customize portofolio Anda! 🎉
