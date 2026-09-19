# Panduan Lengkap - Struktur & Fitur Portofolio

## 📑 Daftar Isi
1. [Struktur HTML](#struktur-html)
2. [Penjelasan Setiap Section](#penjelasan-setiap-section)
3. [CSS Classes Reference](#css-classes-reference)
4. [JavaScript Functions](#javascript-functions)
5. [Customization Advanced](#customization-advanced)

---

## 🏗️ Struktur HTML

### Bagian Utama
```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Meta tags, title, CDN links -->
  </head>
  <body>
    <nav>           <!-- Navigation Bar -->
    <section id="home">       <!-- Hero Section -->
    <section id="about">      <!-- About Me -->
    <section id="skills">     <!-- Skills & Expertise -->
    <section id="projects">   <!-- Projects Showcase -->
    <section id="education">  <!-- Education Info -->
    <section id="contact">    <!-- Contact & Form -->
    <footer>        <!-- Footer -->
    <script>        <!-- JavaScript -->
  </body>
</html>
```

---

## 📄 Penjelasan Setiap Section

### 1. NAVIGATION BAR (Fixed)
**Lokasi:** Baris 52-78
**Fungsi:** Menu navigasi tetap di atas, responsive
**Fitur:**
- Desktop menu horizontal
- Mobile hamburger menu (hidden by default)
- Smooth scroll ke section
- Fixed background dengan opacity

**Customize:**
```html
<!-- Tambah menu item: -->
<a href="#section-baru" class="hover:text-purple-600 transition">Menu Baru</a>
```

---

### 2. HERO SECTION (id="home")
**Lokasi:** Baris 80-110
**Fungsi:** First impression, greeting, CTA buttons
**Elemen:**
- Avatar/Profile picture
- Greeting text
- Bidang keahlian
- 2 CTA buttons

**Customize Avatar:**
```html
<!-- Opsi 1: Emoji (default) -->
<div class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white text-4xl">
    <i class="fas fa-user"></i>
</div>

<!-- Opsi 2: Foto -->
<img src="foto.jpg" alt="Profile" class="w-24 h-24 mx-auto mb-6 rounded-full object-cover border-4 border-purple-400">

<!-- Opsi 3: Initials -->
<div class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white text-3xl font-bold">
    AB
</div>
```

---

### 3. ABOUT SECTION (id="about")
**Lokasi:** Baris 112-149
**Fungsi:** Cerita singkat tentang Anda
**Elemen:**
- Deskripsi paragraf
- 3 statistik cards

**Stats Template:**
```html
<div class="text-center p-4 bg-[COLOR]-50 rounded-lg">
    <p class="text-3xl font-bold text-[COLOR]-600">5+</p>
    <p class="text-gray-600">Proyek Selesai</p>
</div>

<!-- Color options: purple, blue, green, red, yellow -->
```

---

### 4. SKILLS SECTION (id="skills")
**Lokasi:** Baris 151-229
**Fungsi:** Showcase technical & soft skills
**Elemen:**
- Technical Skills (left column)
- Soft Skills dengan progress bars (right column)

**Add New Technical Skill:**
```html
<div>
    <p class="font-semibold mb-2">Kategori Baru</p>
    <div class="flex flex-wrap">
        <span class="skill-badge">Skill 1</span>
        <span class="skill-badge">Skill 2</span>
    </div>
</div>
```

**Add New Soft Skill:**
```html
<div class="bg-white p-4 rounded-lg shadow">
    <div class="flex items-center justify-between mb-2">
        <p class="font-semibold">Skill Name</p>
        <span class="text-purple-600">85%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2">
        <div class="bg-purple-600 h-2 rounded-full" style="width: 85%"></div>
    </div>
</div>
```

---

### 5. PROJECTS SECTION (id="projects")
**Lokasi:** Baris 231-440
**Fungsi:** Portfolio showcase dengan 6 project cards
**Elemen per Card:**
- Header dengan gradient background & icon
- Title & description
- Tech stack badges
- GitHub & Demo buttons

**Edit Project Card:**
```html
<div class="card-hover bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
    <!-- Header -->
    <div class="h-40 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
        <i class="fas fa-[ICON] text-white text-4xl"></i>
    </div>
    
    <!-- Content -->
    <div class="p-6">
        <h3 class="text-xl font-bold mb-2">[PROJECT_NAME]</h3>
        <p class="text-gray-600 text-sm mb-4">[DESCRIPTION]</p>
        
        <!-- Tech Stack -->
        <div class="mb-4">
            <p class="text-xs font-semibold text-gray-500 mb-2">Tech Stack:</p>
            <div class="flex flex-wrap gap-1">
                <span class="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">[TECH]</span>
            </div>
        </div>
        
        <!-- Buttons -->
        <div class="flex gap-3">
            <a href="https://github.com" class="flex-1 text-center py-2 bg-gray-100 rounded hover:bg-gray-200">
                <i class="fab fa-github mr-1"></i>GitHub
            </a>
            <a href="https://demo.com" class="flex-1 text-center py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                <i class="fas fa-globe mr-1"></i>Demo
            </a>
        </div>
    </div>
</div>
```

**Icon Options (Font Awesome):**
```
fa-laptop-code      (Code/Development)
fa-chart-line       (Analytics)
fa-book            (Learning)
fa-tasks           (Todo/Tasks)
fa-utensils        (Food/Recipes)
fa-wallet          (Finance)
fa-mobile-alt      (Mobile App)
fa-database        (Database)
fa-cloud           (Cloud/API)
fa-globe           (Web/Internet)
fa-shopping-cart   (E-commerce)
fa-users           (Social/Community)
```

**Gradient Color Options:**
```
from-purple-400 to-blue-500
from-blue-400 to-green-500
from-green-400 to-blue-500
from-pink-400 to-red-500
from-yellow-400 to-orange-500
from-indigo-400 to-purple-500
from-cyan-400 to-blue-500
from-teal-400 to-green-500
from-red-400 to-pink-500
from-orange-400 to-yellow-500
```

---

### 6. EDUCATION SECTION (id="education")
**Lokasi:** Baris 442-486
**Fungsi:** Display pendidikan formal & pencapaian
**Elemen:**
- Degree & university info
- Dates
- Akademik data (IPK, predikat, skripsi)
- Achievements & organizations
- Relevant courses checklist

**Update Education Info:**
```html
<h3 class="text-2xl font-bold text-purple-600">[DEGREE]</h3>
<p class="text-lg text-gray-700 mt-2">[UNIVERSITY]</p>
<span class="text-lg font-semibold text-gray-600">[START] - [END]</span>
```

---

### 7. CONTACT SECTION (id="contact")
**Lokasi:** Baris 488-575
**Fungsi:** Contact info + contact form
**Elemen Kiri:**
- Intro text
- Contact methods (email, phone, location)
- Social media links

**Elemen Kanan:**
- Contact form (HTML)
- Form fields: name, email, subject, message

**Update Contact Info:**
```html
<a href="mailto:email@domain.com">email@domain.com</a>
<a href="tel:+6281234567890">+62 812 3456 7890</a>
<p>Kota, Provinsi, Indonesia</p>
```

**Social Link Icons:**
```html
<a href="https://linkedin.com/in/username">
    <i class="fab fa-linkedin"></i>
</a>
<a href="https://github.com/username">
    <i class="fab fa-github"></i>
</a>
<a href="https://twitter.com/username">
    <i class="fab fa-twitter"></i>
</a>
<a href="https://instagram.com/username">
    <i class="fab fa-instagram"></i>
</a>
```

---

### 8. FOOTER
**Lokasi:** Baris 577-582
**Fungsi:** Copyright & credit
**Customize:**
```html
<p class="mb-2">&copy; [YEAR] [YOUR_NAME]. All rights reserved.</p>
```

---

## 🎨 CSS Classes Reference

### Tailwind Classes Digunakan

| Class | Fungsi |
|-------|--------|
| `max-w-6xl` | Container max width 1152px |
| `mx-auto` | Center horizontal |
| `py-20` | Padding top-bottom 80px |
| `px-4` | Padding left-right 16px |
| `grid md:grid-cols-2` | 2 columns di desktop, 1 mobile |
| `space-y-4` | Vertical spacing 16px |
| `gap-8` | Grid gap 32px |
| `rounded-lg` | Border radius 8px |
| `shadow-md` | Subtle shadow |
| `shadow-lg` | Larger shadow |
| `hover:` | Hover state |
| `transition` | Smooth animation |
| `from-` `to-` | Gradient colors |

### Custom CSS Classes

```css
.gradient-text {
    /* Gradient text effect */
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.card-hover {
    /* Hover animation untuk cards */
    transition: all 0.3s ease;
}
.card-hover:hover {
    transform: translateY(-8px);  /* Move up 8px */
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.skill-badge {
    /* Styled skill tag */
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #f3f4f6;
    border-radius: 50px;
    font-size: 0.875rem;
    margin: 0.25rem;
    transition: all 0.3s ease;
}
.skill-badge:hover {
    background: #667eea;
    color: white;
    transform: scale(1.05);  /* Zoom 5% */
}
```

---

## ⚙️ JavaScript Functions

### 1. Mobile Menu Toggle
```javascript
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
```
**Fungsi:** Toggle hamburger menu visibility

### 2. Close Menu on Link Click
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href !== '#') {
            mobileMenu.classList.add('hidden');
        }
    });
});
```
**Fungsi:** Auto-close menu saat user klik link

### 3. Form Submission Handler
```javascript
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Terima kasih telah mengirim pesan! Saya akan segera menghubungi Anda.');
    document.getElementById('contactForm').reset();
});
```
**Fungsi:** Handle form submit (show alert & clear form)

**Untuk Email Notification, Ganti dengan:**
```javascript
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Option 1: Formspree
    fetch('https://formspree.io/f/[FORM_ID]', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Pesan terkirim!');
            document.getElementById('contactForm').reset();
        }
    })
    .catch(error => console.error('Error:', error));
});
```

---

## 🚀 Customization Advanced

### 1. Tambah Dark Mode

```html
<!-- Tambah button di navbar: -->
<button id="darkModeToggle" class="ml-4 text-2xl hover:text-purple-600">
    <i class="fas fa-moon"></i>
