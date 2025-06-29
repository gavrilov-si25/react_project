# Frontend-разработка. Базовый стек

**Модуль 3. Фреймворки для Frontend**

Макет:  
https://www.figma.com/design/u1fHPkVcFOPQjcQq3ZSnmr/Web.Jobly?node-id=0-1&node-type=canvas&t=51zzRpwNF1biqww6-0

Предметная область - онлайн-школа

**Модуль 3.**

Задание 1. - **выполнено**

Задание 2. - **выполнено**

Задание 3. - **выполнено**

Задание 4. - **выполнено**

Задание 5. - **выполнено**

---

## Описание проекта

Это одностраничное приложение, реализованное на Vite + React + TypeScript.
Цель: продемонстрировать навигацию, загрузку данных из внешнего API, работу со слайдерами и модальными окнами.

Основные функции:
- Главная страница с блоками, секциями, карточками и слайдером.
- Страница карточек с динамическим количеством карточек.
- Модальное окно регистрации/входа с валидацией на React Hook Form.
- Обработка состояния загрузки и ошибок.
- Навигация без перезагрузки страницы через React Router.

---

## Используемые технологии

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/) + TypeScript
- [React Router](https://reactrouter.com/) — маршрутизация
- [React Hook Form](https://react-hook-form.com/) — формы и валидация
- [Swiper](https://swiperjs.com/) — слайдеры
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) — статический анализ и форматирование
- [Jest](https://jestjs.io/) — фреймворк для unit-тестирования
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) — для тестирования компонентов и хуков

---

## Структура проекта

```
.
├── eslint.config.js
├── index.html
├── jest.config.cjs
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └── images
│       ├── avatar.png
│       ├── connect-image.png
│       ├── hero-image.png
│       ├── info-image.png
│       ├── job-image.png
│       ├── logo.png
│       └── mask.png
├── README.md
├── src
│   ├── assets
│   │   └── styles
│   │       ├── global.css
│   │       └── normalize.css
│   ├── components
│   │   ├── App.tsx
│   │   ├── Cards
│   │   │   ├── CardHeader.module.css
│   │   │   ├── CardHeader.tsx
│   │   │   ├── CardList.module.css
│   │   │   ├── CardList.tsx
│   │   │   ├── Card.module.css
│   │   │   ├── Card.tsx
│   │   │   ├── Feature.module.css
│   │   │   └── Feature.tsx
│   │   ├── Connect
│   │   │   ├── Connect.module.css
│   │   │   └── Connect.tsx
│   │   ├── Error
│   │   │   ├── Error.module.css
│   │   │   └── Error.tsx
│   │   ├── Footer
│   │   │   ├── Footer.module.css
│   │   │   └── Footer.tsx
│   │   ├── Header
│   │   │   ├── Header.module.css
│   │   │   └── Header.tsx
│   │   ├── Hero
│   │   │   ├── Hero.module.css
│   │   │   └── Hero.tsx
│   │   ├── Info
│   │   │   ├── Info.module.css
│   │   │   └── Info.tsx
│   │   ├── Join
│   │   │   ├── Join.module.css
│   │   │   └── Join.tsx
│   │   ├── Layout.tsx
│   │   ├── Main.tsx
│   │   ├── Modal
│   │   │   ├── Modal.module.css
│   │   │   └── Modal.tsx
│   │   ├── PageTemplate.tsx
│   │   ├── Preloader
│   │   │   ├── Preloader.module.css
│   │   │   └── Preloader.tsx
│   │   ├── Quote
│   │   │   ├── Quote.module.css
│   │   │   └── Quote.tsx
│   │   ├── Slider
│   │   │   ├── Slider.module.css
│   │   │   └── Slider.tsx
│   │   └── SliderTemplate.tsx
│   ├── hooks
│   │   ├── useFetch.test.ts
│   │   ├── useFetch.ts
│   │   ├── useModal.test.ts
│   │   └── useModal.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── CardsPage.tsx
│   │   ├── HomePage.tsx
│   │   └── NotFoundPage.tsx
│   ├── types
│   │   └── post.ts
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

---

## Быстрый старт

1. **Клонировать репозиторий**
   ```bash
   git clone https://github.com/gavrilov-si25/react_project.git
   cd my-react-app
   ```

2. **Установить зависимости**
   ```bash
   npm install
   ```

3. **Запустить в режиме разработки**
   ```bash
   npm run dev
   ```
   Откройте в браузере: http://localhost:5173

4. **Сборка**
   ```bash
   npm run build
   ```
   Результат будет в папке `dist/`.

5. **Запустить продакшен-версию локально**
   ```bash
   npm install -g serve
   serve -s dist
   ```

---

## Скрипты

- `npm run dev` — запуск dev-сервера
- `npm run build` — сборка проекта
- `npm run preview` — предпросмотр собранной версии
- `npm run lint` — проверка ESLint
- `npm run format` — автоформатирование через Prettier
- `npm run test` — запуск Jest + React Testing Library

---
