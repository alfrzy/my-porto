# Panduan Deployment Portofolio

## 🚀 Opsi Deployment

### 1. GitHub Pages (Recommended untuk Beginners)

#### Setup
```bash
# 1. Buat akun GitHub (jika belum ada)
# https://github.com/signup

# 2. Buat repository baru
# - Nama: my-portfolio
# - Visibility: Public
# - Jangan inisialisasi dengan README

# 3. Clone repository ke komputer
git clone https://github.com/[USERNAME]/my-portfolio.git
cd my-portfolio

# 4. Copy file index.html, README.md, PERSONALISASI.md, data.json ke folder
# (Anda sudah punya file-file ini)

# 5. Push ke GitHub
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/[USERNAME]/my-portfolio.git
git push -u origin main

# 6. Enable GitHub Pages
# - Buka repository di GitHub
# - Klik Settings
# - Scroll ke "Pages" section
# - Source: Deploy from a branch
# - Branch: main
# - Folder: / (root)
# - Klik Save

# 7. Akses portofolio di:
# https://[USERNAME].github.io/my-portfolio
```

**Keuntungan:**
- ✅ Gratis
- ✅ Auto-deploy saat push ke GitHub
- ✅ Custom domain support
- ✅ Built-in analytics
- ✅ HTTPS included

**Waktu deployment:** 1-5 menit

---

### 2. Netlify (Recommended untuk Performance)

#### Setup via GitHub
```bash
# 1. Pastikan repo sudah di GitHub

# 2. Kunjungi https://app.netlify.com

# 3. Klik "Connect to Git"

# 4. Pilih GitHub

# 5. Authorize Netlify

# 6. Select repository: my-portfolio

# 7. Build settings (leave default):
# - Build command: (leave empty)
# - Publish directory: . (current directory)

# 8. Klik "Deploy site"

# 9. Akses di URL yang diberikan Netlify
# atau setup custom domain
```

#### Setup Manual (Drag & Drop)
```bash
# 1. Kunjungi https://app.netlify.com/drop

# 2. Drag & drop folder my-portfolio ke area yang disediakan

# 3. Selesai! URL akan generate otomatis
```

**Keuntungan:**
- ✅ Super cepat (CDN global)
- ✅ Auto-deploy dari GitHub
- ✅ Free HTTPS
- ✅ Analytics included
- ✅ Form handling bawaan (tanpa backend)
- ✅ Custom domain gratis

**Waktu deployment:** < 1 menit

---

### 3. Vercel (Best untuk Modern Web)

#### Setup
```bash
# 1. Install Vercel CLI (optional)
npm install -g vercel

# 2. Kunjungi https://vercel.com

# 3. Klik "Sign Up" → pilih GitHub

# 4. Authorize dan connect account

# 5. Import project:
# - Klik "New Project"
# - Select repository: my-portfolio
# - Framework: Other (Static)
# - Root Directory: ./
# - Build Command: (leave empty)
# - Output Directory: ./

# 6. Klik "Deploy"

# 7. Akses di https://[PROJECT].vercel.app
```

**Keuntungan:**
- ✅ Sangat cepat (Edge Network)
- ✅ Auto-scaling
- ✅ Analytics mendalam
- ✅ A/B testing support
- ✅ Serverless functions (future use)

**Waktu deployment:** < 1 menit

---

### 4. Hosting Tradisional (Cpanel/Plesk)

#### Jika punya hosting sendiri:
```bash
# 1. Login ke cPanel/Plesk

# 2. File Manager → Upload folder my-porto
# Atau via FTP:

# Via FTP (FileZilla):
# - Host: ftp.domain.com
# - Username: cpanel_username
# - Password: cpanel_password
# - Port: 21

# 3. Upload index.html dan files ke public_html

# 4. Akses di: https://domain.com
```

---

## 🔧 Setup Domain Custom

### Untuk GitHub Pages
```
1. Beli domain (GoDaddy, Namecheap, etc)

2. Settings > Pages > Custom domain
   Input: yourdomain.com

3. DNS Settings di domain registrar:
   Record Type: CNAME
   Name: www
   Value: [USERNAME].github.io

4. Tunggu 5-30 menit propagasi DNS
```

### Untuk Netlify
```
1. Beli domain atau gunakan Netlify DNS

2. Site settings > Domain management > Add domain

3. Ikuti instruksi untuk update DNS records

4. Auto-configured jika pakai Netlify DNS
```

---

## 📊 Setup Analytics

### Google Analytics
```html
<!-- Tambahkan di sebelum </head> di index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>

<!-- Ganti GA_MEASUREMENT_ID dengan ID Anda dari Google Analytics -->
```

