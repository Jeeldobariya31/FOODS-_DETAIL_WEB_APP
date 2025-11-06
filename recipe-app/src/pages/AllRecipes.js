
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/common-btn-styles.css';
import '../assets/css/community.css'; 

const AllRecipes = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllRecipes = async () => {
      try {
        setLoading(true);
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let fetchedRecipes = [];

        for (const letter of alphabet) {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          if (data.meals) {
            fetchedRecipes = fetchedRecipes.concat(data.meals);
          }
        }
        setAllRecipes(fetchedRecipes);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllRecipes();
  }, []);

  if (loading) {
    return <div className="container mt-5">Loading all recipes...</div>;
  }

  if (error) {
    return <div className="container mt-5">Error: {error.message}</div>;
  }

  return (
    <div className="container mt-5">
      <div className="community-header"> {/* Reusing community-header for consistent styling */}
        <h1 className="mb-4">All Recipes</h1>
        <Link to="/" className="link-btn"><i class="fas fa-home"></i> Home</Link>
      </div>
      <div className="row">
        {allRecipes.map((recipe) => (
          <div key={recipe.idMeal} className="col-md-4 mb-4">
            <Link to={`/recipe/${recipe.idMeal}`} className="card shadow-sm border-0 text-decoration-none text-dark">
              <img src={recipe.strMealThumb} className="card-img-top" alt={recipe.strMeal} />
              <div className="card-body">
                <h5 className="card-title">{recipe.strMeal}</h5>
                <p className="card-text">{recipe.strCategory}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
