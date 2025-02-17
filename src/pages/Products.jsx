import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Simulated product data (replace with API call later)
  useEffect(() => {
    setProducts([
      { id: 1, name: "Reusable Water Bottle", price: "1500 LKR", image: "/images/bottle.jpg" },
      { id: 2, name: "Organic Cotton Tote Bag", price: "1200 LKR", image: "/images/tote-bag.jpg" },
      { id: 3, name: "Bamboo Toothbrush", price: "800 LKR", image: "/images/toothbrush.jpg" },
    ]);
  }, []);

  // Filter products based on search input
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-container">
      <h2>Eco-Friendly Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-box"
      />
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <Link to={`/products/${product.id}`} className="view-details">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