### Netlify Analytics (Built-in)
- Automatic jika deploy di Netlify
- View di: Site > Analytics

---

## 📧 Setup Form Submission

### Opsi 1: Formspree (Recommended)
```html
<!-- Update form action di index.html (baris ~558) -->
<form action="https://formspree.io/f/[FORM_ID]" method="POST">
    <!-- form fields tetap sama -->
</form>

<!-- Steps:
1. Kunjungi https://formspree.io
2. Sign up dengan email
3. Pilih "New Form"
4. Input email penerima
5. Copy form ID
6. Update di HTML
-->
```

### Opsi 2: Basin (Simple)
```html
<form action="https://basinapp.com/api/v1/basin/[BASIN_ID]" method="POST">
    <!-- form fields tetap sama -->
</form>

<!-- Steps:
1. https://basinapp.com
2. Buat akun
3. Create new basin
4. Copy ID
5. Update di HTML
-->
```

### Opsi 3: EmailJS (No Backend)
```html
<!-- Tambahkan script sebelum </body> -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>
<script>
  emailjs.init("YOUR_PUBLIC_KEY");
  
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    emailjs.sendForm("SERVICE_ID", "TEMPLATE_ID", this).then(
      function() {
        alert("Pesan terkirim berhasil!");
        document.getElementById("contactForm").reset();
      },
      function(error) {
        alert("Error: " + error);
      }
    );
  });
</script>
```

---

## 🎨 Custom Domain di Berbagai Platform

### GitHub Pages + Custom Domain
```
Domain Registrar Settings:
A Record: 185.199.108.153
A Record: 185.199.109.153
A Record: 185.199.110.153
A Record: 185.199.111.153
CNAME (www): yourusername.github.io
```

### Netlify + Custom Domain
```
Netlify auto-setup DNS jika menggunakan Netlify nameservers
Atau setup manual dengan CNAME pointing ke Netlify
```

---

## ✅ Checklist Pre-Deployment

- [ ] Semua file sudah update dengan data personal
- [ ] Test responsive di mobile (buka index.html lokal)
- [ ] Cek semua link (GitHub, Demo, Social, CV)
- [ ] Test form submission
- [ ] Update title dan meta description
- [ ] Ganti foto profil dari emoji
- [ ] Pastikan tidak ada typo atau grammar error
- [ ] Screenshot untuk portfolio (opsional)

---

## 🚨 Troubleshooting

### GitHub Pages tidak update
```
Solusi:
1. Pastikan file di main branch
2. Klik Settings > Pages > Save ulang
3. Tunggu 5 menit
4. Clear cache browser (Ctrl+Shift+Delete)
```

### Netlify loading lambat
```
Solusi:
1. Check Netlify logs (Deploys section)
2. Clear Netlify cache
3. Redeploy manual
```

### Form tidak mengirim email
```
Solusi:
1. Check form action URL
2. Verify email configuration di service (Formspree/Basin)
3. Check browser console untuk error
4. Test dengan email yang berbeda
```

### Custom domain tidak bekerja
```
Solusi:
1. Pastikan DNS record sudah ter-update (cek di mxToolbox)
2. Tunggu 24-48 jam untuk full propagation
3. Clear DNS cache di komputer:
   Windows: ipconfig /flushdns
   Mac: sudo dscacheutil -flushcache
   Linux: sudo systemd-resolve --flush-caches
```

---

## 📈 Optimization Tips

### Performance
```
1. Compress images (jika menggunakan foto)
2. Minify CSS/JS (optional, Netlify/Vercel sudah auto)
3. Enable gzip compression
4. Use CDN (Tailwind & Font Awesome sudah via CDN)
```

### SEO
```
1. Add meta tags (og:image, og:description, etc)
2. Create sitemap.xml
3. Submit ke Google Search Console
4. Setup robots.txt
```

### Security
```
1. Enable HTTPS (auto di semua platform)
2. Add security headers
3. Regular content updates
4. Backup repo ke multiple locations
```

---

## 🔄 Continuous Deployment

Semua perubahan akan auto-deploy saat push ke main:

```bash
# Update portfolio:
git add .
git commit -m "Update projects and skills"
git push origin main

# Tunggu 1-5 menit, live!
```

---

## 📱 Mobile App (Future)

Ketika siap convert ke mobile app:
```
- React Native / Flutter / SwiftUI
- Reuse project data dari data.json
- Tambah push notifications
- Offline support
```

---

Selamat deploy! Portofolio Anda sekarang live di internet! 🎉
