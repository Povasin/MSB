# IDS Store Web-Engine 🛍️

![Status: Legacy](https://img.shields.io/badge/Status-Legacy-yellow.svg?style=for-the-badge)
![Gulp](https://img.shields.io/badge/Build-Gulp-CF4647.svg?style=for-the-badge&logo=gulp)
![CSS](https://img.shields.io/badge/Style-SCSS-CC6699.svg?style=for-the-badge&logo=sass)

## 📌 About
**IDS Store** — это фронтенд-движок интернет-магазина, построенный на классическом стеке технологий (HTML, CSS/SCSS, JS) с использованием **Gulp** для сборки и автоматизации. Проект демонстрирует фундаментальное понимание верстки, работы с препроцессорами и организации файловой структуры проекта без использования тяжелых фреймворков.

## ⚙️ Техническая глубина
- **Gulp Pipeline:** Автоматизация компиляции SCSS, минификации JS и сборки проекта.
- **Модульная верстка:** Разделение проекта на логические блоки (`header/`, `footer/`, `katalog/`, `admin/`), что упрощает поддержку кода.
- **PWA (Progressive Web App):** Интеграция Service Worker (`sw.js`) и манифеста для кэширования и работы в офлайн-режиме.
- **Интеграция:** Поддержка работы с XML-фидами (Turbo-страницы, Яндекс.Маркет) для SEO-оптимизации.

## 🛠 Стек технологий
- **Build System:** Gulp
- **Styles:** SCSS/SASS
- **Frontend:** Vanilla JavaScript, HTML5

## 🚀 Quick Start
```bash
# 1. Установите зависимости
npm install

# 2. Запустите процесс сборки через Gulp
gulp
