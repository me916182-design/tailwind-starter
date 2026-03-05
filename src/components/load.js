/**
 * Загрузка HTML-компонентов
 * Подгружает header, footer, mobile-menu и modal в режиме разработки
 */

import { initMobileMenu } from './mobile-menu.js';
import { initModal } from './modal.js';

async function loadComponent(containerId, componentPath) {
  try {
    const response = await fetch(componentPath);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const html = await response.text();
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = html;
    }
  } catch (error) {
    console.error(`Ошибка загрузки компонента ${componentPath}:`, error);
  }
}

// Загрузка компонентов при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
  loadComponent('header-container', '/src/components/header.html');
  loadComponent('mobile-menu-container', '/src/components/mobile-menu.html');
  loadComponent('footer-container', '/src/components/footer.html');
  loadComponent('modal-container', '/src/components/modal.html');

  // Инициализация компонентов
  setTimeout(initMobileMenu, 100);
  setTimeout(initModal, 100);
});
