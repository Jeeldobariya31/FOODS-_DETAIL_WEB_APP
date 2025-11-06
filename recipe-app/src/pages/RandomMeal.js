import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RandomMeal = () => {
  const [meal, setMeal] = useState(null);

  const fetchRandomMeal = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setMeal(data.meals[0]);
    } catch (error) {
      console.error('Error fetching random meal:', error);
    }
  };

  useEffect(() => {
    fetchRandomMeal();
  }, []);

  if (!meal) {
    return <div className="container mt-5 text-center">Loading random meal...</div>;
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
    }
  }

  return (
    <div className="container mt-5">
      <Link to="/" className="link-btn mb-3"><i class="fas fa-home"></i> Home</Link>
      <h1 className="mb-4 text-center display-4 fw-bold">Discover a Random Meal</h1>
      <div className="card shadow-sm mb-5">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <img src={meal.strMealThumb} className="img-fluid rounded shadow-sm" alt={meal.strMeal} />
            </div>
            <div className="col-md-6">
              <h2 className="mb-3 display-5">{meal.strMeal}</h2>
              <p className="lead"><strong>Category:</strong> {meal.strCategory}</p>
              <p className="lead"><strong>Area:</strong> {meal.strArea}</p>
              <h3 className="mt-4 mb-3">Ingredients</h3>
              <ul className="list-group list-group-flush">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="list-group-item">{ingredient}</li>
                ))}
              </ul>
              <button className="common-btn btn-lg mt-4" onClick={fetchRandomMeal}>🎲 Get Another Random Meal</button>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="mb-3">Instructions</h3>
            <p className="lead" style={{ whiteSpace: 'pre-line' }}>{meal.strInstructions}</p>
          </div>

          {meal.strYoutube && (
            <div className="mt-5">
              <h3 className="mb-3">Video Instructions</h3>
              <div className="embed-responsive embed-responsive-16by9" style={{ height: '400px' }}>
                <iframe
                  className="embed-responsive-item w-100 h-100"
                  src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`}
                  allowFullScreen
                  title="YouTube video player"
                ></iframe>
              </div>
            </div>
          )}

          {meal.strSource && (
            <div className="mt-5">
              <h3 className="mb-3">Source</h3>
              <p><a href={meal.strSource} target="_blank" rel="noopener noreferrer" className="link-btn"><i class="fas fa-external-link-alt"></i> View Original Source</a></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RandomMeal;
