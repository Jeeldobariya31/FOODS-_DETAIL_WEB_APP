
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">Food<span style={{color: 'var(--fc-primary)'}}>Clone</span></Link>
          <button className="navbar-toggler common-btn" type="button" data-bs-toggle="collapse" data-bs-target="#nav">Menu</button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/categories" role="button" data-bs-toggle="dropdown">Recipes</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/category/Breakfast"><i class="fas fa-caret-right me-2"></i>Breakfast</Link></li>
                  <li><Link className="dropdown-item" to="/category/Dessert"><i class="fas fa-caret-right me-2"></i>Dessert</Link></li>
                  <li><Link className="dropdown-item" to="/category/Pasta"><i class="fas fa-caret-right me-2"></i>Pasta</Link></li>
                  <li><Link className="dropdown-item" to="/category/Vegan"><i class="fas fa-caret-right me-2"></i>Vegan</Link></li>
                  <li><Link className="dropdown-item" to="/category/Vegetarian"><i class="fas fa-caret-right me-2"></i>Vegetarian</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/categories" role="button" data-bs-toggle="dropdown">Meat & Seafood</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/category/Chicken"><i class="fas fa-caret-right me-2"></i>Chicken</Link></li>
                  <li><Link className="dropdown-item" to="/category/Beef"><i class="fas fa-caret-right me-2"></i>Beef</Link></li>
                  <li><Link className="dropdown-item" to="/category/Pork"><i class="fas fa-caret-right me-2"></i>Pork</Link></li>
                  <li><Link className="dropdown-item" to="/category/Seafood"><i class="fas fa-caret-right me-2"></i>Seafood</Link></li>
                  <li><Link className="dropdown-item" to="/category/Lamb"><i class="fas fa-caret-right me-2"></i>Lamb</Link></li>
                  <li><Link className="dropdown-item" to="/category/Goat"><i class="fas fa-caret-right me-2"></i>Goat</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/categories" role="button" data-bs-toggle="dropdown">Others</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/category/Miscellaneous"><i class="fas fa-caret-right me-2"></i>Miscellaneous</Link></li>
                  <li><Link className="dropdown-item" to="/category/Side"><i class="fas fa-caret-right me-2"></i>Side</Link></li>
                  <li><Link className="dropdown-item" to="/category/Starter"><i class="fas fa-caret-right me-2"></i>Starter</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">Features</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/random-meal"><i class="fas fa-caret-right me-2"></i>Random Meal</Link></li>
                  <li><Link className="dropdown-item" to="/search-by-ingredient"><i class="fas fa-caret-right me-2"></i>Search by Ingredient</Link></li>
                </ul>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/categories">All Categories</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/all-recipes">All Recipes</Link></li>
            </ul>
            <Link className=" btn btn-outline-light" to="/search"><i class="fas fa-search"></i> Search</Link>
            <Link className=" btn btn-outline-light ms-2" to="/login"><i class="fas fa-sign-in-alt"></i> Login</Link>
            <Link className=" btn btn-outline-light ms-2" to="/register"><i class="fas fa-user-plus"></i> Register</Link>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-col">
              <h5>FoodClone</h5>
              <p>Your go-to source for delicious recipes and culinary inspiration.</p>
              <div className="footer-social">
                <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://www.pinterest.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest"></i></a>
              </div>
            </div>
            <div className="col-md-4 footer-col">
              <h5>Quick Links</h5>
              <ul className="list-unstyled footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/all-recipes">All Recipes</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="col-md-4 footer-col">
              <h5>Popular Categories</h5>
              <ul className="list-unstyled footer-links">
                <li><Link to="/category/Breakfast">Breakfast</Link></li>
                <li><Link to="/category/Chicken">Chicken</Link></li>
                <li><Link to="/category/Dessert">Dessert</Link></li>
                <li><Link to="/category/Vegan">Vegan</Link></li>
                <li><Link to="/category/Vegetarian">Vegetarian</Link></li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} FoodClone. All rights reserved.</p>
            <div className="footer-policies">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
