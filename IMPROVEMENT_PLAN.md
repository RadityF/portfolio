# Portfolio Improvement Plan — radityf.me
> Gabungan audit: Hermes Browser Review + Claude Code Deep Analysis
> Tanggal: 14 Juni 2026

---

## Status Eksekusi

| # | Item | Kategori | Effort | Status |
|---|------|----------|--------|--------|
| 1 | Fix placeholder GitHub links (Heart Disease, Sales Dashboard) | Critical | 5 menit | ✅ Done |
| 2 | Guard empty repoUrl di ProjectCard (Cloud Security) | Critical | 5 menit | ✅ Done |
| 3 | Isi meta description di layout.tsx | Critical | 5 menit | ✅ Done |
| 4 | Tambah professional title di Hero | Critical | 10 menit | ✅ Done |
| 5 | Update bio — ganti "third-year" sesuai status terkini | Critical | 5 menit | ✅ Done |
| 6 | Fix memory leak canvas di HeroBackground.tsx | Critical (Teknis) | 10 menit | ✅ Done |
| 7 | Rename file typo: "Heart Deases.pdf" → "heart_disease_prediction.pdf" | Critical | 5 menit | ✅ Done |
| 8 | Tambah tombol Download CV di Hero | High | 15 menit | ✅ Done |
| 9 | Tambah social links (LinkedIn, GitHub) di Hero | High | 15 menit | ✅ Done |
| 10 | Buat Navbar sticky | High | 30 menit | ✅ Done |
| 11 | Buat Footer dengan social links & copyright | High | 20 menit | ✅ Done |
| 12 | Restruktur Tech Stack by kategori (ML, Vision, LLM, Backend, dll) | High | 20 menit | ✅ Done |
| 13 | Experience section: tambah accordion collapse/expand | High | 30 menit | ✅ Done |
| 14 | Tambah scroll indicator di Hero (animated arrow) | Medium | 10 menit | ✅ Done |
| 15 | Migrate `<img>` → next/image di ProjectCard & ProjectModal | Medium (Teknis) | 20 menit | ✅ Done |
| 16 | Tambah foto profil di About section | High | ~butuh foto | ⏳ Butuh aset |
| 17 | Ganti AI cover images → real screenshots per project | Critical | ~butuh aset | ⏳ Butuh aset |
| 18 | Tambah metrik nyata di tiap project description | High | ~butuh data | ⏳ Butuh data |

---

## Detail Per Item

### 1. Fix Placeholder GitHub Links
**File:** `components/projects/ProjectsGrid.tsx`
- Project id "5" (Heart Disease): `repoUrl: "https://github.com/username/project"` → ganti ke URL asli atau `""`
- Project id "7" (Sales Dashboard): `repoUrl: "https://github.com/username/project"` → ganti ke URL asli atau `""`

### 2. Guard Empty repoUrl
**File:** `components/projects/ProjectCard.tsx` baris 44
```tsx
// BEFORE:
<a href={project.repoUrl} ...>
// AFTER:
{project.repoUrl && <a href={project.repoUrl} ...>}
```

### 3. Meta Description
**File:** `app/layout.tsx` baris 21
```ts
description: "Raditya Fauzan — AI/ML Engineer & Mathematics student at Universitas Indonesia. Building intelligent systems with PyTorch, LangChain, and modern ML stacks.",
```

### 4. Professional Title di Hero
**File:** `components/hero/HeroContent.tsx`
Tambah baris setelah nama badge, sebelum h1:
```tsx
<p className="text-sm text-[var(--foreground)]/50 font-mono">
  AI · ML Engineer  ·  Data Scientist  ·  Mathematics @ UI
</p>
```

### 5. Update Bio
**File:** `components/about/About.tsx`
- Ganti `"third-year undergraduate"` sesuai status aktual
- Periksa konsistensi tahun di Timeline