</button>

<!-- Tambah style di <style> tag: -->
<style>
    body.dark-mode {
        @apply bg-gray-900 text-white;
    }
    body.dark-mode nav {
        @apply bg-gray-800;
    }
</style>

<!-- Tambah script sebelum </body>: -->
<script>
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Check saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark);
        darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
</script>
```

### 2. Tambah Blog Section

```html
<!-- Tambah section di antara Projects & Education: -->
<section id="blog" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">Blog</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Blog card template: -->
            <article class="card-hover bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div class="h-40 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <i class="fas fa-pen-fancy text-white text-4xl"></i>
                </div>
                <div class="p-6">
                    <p class="text-sm text-purple-600 mb-2">Sep 18, 2024</p>
                    <h3 class="text-xl font-bold mb-2">Cara Membangun Portofolio Web</h3>
                    <p class="text-gray-600 text-sm mb-4">Tips dan trik membangun portofolio web yang profesional untuk fresh graduate...</p>
                    <a href="#" class="text-purple-600 hover:text-purple-700 font-semibold">Baca Selengkapnya →</a>
                </div>
            </article>
        </div>
    </div>
</section>

<!-- Update navbar untuk blog link: -->
<a href="#blog" class="hover:text-purple-600 transition">Blog</a>
```

### 3. Tambah Testimonials

```html
<!-- Section baru setelah About: -->
<section id="testimonials" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">Testimonials</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Testimonial card: -->
            <div class="card-hover bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center mr-4 font-bold">
                        AB
                    </div>
                    <div>
                        <p class="font-bold">Nama Pemberi</p>
                        <p class="text-sm text-gray-600">CEO di Perusahaan</p>
                    </div>
                </div>
                <p class="text-gray-700 italic">"Testimonial text di sini. Bagus working dengan Anda!"</p>
                <div class="mt-4 text-yellow-400">
                    ⭐⭐⭐⭐⭐
                </div>
            </div>
        </div>
    </div>
</section>
```

### 4. Smooth Scroll Enhancement

```html
<!-- Tambah di <style> section: -->
<style>
    html {
        scroll-behavior: smooth;  /* Already in template */
        scroll-padding-top: 80px;  /* Offset untuk fixed navbar */
    }
</style>
```

### 5. Lazy Loading untuk Images

```html
<!-- Update img tags dengan: -->
<img src="foto.jpg" alt="Profile" loading="lazy" class="...">
```

---

## 📱 Responsive Breakpoints (Tailwind)

| Prefix | Min Width | Penggunaan |
|--------|-----------|-----------|
| - | 0px | Default (mobile) |
| `sm:` | 640px | Small devices |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Large desktop |
| `2xl:` | 1536px | Extra large |

**Contoh:**
```html
<!-- 1 column mobile, 2 columns tablet, 3 columns desktop -->
<div class="grid md:grid-cols-2 lg:grid-cols-3">
```

---

Dokumentasi lengkap selesai! 📚✨
