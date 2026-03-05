/**
 * Автоматическая загрузка компонентов
 *
 * Как создать новый компонент:
 * 1. Создайте file.html — разметка
 * 2. Создайте file.js — экспортируйте функцию init() (опционально)
 * 3. Добавьте контейнер в index.html: <div id="file-container"></div>
 *
 * Всё! Компонент загрузится автоматически.
 */

// Предзагрузка всех JS-модулей компонентов через import.meta.glob
const componentModules = import.meta.glob('./*.js', { eager: false });

/**
 * Загрузить HTML-компонент в контейнер
 */
async function loadComponent(fileName) {
  const containerId = `${fileName}-container`;
  const componentPath = new URL(`./${fileName}.html`, import.meta.url).href;

  try {
    const response = await fetch(componentPath);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const html = await response.text();
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = html;
    }
    return true;
  } catch (error) {
    console.error(`Ошибка загрузки ${fileName}:`, error);
    return false;
  }
}

/**
 * Импортировать и инициализировать JS-модуль компонента
 */
async function initComponent(fileName) {
  const modulePath = `./${fileName}.js`;
  const loadModule = componentModules[modulePath];

  if (!loadModule) return;

  try {
    const module = await loadModule();
    if (typeof module?.init === 'function') {
      module.init();
    }
  } catch (error) {
    console.error(`Ошибка инициализации ${fileName}:`, error);
  }
}

// Автозагрузка всех HTML-компонентов при загрузке DOM
document.addEventListener('DOMContentLoaded', async () => {
  // Список компонентов для загрузки
  const components = [
    'header',
    'footer',
    'mobile-menu',
    'modal'
  ];

  // Загружаем все компоненты последовательно
  for (const component of components) {
    const loaded = await loadComponent(component);
    if (loaded) {
      await initComponent(component);
    }
  }
});
