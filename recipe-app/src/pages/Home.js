import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [exploreCategories, setExploreCategories] = useState([]);
  const [allRecipes, setAllRecipes] = useState([]);
  const [communityPosts, setCommunityPosts] = useState([]);
  const [cravingRecipes, setCravingRecipes] = useState([]);

  const [popularLoading, setPopularLoading] = useState(true);
  const [exploreLoading, setExploreLoading] = useState(true);
  const [allRecipesLoading, setAllRecipesLoading] = useState(true);
  const [communityLoading, setCommunityLoading] = useState(true);
  const [cravingLoading, setCravingLoading] = useState(true);

  const generateFakeCommunityData = (count) => {
    const data = [];
    const userNames = [
      "FoodieFan", "ChefMaster", "RecipeLover", "KitchenKing", "GourmetGal",
      "TasteTester", "SpiceQueen", "BakingPro", "GrillMaster", "HealthyEats"
    ];
    const actions = ["asked about", "reviewed", "added a photo to"];
    const recipeNames = [
      "Spicy Chicken Curry", "Vegan Lentil Soup", "Classic Beef Stew", "Quick Pasta Salad", "Decadent Chocolate Cake",
      "Garlic Butter Shrimp", "Stuffed Bell Peppers", "Homemade Pizza", "Quinoa Salad", "Blueberry Muffins"
    ];
    const texts = [
      "Any tips for making this dish less spicy?",
      "Absolutely loved this recipe! Highly recommend.",
      "My family devoured this! So easy to make.",
      "Thinking of adding some extra veggies, any suggestions?",
      "Perfect for a weeknight dinner.",
      "This is my new go-to recipe for potlucks.",
      "I substituted chicken for tofu and it was delicious!",
      "Can I make this ahead of time?",
      "The instructions were clear and easy to follow.",
      "A new favorite in our household!",
      "The aroma filled my kitchen, and the taste was even better!",
      "I added a pinch of chili flakes for an extra kick, turned out great.",
      "This recipe is surprisingly simple for how impressive it tastes.",
      "My kids, who are usually picky eaters, asked for seconds!",
      "I paired this with a fresh salad, and it was a complete meal.",
      "Looking forward to trying more recipes from this community.",
      "The presentation was beautiful, almost too good to eat!",
      "I used organic ingredients, and the flavors really popped.",
      "This dish is a fantastic way to use up leftover vegetables.",
      "Highly versatile, I imagine this would be great with different proteins too."
    ];
    const avatars = [
      "https://randomuser.me/api/portraits/women/1.jpg",
      "https://randomuser.me/api/portraits/men/2.jpg",
      "https://randomuser.me/api/portraits/women/3.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/women/5.jpg",
      "https://randomuser.me/api/portraits/men/6.jpg",
      "https://randomuser.me/api/portraits/women/7.jpg",
      "https://randomuser.me/api/portraits/men/8.jpg",
      "https://randomuser.me/api/portraits/women/9.jpg",
      "https://randomuser.me/api/portraits/men/10.jpg"
    ];
    const images = [
      "https://t3.ftcdn.net/jpg/16/52/70/38/240_F_1652703834_vPQI6W6zM7DSnjUdJwJ8pfyIYDGpdIUs.jpg",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg",
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
      "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg",
      "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
      "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg",
      "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg"
    ];

    for (let i = 0; i < count; i++) {
      const type = actions[Math.floor(Math.random() * actions.length)];
      const messageLines = [];
      const numLines = Math.floor(Math.random() * 2) + 3; // 3 or 4 lines
      for (let j = 0; j < numLines; j++) {
        messageLines.push(texts[Math.floor(Math.random() * texts.length)]);
      }

      const post = {
        id: i,
        type: type === "asked about" ? "question" : (type === "reviewed" ? "review" : "photo"),
        username: `${userNames[Math.floor(Math.random() * userNames.length)]}${i}`,
        action: type,
        recipeName: recipeNames[Math.floor(Math.random() * recipeNames.length)],
        text: messageLines.join('<br />'),
        timeAgo: `${Math.floor(Math.random() * 23) + 1} HOURS AGO`,
        userAvatar: avatars[Math.floor(Math.random() * avatars.length)],
        image: images[Math.floor(Math.random() * images.length)]
      };

      if (post.type === "review") {
        post.stars = "★★★★★".substring(0, Math.floor(Math.random() * 5) + 1);
      }
      data.push(post);
    }
    return data;
  };

  // ✅ Fetch Popular Recipes
  const fetchPopularRecipes = async () => {
    try {
      setPopularLoading(true);
      const recipes = [];
      for (let i = 0; i < 8; i++) {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await res.json();
        recipes.push(data.meals[0]);
      }
      setPopularRecipes(recipes);
    } catch (err) {
      console.error("Error fetching popular recipes:", err);
    } finally {
      setPopularLoading(false);
    }
  };

  // ✅ Fetch Categories
  const fetchExploreCategories = async () => {
    try {
      setExploreLoading(true);
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
      const data = await res.json();
      const categories = data.meals.map((c) => c.strCategory);
      const randomCategories = categories.sort(() => 0.5 - Math.random()).slice(0, 8);
      setExploreCategories(randomCategories);
    } catch (err) {
      console.error("Error fetching categories:", err);
    } finally {
      setExploreLoading(false);
    }
  };

  // ✅ Fetch All Recipes
  const fetchAllRecipes = async () => {
    try {
      setAllRecipesLoading(true);
      const recipes = [];
      for (let i = 0; i < 8; i++) {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await res.json();
        recipes.push(data.meals[0]);
      }
      setAllRecipes(recipes);
    } catch (err) {
      console.error("Error fetching all recipes:", err);
    } finally {
      setAllRecipesLoading(false);
    }
  };

  // ✅ Fetch Craving Recipes
  const fetchCravingRecipes = async () => {
    try {
      setCravingLoading(true);
      const categoriesToFetch = ["Chicken", "Dessert", "Pasta"];
      const cravingMeals = [];

      for (const category of categoriesToFetch) {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const data = await res.json();
        if (data.meals?.length) {
          const randomMeal = data.meals[Math.floor(Math.random() * data.meals.length)];
          const detailRes = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomMeal.idMeal}`);
          const detailData = await detailRes.json();
          if (detailData.meals?.length) {
            cravingMeals.push(detailData.meals[0]);
          }
        }
      }
      setCravingRecipes(cravingMeals);
    } catch (err) {
      console.error("Error fetching craving recipes:", err);
    } finally {
      setCravingLoading(false);
    }
  };

  // ✅ Fetch Community Posts
  const fetchCommunityPosts = async () => {
    try {
      setCommunityLoading(true);
      // Generate 4 fake community posts for the home page
      const posts = generateFakeCommunityData(4);
      setCommunityPosts(posts);
    } catch (err) {
      console.error("Error fetching community posts:", err);
    } finally {
      setCommunityLoading(false);
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  // ... (rest of your existing code)

  useEffect(() => {
    fetchPopularRecipes();
    fetchExploreCategories();
    fetchAllRecipes();
    fetchCravingRecipes();
    fetchCommunityPosts();
  }, []);

  useEffect(() => {
    const slides = document.querySelectorAll(".fc-hero .slide");
    let dots = document.querySelectorAll(".fc-hero .dots div");

    // Initialize dots if they are not already present
    if (dots.length === 0 && slides.length > 0) {
      const dotsContainer = document.querySelector(".fc-hero .dots");
      for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("div");
        dotsContainer.appendChild(dot);
      }
      // Re-query dots after creation
      dots = document.querySelectorAll(".fc-hero .dots div");
    }

    const activateSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    };

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const interval = setInterval(nextSlide, 5000); // Change slide every 4.5  seconds

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        setCurrentSlide(index);
      });
    });

    activateSlide(currentSlide);

    return () => {
      clearInterval(interval);
      dots.forEach((dot, index) => {
        dot.removeEventListener("click", () => {
          setCurrentSlide(index);
        });
      });
    };
  }, [currentSlide]);

  // ✅ RETURN UI
  return (
    <>
      {/* Hero Section */}
      <section className="fc-hero carousel-wrap">
        <Link to="/category/dessert" className="slide active text-white">
          <img
            src="pexels-pixabay-47062.jpg"
            alt="Desserts"
            className="hero-card"
          />
          <div className="container hero-text">
            <h1>Desserts</h1>
            <p>Indulge in cakes, puddings, and sweet treats.</p>
          </div>
        </Link>
        <Link to="/categories" className="slide text-white">
          <img
            src="https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg"
            alt="Snacks"
            className="hero-card"
          />
          <div className="container hero-text">
            <h1>Snacks</h1>
            <p>Quick & delicious bites for anytime hunger.</p>
          </div>
        </Link>
        <Link to="/category/Breakfast" className="slide text-white">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Breakfast"
            className="hero-card"
          />
          <div className="container hero-text">
            <h1>Breakfast</h1>
            <p>Start your day with power-packed breakfasts.</p>
          </div>
        </Link>
        <div className="dots"></div>
      </section>

      {/* Community Section */}
      <section className="fc-section community-section ">
        <div className="section-header community-header ">
          <h2>Fresh From Our Community</h2>
          <Link to="/community" className="link-btn">View All&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;</Link>
        </div>
        <div className="community-cards">
          {communityLoading ? (
            <p className="text-center text-primary">Loading community posts...</p>
          ) : (
            communityPosts.slice(0, 4).map((post, index) => (
              <div key={index} className="community-card">
                <div className="user-info">
                  <img src={post.userAvatar} alt="User" className="user-avatar" />
                  <p>
                    <strong>{post.username}</strong> {post.action}{" "}
                    <a href="#">{post.recipeName}</a>
                  </p>
                </div>
                {post.type === "review" && <div className="stars">{post.stars}</div>}
                <img src={post.image} alt="Food" className="card-image" /> {/* Ensure image is always displayed */}
                <p className="card-text" dangerouslySetInnerHTML={{ __html: post.text }}></p>
                <div className="card-footer">
                  <span>{post.timeAgo}</span>
                  {post.type !== "photo" && <a href="#">REPLY</a>}
                  <span className="heart">♡</span>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Popular Now */}
      <section className="fc-section">
        <div className="container">
          <div className="section-header community-header ">
            <h2>Popular now</h2>
            <Link to="/all-recipes" className="link-btn">View All&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;</Link>
          </div>
          <div className="fc-grid">
            {popularLoading ? (
              <p className="text-center text-primary">Loading popular recipes...</p>
            ) : (
              popularRecipes.map((recipe) => (
                <Link
                  key={recipe.idMeal}
                  to={`/recipe/${recipe.idMeal}`}
                  className="card shadow-sm border-0 text-decoration-none text-dark"
                >
                  <img
                    src={recipe.strMealThumb}
                    className="card-img-top"
                    alt={recipe.strMeal}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.strMeal}</h5>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Craving Section */}
      <section className="container my-5">
        <div className="section-header community-header ">
          <h2>WHAT WE'RE CRAVING</h2>
          <Link to="/all-recipes" className="link-btn">View All&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;</Link>
        </div>
        <div className="row g-4">
          {cravingLoading ? (
            <p className="text-center text-primary">Loading cravings...</p>
          ) : (
            cravingRecipes.map((recipe) => (
              <div key={recipe.idMeal} className="col-12 col-sm-6 col-lg-4">
                <Link to={`/recipe/${recipe.idMeal}`} className="craving-card text-decoration-none">
                  <div className="card border-0 shadow-sm h-100">
                    <img
                      src={recipe.strMealThumb}
                      className="card-img"
                      alt={recipe.strMeal}
                    />
                    <div className="card-img-overlay text-white p-3 d-flex flex-column justify-content-end">
                      <small className="fw-bold">COLLECTION</small>
                      <h5 className="fw-bold mt-1">{recipe.strMeal}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Explore More */}
      <section className="fc-section bg-light py-5">
        <div className="container">
          <div className="section-header community-header ">
            <h2>Explore More</h2>
            <Link to="/categories" className="link-btn">View All&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;</Link>
          </div>
          <div className="row g-4">
            {exploreLoading ? (
              <p className="text-center text-primary">Loading categories...</p>
            ) : (
              exploreCategories.map((category) => (
                <div key={category} className="col-md-3">
                  <Link
                    to={`/category/${category}`}
                    className="card shadow-sm border-0 text-decoration-none text-dark"
                  >
                    <div className="card-body expcard">
                      <h5 className="card-title">{category}</h5>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* All Recipes */}
      <section className="fc-section py-5">
        <div className="container">
          <div className="section-header community-header ">
            <h2>All Recipes</h2>
            <Link className="link-btn" to="/all-recipes">
         &nbsp; See all&nbsp;<i class="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="fc-grid">
            {allRecipesLoading ? (
              <p className="text-center text-primary">Loading all recipes...</p>
            ) : (
              allRecipes.map((recipe) => (
                <Link
                  key={recipe.idMeal}
                  to={`/recipe/${recipe.idMeal}`}
                  className="card shadow-sm border-0 text-decoration-none text-dark"
                >
                  <img
                    src={recipe.strMealThumb}
                    className="card-img-top"
                    alt={recipe.strMeal}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.strMeal}</h5>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

  
