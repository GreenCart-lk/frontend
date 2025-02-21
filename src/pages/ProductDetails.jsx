import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/productDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useOutletContext();

  // Simulated product data (replace with API call later)
  useEffect(() => {
    const productData = [
      {
        id: 1,
        name: "Reusable Water Bottle",
        price: 1500,
        image: "/images/bottle.jpg",
        description: "A stainless steel water bottle to reduce plastic waste.",
      },
      {
        id: 2,
        name: "Organic Cotton Tote Bag",
        price: 1200,
        image: "/images/tote-bag.jpg",
        description:
          "A stylish and eco-friendly tote bag made from organic cotton.",
      },
      {
        id: 3,
        name: "Bamboo Toothbrush",
        price: 800,
        image: "/images/toothbrush.jpg",
        description:
          "A biodegradable bamboo toothbrush for sustainable oral care.",
      },
    ];

    const selectedProduct = productData.find((p) => p.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <h2 className="not-found">Product not found</h2>;
  }

  const addToCart = () => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="product-details-container">
      <img src={product.image} alt={product.name} className="product-images" />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">{product.price} LKR</p>
        <p className="description">{product.description}</p>
        <button className="add-to-cart" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
