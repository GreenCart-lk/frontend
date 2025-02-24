import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Reusable Water Bottle",
      price: "1500 LKR",
      image: "/images/bottle.jpg",
    },
    {
      id: 2,
      name: "Organic Cotton Tote Bag",
      price: "1200 LKR",
      image: "/images/tote-bag.jpg",
    },
    {
      id: 3,
      name: "Bamboo Toothbrush",
      price: "800 LKR",
      image: "/images/toothbrush.jpg",
    },
  ];

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to GreenCart LK</h1>
        <p>
          Your one-stop marketplace for eco-friendly and sustainable products.
        </p>
        <Link to="/products" className="shop-now-btn">
          Shop Now
        </Link>
      </header>

      <section className="about-section">
        <h2>Why Choose GreenCart LK?</h2>
        <ul>
          <li>
            <strong>🌿 Support Sustainability:</strong> Reduce plastic waste and
            carbon footprint.
          </li>
          <li>
            <strong>🌍 Eco-Friendly Shopping:</strong> Browse verified green
            products.
          </li>
          <li>
            <strong>💚 Support Local Sellers:</strong> Empower small businesses
            promoting sustainability.
          </li>
        </ul>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <Link to={`/products/${product.id}`} className="view-details">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
