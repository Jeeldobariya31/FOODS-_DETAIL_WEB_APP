import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      if (searchTerm.trim() === '') {
        setSearchResults([]);
        setLoading(false);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await response.json();
        setSearchResults(data.meals || []);
      } catch (err) {
        console.error('Error fetching search results:', err);
        setError('Failed to fetch search results. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    const debounceTimeout = setTimeout(() => {
      fetchMeals();
    }, 500); // Debounce for 500ms

    return () => clearTimeout(debounceTimeout);
  }, [searchTerm]);

  return (
    <div className="container mt-5">
      <Link to="/" className="link-btn mb-3"><i class="fas fa-home"></i> Home</Link>
      <h1 className="mb-4 text-center display-4 fw-bold">Search Recipes</h1>
      <div className="input-group input-group-lg mb-4 shadow-sm">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a recipe..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <p className="text-center text-primary">Loading results...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      {!loading && !error && searchResults.length === 0 && searchTerm.trim() !== '' && (
        <p className="text-center text-muted">No recipes found for "{searchTerm}". Try a different search term.</p>
      )}

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {searchResults.map((meal) => (
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
    </div>
  );
};

export default Search;