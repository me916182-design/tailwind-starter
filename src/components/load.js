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

// Автозагрузка всех JS-модулей и инициализация
const jsModules = import.meta.glob('./*.js', { eager: true });

Object.entries(jsModules).forEach(([path, module]) => {
  // Пропускаем load.js
  if (path.includes('load.js')) return;
  
  // Вызываем init, если есть
  if (typeof module.init === 'function') {
    document.addEventListener('DOMContentLoaded', module.init, { once: true });
  }
});

/**
 * Загрузить HTML-компонент в контейнер
 */
async function loadComponent(fileName) {
  const containerId = `${fileName}-container`;
  const componentPath = `/src/components/${fileName}.html`;
  
  try {
    const response = await fetch(componentPath);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const html = await response.text();
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = html;
    }
  } catch (error) {
    console.error(`Ошибка загрузки ${fileName}:`, error);
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
  
  // Загружаем все компоненты
  for (const component of components) {
    await loadComponent(component);
  }
});
