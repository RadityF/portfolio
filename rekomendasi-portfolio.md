# Rekomendasi Perbaikan Portfolio — radityf.me

> **Audit date:** 13 Juni 2026
> **Tools:** Hermes Browser + Gemini Vision via ai.sumopod.com
> **Auditor:** Raditya's Coding Partner

---

## 🔴 Critical (Fix ASAP)

### 1. Placeholder GitHub Links
2 project masih pake `github.com/username/project`:
- **Cloud Data Security Risk Analysis**
- **Sales Performance Dashboard**

**Fix:** Ganti ke URL repo asli atau hapus link "View Source" kalo repo-nya ga ada.

---

### 2. Cover Images AI-Generated
Semua 7 project card pake gambar hasil generate AI — cirinya:
- Hologram, hacker pake hoodie, otak bercahaya
- Teks "gibberish" (ga jelas, ga nyata)
- 1024×1024 square (standard AI image ratio)
- Estetik terlalu sempurna, bukan screenshot asli

**Fix:** Ganti dengan screenshot asli output project:

| Project | Cover Baru |
|---------|-----------|
| **Dementia MRI DCGAN** | Grid generated MRI samples (before vs after training) |
| **Face Recognition** | Screenshot webcam + bounding box + name + timestamp |
| **PDF RAG System** | Screenshot Q&A: tanya → jawaban dari PDF |
| **Cloud Security** | SHAP beeswarm plot + anomaly detection graph |
| **Heart Disease** | Confusion matrix + ROC curve |
| **Sentiment Analysis** | Wordcloud + sentiment distribution chart |
| **Sales Dashboard** | Screenshot Looker Studio dashboard asli |

---

### 3. Tidak Ada Social Links
Cuma ada `mailto:` di "Contact Me". Tidak ada:
- **LinkedIn** — paling kritikal buat career apps
- **GitHub profile** (`github.com/RadityF`)
- Twitter/X, Medium, atau blog

**Fix:** Tambah icon section di hero (samping tombol CTA) atau footer.

---

## 🟡 High Priority

### 4. Tidak Ada Navbar
Pengunjung harus scroll manual, ga bisa lompat ke section tertentu.

**Fix:** Sticky navbar dengan link:
```
[Raditya_Fauzan]  About · Experience · Projects · Contact
```

---

### 5. Tidak Ada Profile Photo
Personal branding kurang — orang ga bisa ngaitin nama ke wajah.

**Fix:** Foto professional (bisa pake photobox atau selfie rapi) di About Me section.

---

### 6. Tech Stack Flat List
17 teknologi ditampilin sebagai list rata — overload, ga terstruktur.

**Fix:** Group per kategori, misalnya:

| Kategori | Tech |
|----------|------|
| **ML/DL** | PyTorch, TensorFlow & Keras, Scikit-learn, NLTK, HuggingFace |
| **Computer Vision** | OpenCV |
| **LLM/RAG** | LangChain, ChromaDB, Google Gemini API |
| **Backend** | Flask, FastAPI |
| **Database** | PostgreSQL, SQLite |
| **Data Analysis** | Pandas & NumPy, Matplotlib |
| **Visualization** | Looker Studio, Streamlit |

---

### 7. Experience Section Terbuka Semua
Deskripsi panjang tiap experience langsung kebuka — page jadi super panjang, scrolling fatigue.

**Fix:** Accordion — default collapsed, expand kalo diklik. Atau cukup tampilkan role + date + company, deskripsi pas di-hover/click.

---

### 8. Project Descriptions Kurang Metrik
Deskripsi bagus secara naratif tapi kurang angka konkret.

**Fix:** Tambah outcome real di tiap deskripsi:
- *Heart Disease:* "Achieved 87% accuracy with Keras Tuner optimization"
- *Sentiment Analysis:* "85% F1 score with custom slang normalization on 10k+ reviews"
- *Cloud Security:* "Detected 95% of anomalous access patterns using Isolation Forest"
- Dst.

---

### 9. Footer Kosong
Setelah section Projects, halaman selesai begitu aja.

**Fix:** Tambah footer minimal:
```
© 2026 Raditya Fauzan · Built with [tech]
[LinkedIn icon] [GitHub icon] [Email icon]  ↑ Back to Top
```

---

## 🔵 Nice-to-Have

### 10. Hanya Single Page
Ga ada halaman detail per project — kalo mau cerita lebih dalam, gabisa.

**Fix:** `/projects/dementia-mri` halaman dedicated per project dengan:
- Latar belakang masalah
- Arsitektur/model diagram
- Hasil & metrik lengkap
- Link ke GitHub + live demo (kalo ada)

---

### 11. Dark Mode Only
Tampilan cuma dark — ga ada opsi light mode.

**Fix:** Dark/light toggle di navbar. Dark buat default, light buat yang preferensi.

---

### 12. Color Palette Terbatas
Dominan hitam + teal/cyan. Ungu di "Projects" section header udah mulai variasi.

**Fix:** Expand palette. Contoh:
- **Primary:** Teal/cyan (brand color)
- **Accent:** Ungu atau magenta (buat highlight)
- **Neutral:** White/gray (text)

Atau bisa pake gradient yang udah ada di "Intelligence" sebagai signature visual.

---

## 📊 Prioritas Eksekusi

| Priority | Task | Effort | Impact |
|----------|------|--------|--------|
| 🔴 1 | Fix placeholder GitHub links | ⚡ 5 menit | 🔥 Eliminate red flag |
| 🔴 2 | Add LinkedIn + GitHub social links | ⚡ 10 menit | 🔥 Career visibility |
| 🔴 3 | Ganti AI cover → screenshot asli | ⏱ 1-2 jam | 🔥 Credibility |
| 🟡 4 | Group tech stack by category | ⚡ 15 menit | ⚡ Scannability |
| 🟡 5 | Add navbar | ⏱ 30 menit | ⚡ UX |
| 🟡 6 | Tambah metrik di project desc | ⚡ 15 menit | ⚡ Trust |
| 🟡 7 | Accordion experience | ⏱ 30 menit | ⚡ Page length |
| 🟡 8 | Footer | ⚡ 10 menit | ⚡ Completeness |
| 🟡 9 | Profile photo | ⏱ 15 menit | ⚡ Personal brand |
| 🔵 10-12 | Deep pages, light toggle, color | ⏱ 2-4 jam | ✨ Polish |

---

> **Bottom line:** 3 critical fixes (GH links, cover images, social links) + 2-3 high priority (tech stack, navbar, metrik) dan portfolio kamu naik 2 level. Semua bisa kelar dalam **1 sesi**.
