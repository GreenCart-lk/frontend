import { useState } from "react";
import "../styles/sellerDashboard.css";

const SellerDashboard = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Reusable Water Bottle",
      price: 1500,
      image: "/images/bottle.jpg",
    },
    {
      id: 2,
      name: "Organic Cotton Tote Bag",
      price: 1200,
      image: "/images/tote-bag.jpg",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: null,
    preview: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: file, preview: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Cancel image selection
  const cancelImage = () => {
    setFormData({ ...formData, image: null, preview: "" });
    document.getElementById("file-input").value = "";
  };

  // Add a new product
  const addProduct = (e) => {
    e.preventDefault();
    if (formData.name && formData.price) {
      setProducts([...products, { id: products.length + 1, ...formData }]);
      setFormData({ name: "", price: "", image: null, preview: "" }); // Reset form
    }
  };

  // Delete a product
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="seller-dashboard">
      <h2>Seller Dashboard</h2>
      <form onSubmit={addProduct} className="add-product-form">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price (LKR)"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          required
        />

        {formData.preview && (
          <div className="image-preview-container">
            <img
              src={formData.preview}
              alt="Product Preview"
              className="full-preview-image"
            />
            <button
              type="button"
              className="cancel-image-btn"
              onClick={cancelImage}
            >
              Cancel Image
            </button>
          </div>
        )}

        <button type="submit" className="add-btn">
          Add Product
        </button>
      </form>

      <h3>My Products</h3>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.preview || "/images/placeholder.png"}
              alt={product.name}
              className="product-image"
            />
            <h4>{product.name}</h4>
            <p>{product.price} LKR</p>
            <button
              onClick={() => deleteProduct(product.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerDashboard;
