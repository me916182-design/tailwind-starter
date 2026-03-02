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
- [HTML-инъекции](#-html-инъекции)
- [Команды npm](#-команды-npm)

---

## ✨ Возможности

- **Tailwind CSS v4** — последняя версия с новой системой конфигурации
- **Vite** — быстрый сборщик с горячей перезагрузкой (HMR)
- **Кастомные переменные** — цвета, шрифты, тени, анимации через `@theme`
- **Готовые компоненты** — кнопки, карточки, контейнеры
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
│
├── src/
│   ├── style.css           # Основные стили + конфигурация Tailwind
│   └── components/         # Переиспользуемые HTML-компоненты
│       ├── header.html     # Шапка сайта
│       └── footer.html     # Подвал сайта
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
- Использует `<inject>` для header/footer
- Демонстрирует сетку, адаптивность, компоненты

### `src/components/header.html` / `footer.html`

Переиспользуемые части страницы. Подключаются через:

```html
<inject src="/src/components/header.html"></inject>
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

## 🔌 HTML-инъекции

Для переиспользования общих частей (header, footer) используется плагин `vite-plugin-html-inject`.

### Создание компонента

1. Создайте файл в `src/components/`, например `src/components/header.html`:

```html
<header class="bg-white shadow">
  <nav>...</nav>
</header>
```

### Подключение в index.html

```html
<body>
  <inject src="/src/components/header.html"></inject>

  <main>...</main>

  <inject src="/src/components/footer.html" />
</body>
```

**Важно:** После изменения `vite.config.js` перезапустите dev-сервер.

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

В `src/style.css`:

```css
@layer components {
  .input-field {
    @apply focus:ring-brand w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2;
  }
}
```

Использование:

```html
<input type="text" class="input-field" placeholder="Введите текст" />
```

---

**Готово!** Проект настроен и готов к разработке. 🎉
