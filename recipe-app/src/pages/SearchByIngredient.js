import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchByIngredient = () => {
  const [ingredient, setIngredient] = useState('');
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);
    setMeals([]);
    if (!ingredient.trim()) {
      setError('Please enter an ingredient.');
      return;
    }

    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setError(`No meals found with ingredient: ${ingredient}`);
      }
    } catch (err) {
      console.error('Error fetching meals by ingredient:', err);
      setError('Failed to fetch meals. Please try again later.');
    }
  };

  return (
    <div className="container mt-5">
      <Link to="/" className="link-btn mb-3"><i class="fas fa-home"></i> Home</Link>
      <h1 className="mb-4 text-center display-4 fw-bold">Search Meals by Ingredient</h1>
      <form onSubmit={handleSearch} className="mb-5 p-4 border rounded shadow-sm bg-light">
        <div className="input-group input-group-lg">
          <input
            type="text"
            className="form-control"
            placeholder="Enter an ingredient (e.g., chicken_breast, cheese)"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
          <button className="common-btn" type="submit"><i class="fas fa-search"></i> Search</button>
        </div>
        {error && <div className="text-danger mt-3 text-center fw-bold">{error}</div>}
      </form>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="col">
            <Link to={`/recipe/${meal.idMeal}`} className="card h-100 shadow-sm border-0 text-decoration-none text-dark meal-card">
              <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center fw-bold">{meal.strMeal}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {meals.length === 0 && !error && ingredient.trim() && (
        <p className="text-center mt-4 text-muted">Start typing an ingredient to find meals!</p>
      )}
    </div>
  );
};

export default SearchByIngredient;
