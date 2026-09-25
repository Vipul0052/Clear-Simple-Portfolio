# Vipul Sharma — Portfolio & Blog

A fast, minimalist, and accessible personal portfolio and developer blog built with semantic HTML, modern Vanilla CSS, and lightweight JavaScript.

🌐 **Live Website:** [vipulxdev.com](https://vipulxdev.com)  
📄 **Resume:** [View Resume](https://drive.google.com/file/d/1adJXeBFSYNI-4w8pc_d5kOkOBxEs0ken/view?usp=sharing)  
📫 **Contact:** [hello@vipulxdev.com](mailto:hello@vipulxdev.com)

---

## ✨ Features

- 🌓 **Apple-Style Theme Switcher**: Glassmorphic sliding capsule toggle with smooth 60fps diagonal View Transitions.
- 📝 **Native Articles & Guides**: In-house minimalist blog feed and deep-dive technical articles.
- 📋 **1-Click Copy Email**: Quick clipboard copy with toast feedback.
- 📱 **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop displays.
- ⚡ **Zero Framework Overhead**: Clean, static, and blazing fast (100/100 Lighthouse performance).

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Custom Tokens & Flexbox), Vanilla JavaScript
- **Typography**: IBM Plex Sans, IBM Plex Mono, ITC Garamond
- **Hosting & Analytics**: Vercel + Serverless Redis visitor tracker

---

## 📂 Project Structure

```
├── index.html                                            # Main portfolio homepage
├── blog.html                                             # Blog feed / articles list
├── building-pharmapos-multi-tenant-architecture.html     # PharmaPOS case study article
├── how-to-deploy-projects-on-vercel-with-custom-domain.html # Vercel deployment guide
├── 404.html                                              # Custom 404 not found page
├── api/
│   └── track.js                                          # Serverless Redis page view counter
├── assets/
│   ├── css/                                              # Global design system & theme tokens
│   ├── font/                                             # Garamond & custom web fonts
│   └── favicon.svg                                       # Custom SVG favicon
├── .gitignore
├── README.md
└── package.json
```

---

## 🚀 Local Development

To run locally, you can serve the files with any static server:

```bash
# Using npx serve
npx serve .

# Or using Python 3
python -m http.server 3000
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📄 License

MIT © [Vipul Sharma](https://github.com/Vipul0052)
