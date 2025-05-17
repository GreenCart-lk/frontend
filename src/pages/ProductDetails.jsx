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
        price: 200,
        image: "/images/toothbrush.jpg",
        description:
          "A biodegradable bamboo toothbrush for sustainable oral care.",
      },
      {
        id: 4,
        name: "Eco-Friendly Notebook",
        price: 450,
        image: "/images/notebook.jpg",
        description:
          "Made from 100% recycled paper, perfect for students and professionals who care about sustainability.",
      },
      {
        id: 5,
        name: "Solar-Powered Garden Light",
        price: 3200,
        image: "/images/solar-light.jpg",
        description:
          "Harness the power of the sun to light your garden sustainably. Weatherproof and easy to install.",
      },
      {
        id: 6,
        name: "Natural Loofah Sponge",
        price: 500,
        image: "/images/loofah.jpg",
        description:
          "Biodegradable and gentle on the skin. A plastic-free alternative for your daily skincare routine.",
      },
      {
        id: 7,
        name: "Compostable Garbage Bags",
        price: 700,
        image: "/images/compostable-bags.jpg",
        description:
          "100% compostable and biodegradable trash bags. An eco-friendly alternative to traditional plastic.",
      },
      {
        id: 8,
        name: "Coconut Shell Bowl",
        price: 1100,
        image: "/images/coconut-bowl.jpg",
        description:
          "Handmade from real coconut shells. A natural, sustainable choice for serving snacks or smoothies.",
      },
      {
        id: 9,
        name: "Handmade Natural Soap Bar",
        price: 250,
        image: "/images/natural-soap.jpg",
        description:
          "Made with organic ingredients and essential oils, this chemical-free soap bar is gentle on your skin and the planet — packaged with zero plastic.",
      },
      {
        id: 10,
        name: "Biodegradable Plant Pots",
        price: 900,
        image: "/images/plant-pots.jpg",
        description:
          "Perfect for home gardening! These biodegradable pots help reduce plastic use and promote healthy root growth.",
      },
      {
        id: 11,
        name: "Neem Wood Comb",
        price: 450,
        image: "/images/neem-comb.jpg",
        description:
          "A natural, anti-bacterial comb made from neem wood — gentle on the scalp and great for daily hair care without static.",
      },
      {
        id: 12,
        name: "Upcycled Fabric Storage Basket",
        price: 1600,
        image: "/images/fabric-basket.jpg",
        description:
          "Stylish and sustainable! These storage baskets are made from upcycled fabric and perfect for organizing any space at home.",
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
