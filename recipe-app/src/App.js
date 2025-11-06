
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Categories from './pages/Categories';
import AllRecipes from './pages/AllRecipes';
import About from './pages/About';
import Contact from './pages/Contact';
import Search from './pages/Search';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CategoryDetailPage from './pages/CategoryDetailPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import NotFound from './pages/NotFound';


import RandomMeal from './pages/RandomMeal';
import SearchByIngredient from './pages/SearchByIngredient';
import Login from './pages/Login';
import Register from './pages/Register';
import Community from './pages/Community';

import './assets/css/categories.css';
import './assets/css/detail.css';
import './assets/css/index.css';
import './assets/css/layout.css';
import './assets/css/recipes.css';
import './assets/css/search.css';

import './assets/css/common-btn-styles.css';

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/categories" element={<Layout><Categories /></Layout>} />
        <Route path="/random-meal" element={<Layout><RandomMeal /></Layout>} />
        <Route path="/search-by-ingredient" element={<Layout><SearchByIngredient /></Layout>} />
        <Route path="/category/:categoryName" element={<Layout><CategoryDetailPage /></Layout>} />
        <Route path="/recipe/:recipeId" element={<Layout><RecipeDetailPage /></Layout>} />
        <Route path="/all-recipes" element={<Layout><AllRecipes /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/search" element={<Layout><Search /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms-of-service" element={<Layout><TermsOfService /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/community" element={<Layout><Community /></Layout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;

