import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: "Reusable Water Bottle",
        price: "1500 LKR",
        image: "/images/bottle.jpg",
      },
      {
        id: 3,
        name: "Bamboo Toothbrush",
        price: "200 LKR",
        image: "/images/toothbrush.jpg",
      },
      {
        id: 11,
        name: "Neem Wood Comb",
        price: "450 LKR",
        image: "/images/neem-comb.jpg",
      },
      {
        id: 8,
        name: "Coconut Shell Bowl",
        price: "1100 LKR",
        image: "/images/coconut-bowl.jpg",
      },
      {
        id: 4,
        name: "Eco-Friendly Notebook",
        price: "450 LKR",
        image: "/images/notebook.jpg",
      },
      {
        id: 2,
        name: "Organic Cotton Tote Bag",
        price: "1200 LKR",
        image: "/images/tote-bag.jpg",
      },
      {
        id: 5,
        name: "Solar-Powered Garden Light",
        price: "3200 LKR",
        image: "/images/solar-light.jpg",
      },
      {
        id: 6,
        name: "Natural Loofah Sponge",
        price: "500 LKR",
        image: "/images/loofah.jpg",
      },
      {
        id: 7,
        name: "Compostable Garbage Bags",
        price: "700 LKR",
        image: "/images/compostable-bags.jpg",
      },
      {
        id: 9,
        name: "Handmade Natural Soap Bar",
        price: "250 LKR",
        image: "/images/natural-soap.jpg",
      },
      {
        id: 10,
        name: "Biodegradable Plant Pots",
        price: "900 LKR",
        image: "/images/plant-pots.jpg",
      },
      {
        id: 12,
        name: "Upcycled Fabric Storage Basket",
        price: "1600 LKR",
        image: "/images/fabric-basket.jpg",
      },
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
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
