import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ProductForm = () => {
  const { id } = useParams(); // This will help determine if we're editing or adding a new product
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // If we have an ID, it means we are in edit mode, so fetch product data
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`/api/products/${id}`);
          setProduct(response.data);
        } catch (error) {
          console.error("Error fetching product", error);
        }
      };

      fetchProduct();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        // Update product
        await axios.put(`/api/products/${id}`, product);
      } else {
        // Add new product
        await axios.post("/api/products", product);
      }
      navigate("/"); // Redirect back to the product list
    } catch (error) {
      console.error("Error saving product", error);
    }
  };

  return (
    <div>
      <h2>{id ? "Edit Product" : "Add Product"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">
          {id ? "Update Product" : "Create Product"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
