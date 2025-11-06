# Food Recipe Finder (React)

A modern **Food & Recipes** website built with **React** and **React Router**. Browse categories, explore random meals, search recipes, and view detailed instructions — powered by **TheMealDB** public API.

---

## 👤  Maintainer

- **Owner:** Jeel Dobariya
- **Project Type:** Personal learning/project portfolio
- **Status:** Active

---

## ✨ Features

- **Landing page (Home):** Highlights categories and random meal suggestions.
- **Categories:** Browse all meal categories, click to view category-specific recipes.
- **Random Meal:** Get a surprise recipe each time.
- **Recipe Details:** Ingredients, instructions, and image for each meal.
- **Search:** Find recipes by keyword.
- **Routing:** Client-side routing with React Router (404 page included).
- **Responsive UI:** Built with standard React components and CSS.
- **Static Hosting Ready:** Uses `public/index.html` and `src` app structure.

---

## 🗂️ Project Structure

```
food-react/
├─ public/
│  ├─ index.html
│  └─ assets (favicons/images) 
├─ src/
│  ├─ App.js
│  ├─ index.js
│  ├─ components/ (Layout, Navbar, Footer, etc.)
│  └─ pages/
│     ├─ Home.js
│     ├─ Categories.js
│     ├─ CategoryDetailPage.js
│     ├─ RecipeDetailPage.js
│     ├─ RandomMeal.js
│     ├─ Search.js
│     ├─ About.js, Contact.js, Community.js
│     ├─ PrivacyPolicy.js, TermsOfService.js
│     └─ NotFound.js
└─ package.json
```

---

## 🔌 API Details (TheMealDB)

This app integrates **TheMealDB** public API. Detected endpoints used in the code:

| Source File | Endpoint |
|---|---|
| src/pages/Categories.js | `https://www.themealdb.com/api/json/v1/1/list.php?c=list` |
| src/pages/Home.js | `https://www.themealdb.com/api/json/v1/1/random.php` |
| src/pages/Home.js | `https://www.themealdb.com/api/json/v1/1/list.php?c=list` |
| src/pages/Home.js | `https://www.themealdb.com/api/json/v1/1/random.php` |
| src/pages/RandomMeal.js | `https://www.themealdb.com/api/json/v1/1/random.php` |

> You can replace the API with your backend later by centralizing requests in a utility file and using environment variables.

### Example: Random Meal
```
GET https://www.themealdb.com/api/json/v1/1/random.php
```

### Example: List Categories
```
GET https://www.themealdb.com/api/json/v1/1/list.php?c=list
```

### Example: Search by name (possible in Search.js)
```
GET https://www.themealdb.com/api/json/v1/1/search.php?s={query}
```

---

## 🧭 Client Routes

Detected React Router routes (from JSX `<Route path="...">` usage):

| Source | Path |
|---|---|
| src/App.js | `/` |
| src/App.js | `/categories` |
| src/App.js | `/random-meal` |
| src/App.js | `/search-by-ingredient` |
| src/App.js | `/category/:categoryName` |
| src/App.js | `/recipe/:recipeId` |
| src/App.js | `/all-recipes` |
| src/App.js | `/about` |
| src/App.js | `/contact` |
| src/App.js | `/search` |
| src/App.js | `/privacy-policy` |
| src/App.js | `/terms-of-service` |
| src/App.js | `/login` |
| src/App.js | `/register` |
| src/App.js | `/community` |
| src/App.js | `*` |

Common paths expected:
- `/` – Home
- `/categories` – Categories list
- `/category/:name` – Category detail
- `/recipe/:id` – Recipe detail
- `/random` – Random meal
- `/search` – Search recipes
- `*` – Not Found

---

## 🛠️ Tech Stack

- **Framework:** React (Create React App / Vite-like structure)
- **Routing:** `react-router-dom`
- **Styling:** CSS
- **API:** TheMealDB public API
- **Build/Deploy:** Any static hosting (Netlify, Vercel) or SPA-friendly hosting

---

## ▶️ Getting Started

1) **Install dependencies**
```bash
npm install
```

2) **Run in development**
```bash
npm start
```
Or (if Vite): 
```bash
npm run dev
```

3) **Build for production**
```bash
npm run build
```

4) **Preview build (optional)**
```bash
npm run preview
```

> If `package.json` lacks scripts, add the standard React scripts or initialize with Vite/Cra.

---

## ⚙️ Environment Variables (optional)

If you later add a proxy or custom backend, use a `.env` file:

- `REACT_APP_API_BASE_URL` – Base URL for your API
- `REACT_APP_THEME` – Light/Dark or brand theme

> In React, client env variables must start with `REACT_APP_` to be exposed.

---

## 🔧 Code Notes

- `src/App.js` sets up the router and routes.
- `src/pages/*` contains individual views:
  - `Home.js` and `Categories.js` call TheMealDB for featured/random data.
  - `RandomMeal.js` fetches a random recipe.
  - `RecipeDetailPage.js` loads recipe details (likely via `/lookup.php?i=`).
  - `Search.js` searches recipes by term.
- `public/index.html` bootstraps the app.

---

## 📦 package.json

Scripts:
- `start`: Standard React start (not explicitly defined)
- `build`: Standard React build (not explicitly defined)

Dependencies:
_(No dependencies listed in package.json; may rely on React defaults in project template.)_

---

## 👤 Attribution

- **Owner:** Jeel Dobariya
- **University (if applicable):** Darshan University
- **Year:** 2025
- **Purpose:** Food Recipe Finder (React)

---

## 📄 License

MIT License (suggested). You can replace with your preferred license.