### 6. Fix Memory Leak Canvas
**File:** `components/hero/HeroBackground.tsx`
```tsx
// Simpan animationId dan cancel di cleanup
let animationId: number;
const animate = () => {
  // ... existing code ...
  animationId = requestAnimationFrame(animate);
};
animate();
return () => {
  window.removeEventListener("resize", handleResize);
  cancelAnimationFrame(animationId); // tambah ini
};
```

### 7. Rename File Typo
```bash
mv "public/Heart Deases.pdf" "public/heart_disease_prediction.pdf"
mv "public/cloud data security risk.pdf" "public/cloud_security_risk.pdf"
```
Lalu update reference di `ProjectsGrid.tsx`.

### 8. Tombol Download CV
**File:** `components/hero/HeroContent.tsx`
Tambah link ketiga di CTA group:
```tsx
<a href="/raditya_fauzan_cv.pdf" download className="...">
  <Download size={18} /> Download CV
</a>
```
*Perlu: upload file CV ke `/public/raditya_fauzan_cv.pdf`*

### 9. Social Links di Hero
**File:** `components/hero/HeroContent.tsx`
Tambah setelah CTA buttons:
```tsx
<div className="flex gap-4 mt-6">
  <a href="https://github.com/RadityF" target="_blank">...</a>
  <a href="https://linkedin.com/in/[username]" target="_blank">...</a>
</div>
```

### 10. Sticky Navbar
**File baru:** `components/navbar/Navbar.tsx`
- Logo: `Raditya_Fauzan` (font mono, neon blue)
- Links: About · Experience · Projects · Contact
- Behavior: transparent on top, solid background on scroll
- Mobile: hamburger menu

### 11. Footer
**File baru:** `components/footer/Footer.tsx`
```
© 2026 Raditya Fauzan  ·  Built with Next.js & Tailwind
[GitHub] [LinkedIn] [Email]          ↑ Back to Top
```

### 12. Tech Stack Terstruktur
**File:** `components/about/About.tsx`
Kelompokkan 17 tech ke dalam kategori:
- ML/DL: PyTorch, TensorFlow & Keras, Scikit-learn, HuggingFace
- Computer Vision: OpenCV
- LLM/RAG: LangChain, ChromaDB, Google Gemini API
- Backend: Flask, Streamlit
- Database: PostgreSQL, SQLite
- Data Analysis: Pandas & NumPy, Matplotlib, NLTK
- Visualization: Looker Studio

### 13. Experience Accordion
**File:** `components/about/Timeline.tsx`
- Default: hanya tampilkan year + title + subtitle
- Click to expand: tampilkan description dengan smooth animation

### 14. Scroll Indicator di Hero
**File:** `components/hero/index.tsx` atau `HeroContent.tsx`
```tsx
<motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity }}>
  <ChevronDown size={24} className="text-white/30" />
</motion.div>
```

### 15. next/image Migration
**Files:** `ProjectCard.tsx`, `ProjectModal.tsx`
```tsx
import Image from "next/image";
// Ganti semua <img> dengan <Image width={...} height={...} />
```

---

## Items Yang Butuh Aset dari User

| Item | Yang Dibutuhkan |
|------|----------------|
| Foto profil | Foto profesional (PNG/JPG, min 400×400px) |
| CV download | File PDF CV terbaru |
| Cover images | Screenshot asli per project (lihat tabel di rekomendasi-portfolio.md) |
| LinkedIn URL | URL profil LinkedIn |
| Metrik project | Angka akurasi, F1 score, jumlah data, dll per project |

---

## Urutan Eksekusi (Sesi Ini)

**Fase 1 — Quick Wins (30 menit):**
Items 1, 2, 3, 5, 6, 7

**Fase 2 — UI Enhancements (60 menit):**
Items 4, 8, 9, 10, 11, 12, 13, 14

**Fase 3 — Technical Polish (30 menit):**
Item 15

**Fase 4 — Butuh Aset User:**
Items 16, 17, 18
