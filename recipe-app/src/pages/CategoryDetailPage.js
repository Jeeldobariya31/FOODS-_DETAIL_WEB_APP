import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const CategoryDetailPage = () => {
  const { categoryName } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
        const data = await response.json();
        setRecipes(data.meals || []);
      } catch (err) {
        console.error('Error fetching recipes:', err);
        setError('Failed to load recipes.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [categoryName]);

  if (loading) {
    return <div className="container mt-5 text-center">Loading recipes...</div>;
  }

  if (error) {
    return <div className="container mt-5 text-center text-danger">{error}</div>;
  }

  if (recipes.length === 0) {
    return <div className="container mt-5 text-center text-muted">No recipes found for this category.</div>;
  }

  return (
    <div className="container mt-5">
      <Link to="/" className="link-btn mb-3"><i class="fas fa-home"></i> Home</Link>
      <h1 className="mb-4 text-center display-4 fw-bold">{categoryName} Recipes</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} className="col">
            <Link to={`/recipe/${recipe.idMeal}`} className="card h-100 shadow-sm border-0 text-decoration-none text-dark meal-card">
              <img src={recipe.strMealThumb} className="card-img-top" alt={recipe.strMeal} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center fw-bold">{recipe.strMeal}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetailPage;
