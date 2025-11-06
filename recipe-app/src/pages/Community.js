

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/index.css'; // Reusing existing CSS for general styling
import '../assets/css/community.css';
import '../assets/css/common-btn-styles.css';

const Community = () => {
  const [communityPosts, setCommunityPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
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

    setLoading(true);
    setTimeout(() => {
      setCommunityPosts(generateFakeCommunityData(500)); // Generate 500 fake posts
      setLoading(false);
    }, 500);
  }, []);

  const filteredPosts = communityPosts.filter(post =>
    post.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="community-section">
      <div className="container">
        <div className="community-header">
          <h2>ALL COMMUNITY POSTS</h2>
          <Link to="/" className="link-btn"><i class="fas fa-home"></i> Home</Link>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by username..."
            className="form-control"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="community-cards">
          {loading ? (
            <p className="text-center text-primary">Loading community posts...</p>
          ) : (
            filteredPosts.map((post) => (
              <div key={post.id} className="community-card">
                <div className="user-info">
                  <img src={post.userAvatar} alt="User" className="user-avatar" />
                  <p>
                    <strong>{post.username}</strong> {post.action}{" "}
                    <a href="#">{post.recipeName}</a>
                  </p>
                </div>
                {post.type === "review" && <div className="stars">{post.stars}</div>}
                <img src={post.image} alt="Food" className="card-image" />
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
      </div>
    </div>
  );
};

export default Community;
