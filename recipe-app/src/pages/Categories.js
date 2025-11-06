
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
        const data = await response.json();
        const categoryNames = data.meals.map(category => category.strCategory);
        setCategories(categoryNames);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError('Failed to load categories.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div className="container mt-5 text-center">Loading categories...</div>;
  }

  if (error) {
    return <div className="container mt-5 text-center text-danger">{error}</div>;
  }

  if (categories.length === 0) {
    return <div className="container mt-5 text-center text-muted">No categories found.</div>;
  }

  return (
    <div className="container mt-5">
      <Link to="/" className="link-btn mb-3"><i class="fas fa-home"></i> Home</Link>
      <h1 className="mb-4 text-center display-4 fw-bold">All Meal Categories</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {categories.map((category, index) => (
          <div key={index} className="col expcard">
            <Link
              to={`/category/${category}`}
              className="d-flex justify-content-center align-items-center border rounded p-3 text-decoration-none text-dark category-blank-card"
              style={{ height: '100px', backgroundColor: '#f8f9fa' }}
            >
              <h5 className="text-center fw-bold m-0" style={{ color: 'black' }}>
                {category}
              </h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
