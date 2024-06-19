/* @refresh reload */
import { render } from 'solid-js/web';
import eruda from 'eruda';

import './index.css';

import { Root } from '@/components/Root.js';

// Инициализация Eruda только в режиме разработки
if (import.meta.env.DEV) {
  eruda.init();
}

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (<Root/>), root!);

