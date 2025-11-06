import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const RecipeDetailPage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
        const data = await response.json();
        setRecipe(data.meals[0]);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (!recipe) {
    return <div className="container mt-5">Loading recipe details...</div>;
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push(`${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`);
    }
  }

  return (
    <div className="container mt-5">
      <button className="common-btn mb-3" onClick={() => navigate(-1)}>&#8592; Back</button>
      <Link to="/" className="link-btn mb-3 ms-2"><i class="fas fa-home"></i> Home</Link>
      <div className="row">
        <div className="col-md-6">
          <img src={recipe.strMealThumb} className="img-fluid rounded shadow-sm" alt={recipe.strMeal} />
        </div>
        <div className="col-md-6">
          <h1 className="mb-3 display-4">{recipe.strMeal}</h1>
          <p className="lead"><strong>Category:</strong> {recipe.strCategory}</p>
          <p className="lead"><strong>Area:</strong> {recipe.strArea}</p>
          <h2 className="mt-4 mb-3">Ingredients</h2>
          <ul className="list-group list-group-flush">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="list-group-item">{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="mb-3">Instructions</h2>
        <p className="lead" style={{ whiteSpace: 'pre-line' }}>{recipe.strInstructions}</p>
      </div>

      {recipe.strYoutube && (
        <div className="mt-5">
          <h2 className="mb-3">Video Instructions</h2>
          <div className="embed-responsive embed-responsive-16by9" style={{ height: '400px' }}>
            <iframe
              className="embed-responsive-item w-100 h-100"
              src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
              allowFullScreen
              title="YouTube video player"
            ></iframe>
          </div>
        </div>
      )}

      {recipe.strSource && (
        <div className="mt-5">
          <h2 className="mb-3">Source</h2>
          <p><a href={recipe.strSource} target="_blank" rel="noopener noreferrer" className="link-btn"><i class="fas fa-external-link-alt"></i> View Original Source</a></p>
        </div>
      )}
    </div>
  );
};

export default RecipeDetailPage;