# Tailwind CSS 4 — Чистый стартовый проект

Готовый шаблон для быстрой разработки на **Tailwind CSS v4** с использованием **Vite**. Включает подробное описание всех возможностей и примеры использования.

**Название проекта:** `tailwind-starter`

---

## 📋 Оглавление

- [Возможности](#-возможности)
- [Быстрый старт](#-быстрый-старт)
- [Структура проекта](#-структура-проекта)
- [Описание файлов](#-описание-файлов)
- [Конфигурация Tailwind CSS 4](#-конфигурация-tailwind-css-4)
- [Слои CSS](#-слои-css)
- [Сетка (Grid)](#-сетка-grid)
- [Адаптивность (Media Queries)](#-адаптивность-media-queries)
- [Компоненты](#-компоненты)
- [HTML-инъекции](#-html-инъекции)
- [Команды npm](#-команды-npm)

---

## ✨ Возможности

- **Tailwind CSS v4** — последняя версия с новой системой конфигурации
- **Vite** — быстрый сборщик с горячей перезагрузкой (HMR)
- **Кастомные переменные** — цвета, шрифты, тени, анимации через `@theme`
- **Готовые компоненты** — кнопки, карточки, контейнеры, хедер, футер
- **Мобильное меню** — выезжающая панель с анимацией
- **Модальное окно** — с затемнением фона и анимацией
- **Адаптивная вёрстка** — mobile-first с брейкпоинтами
- **HTML-инъекции** — переиспользование header/footer

---

## 🚀 Быстрый старт

### 1. Установка зависимостей

```bash
npm install
```

### 2. Запуск dev-сервера

```bash
npm run dev
```

Откройте браузер по адресу: `http://localhost:5173`

### 3. Сборка проекта

```bash
npm run build
```

Сбилденная версия появится в папке `dist/`

### 4. Предпросмотр сборки

```bash
npm run preview
```

---

## 📁 Структура проекта

```
project/
├── index.html              # Главная страница
├── package.json            # Зависимости и скрипты
├── package-lock.json       # Зафиксированные версии зависимостей
├── vite.config.js          # Конфигурация Vite
├── README.md               # Документация
├── .gitignore              # Игнорируемые файлы
│
├── src/
│   ├── style.css           # Основные стили + конфигурация Tailwind
│   └── components/         # Переиспользуемые HTML-компоненты
│       ├── header.html     # Шапка сайта
│       ├── footer.html     # Подвал сайта
│       ├── mobile-menu.html # Мобильное меню (разметка)
│       ├── mobile-menu.js  # Мобильное меню (логика)
│       ├── modal.html      # Модальное окно (разметка)
│       ├── modal.js        # Модальное окно (логика)
│       └── load.js         # Загрузчик компонентов
│
├── public/                 # Статические файлы (копируются в dist/)
│   ├── fonts/              # Шрифты
│   ├── icon/               # Иконки
│   └── img/                # Изображения
│
└── dist/                   # Сбилденная версия (после npm run build)
```

---

## 📄 Описание файлов

### `package.json`

Определяет зависимости проекта и доступные команды:

- `tailwindcss` — фреймворк утилитарных классов
- `@tailwindcss/vite` — плагин Tailwind для Vite
- `vite` — сборщик
- `vite-plugin-html-inject` — плагин для инъекции HTML

### `vite.config.js`

Конфигурация сборщика:

- Подключает плагин Tailwind CSS
- Подключает плагин HTML-инъекций
- Настраивает выходную папку `dist/`

### `src/style.css`

Основной CSS-файл с конфигурацией Tailwind v4:

- `@import "tailwindcss"` — импорт фреймворка
- `@theme` — кастомные переменные (цвета, шрифты, тени)
- `@layer base` — базовые стили
- `@layer components` — переиспользуемые компоненты
- `@layer utilities` — вспомогательные утилиты

### `index.html`

Главная страница с примерами:

- Подключает `style.css`
- Использует контейнеры для компонентов (header, footer, mobile-menu, modal)
- Загружает компоненты через `load.js`
- Демонстрирует сетку, адаптивность, компоненты
- Кнопка открытия модального окна с `data-modal-open`

### `src/components/header.html` / `footer.html`

Переиспользуемые части страницы. Загружаются динамически через `load.js`.

### `src/components/load.js`

Скрипт для динамической загрузки компонентов в режиме разработки:

- Fetch'ем подгружает HTML-файлы компонентов
- Вставляет их в соответствующие контейнеры
- Инициализирует интерактивные компоненты (мобильное меню, модальное окно)

### `src/components/mobile-menu.html` + `mobile-menu.js`

**Мобильное меню:**

- Выезжающая справа панель с затемнением фона
- Анимация появления (300ms)
- Закрытие по крестику, клику вне панели, Escape или клику на ссылку
- Блокировка прокрутки body при открытом меню
- Класс `open-menu` на body при открытии

**Использование:**

```html
<!-- Кнопка открытия в header -->
<button id="mobile-menu-btn" aria-label="Меню">...</button>
```

### `src/components/modal.html` + `modal.js`

**Модальное окно:**

- Затемнение фона с анимацией
- Анимация появления (opacity + scale)
- Закрытие по крестику, клику вне контента, Escape
- Блокировка прокрутки body
- Класс `modal-open` на body при открытии

**Использование:**

```html
<!-- Открыть -->
<button data-modal-open>Открыть</button>

<!-- Закрыть (внутри модалки) -->
<button data-modal-close>Закрыть</button>
```

---

## ⚙️ Конфигурация Tailwind CSS 4

В Tailwind v4 конфигурация пишется **в CSS-файле** через директиву `@theme`, а не в отдельном JS-файле.

### Пример конфигурации

```css
@theme {
  /* Кастомные цвета */
  --color-brand: #3b82f6;

  /* Кастомные шрифты */
  --font-heading: 'Inter', sans-serif;
  --font-body: 'Roboto', sans-serif;

  /* Кастомные отступы */
  --spacing-custom: 18px;

  /* Кастомные тени */
  --shadow-soft: 0 2px 15px rgba(0, 0, 0, 0.1);

  /* Кастомные анимации */
  --animate-fade-in: fade-in 0.3s ease-in-out;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
```

### Использование в HTML

После настройки переменные становятся доступны как классы:

| Переменная          | Классы                                   |
| ------------------- | ---------------------------------------- |
| `--color-brand`     | `bg-brand`, `text-brand`, `border-brand` |
| `--font-heading`    | `font-heading`                           |
| `--spacing-custom`  | `p-custom`, `m-custom`, `gap-custom`     |
| `--shadow-soft`     | `shadow-soft`                            |
| `--animate-fade-in` | `animate-fade-in`                        |

---

## 🎨 Слои CSS

Tailwind использует 4 слоя в порядке приоритета (от низкого к высокому):

### 1. `@layer base` — Базовые стили

Сброс и настройки по умолчанию:

```css
@layer base {
  body {
    @apply font-body text-gray-900 antialiased;
  }
}
```

### 2. `@layer components` — Компоненты

Переиспользуемые UI-элементы:

```css
@layer components {
  .btn-primary {
    @apply bg-brand rounded-lg px-6 py-3 text-white;
  }

  .card {
    @apply shadow-soft rounded-xl bg-white p-6;
  }
}
```

### 3. `@layer utilities` — Утилиты

Вспомогательные классы с наивысшим приоритетом:

```css
@layer utilities {
  .text-truncate {
    @apply overflow-hidden text-ellipsis whitespace-nowrap;
  }

  .flex-center {
    @apply flex items-center justify-center;
  }
}
```

---

## 📐 Сетка (Grid)

### Базовые классы

| Класс                          | Описание               |
| ------------------------------ | ---------------------- |
| `grid`                         | `display: grid`        |
| `grid-cols-1` … `grid-cols-12` | Количество колонок     |
| `grid-rows-1` … `grid-rows-6`  | Количество рядов       |
| `gap-0` … `gap-96`             | Отступы между ячейками |

### Пример адаптивной сетки

```html
<!-- 1 колонка на мобильном, 2 на планшете, 3 на десктопе -->
<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  <div>Элемент 1</div>
  <div>Элемент 2</div>
  <div>Элемент 3</div>
</div>
```

### Кастомная утилита `grid-auto-fit`

В проекте создана готовая утилита для авто-заполнения:

```css
@layer utilities {
  .grid-auto-fit {
    @apply grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3;
  }
}
```

Использование:

```html
<div class="grid-auto-fit">
  <div>Элемент 1</div>
  <div>Элемент 2</div>
  <div>Элемент 3</div>
</div>
```

---

## 📱 Адаптивность (Media Queries)

Tailwind использует **mobile-first** подход с префиксами брейкпоинтов:

| Префикс | Мин. ширина | Описание                        |
| ------- | ----------- | ------------------------------- |
| _(нет)_ | 0px         | Mobile (по умолчанию)           |
| `sm:`   | 640px       | Small (планшет портретный)      |
| `md:`   | 768px       | Medium (планшет ландшафтный)    |
| `lg:`   | 1024px      | Large (ноутбук)                 |
| `xl:`   | 1280px      | Extra large (десктоп)           |
| `2xl:`  | 1536px      | 2X extra large (большие экраны) |

### Примеры

**Разные отступы:**

```html
<div class="p-4 sm:p-6 md:p-8 lg:p-10"></div>
```

**Разная ширина:**

```html
<div class="w-full md:w-1/2 lg:w-1/3"></div>
```

**Разное направление flex:**

```html
<div class="flex flex-col gap-4 md:flex-row"></div>
```

**Разный размер текста:**

```html
<h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl"></h1>
```

---

## 🧩 Компоненты

### Мобильное меню

Адаптивное меню для мобильных устройств:

**HTML:**

```html
<!-- Кнопка в header -->
<button id="mobile-menu-btn" aria-label="Меню">
  <svg>...</svg>
</button>

<!-- Разметка меню в mobile-menu.html -->
```

**Логика:**

- Клик по кнопке — открытие/закрытие
- Клик вне панели — закрытие
- Escape — закрытие
- Класс `open-menu` на body при открытии

---

### Модальное окно

Универсальное модальное окно:

**HTML:**

```html
<!-- Кнопка открытия -->
<button data-modal-open>Открыть</button>

<!-- Разметка в modal.html -->
<div id="modal" class="modal">...</div>
```

**Логика:**

- `[data-modal-open]` — открыть
- `[data-modal-close]` — закрыть
- Клик вне контента — закрыть
- Escape — закрыть
- Класс `modal-open` на body при открытии

---

## 🔌 Загрузка компонентов

В режиме разработки используется динамическая загрузка компонентов через JavaScript.

### Создание компонента

1. Создайте HTML-файл в `src/components/`, например `src/components/modal.html`:

```html
<div id="modal" class="modal">
  <div class="modal-content">...</div>
</div>
```

2. Создайте JS-файл с логикой, например `src/components/modal.js`:

```js
export function initModal() {
  // Логика компонента
}

document.addEventListener('DOMContentLoaded', initModal);
```

### Подключение в index.html

```html
<body>
  <!-- Контейнеры для компонентов -->
  <div id="header-container"></div>
  <div id="mobile-menu-container"></div>
  <div id="modal-container"></div>

  <main>...</main>

  <div id="footer-container"></div>

  <!-- Загрузчик компонентов -->
  <script type="module" src="/src/components/load.js"></script>
</body>
```

**Примечание:** Плагин `vite-plugin-html-inject` работает только при сборке (`npm run build`).

---

## 📦 Команды npm

| Команда           | Описание                 |
| ----------------- | ------------------------ |
| `npm install`     | Установка зависимостей   |
| `npm run dev`     | Запуск dev-сервера с HMR |
| `npm run build`   | Сборка продакшн-версии   |
| `npm run preview` | Предпросмотр сборки      |

---

## 📚 Дополнительные ресурсы

- [Документация Tailwind CSS](https://tailwindcss.com/docs)
- [Документация Vite](https://vitejs.dev/)
- [Tailwind CSS 4 Release Notes](https://tailwindcss.com/blog/tailwindcss-v4)

---

## 🛠️ Расширение проекта

### Добавление нового цвета

В `src/style.css`:

```css
@theme {
  --color-accent: #ff6b6b;
}
```

Использование:

```html
<div class="bg-accent text-accent border-accent"></div>
```

### Добавление нового компонента

**1. Создайте разметку** `src/components/my-component.html`:

```html
<div id="my-component" class="my-component">
  <p>Контент</p>
</div>
```

**2. Создайте логику** `src/components/my-component.js`:

```js
export function initMyComponent() {
  const component = document.getElementById('my-component');
  if (!component) return;

  // Логика компонента
}

document.addEventListener('DOMContentLoaded', initMyComponent);
```

**3. Добавьте загрузку** в `src/components/load.js`:

```js
import { initMyComponent } from './my-component.js';

// ...
loadComponent('my-component-container', '/src/components/my-component.html');
setTimeout(initMyComponent, 100);
```

**4. Добавьте контейнер** в `index.html`:

```html
<div id="my-component-container"></div>
```

---

**Готово!** Проект настроен и готов к разработке. 🎉
