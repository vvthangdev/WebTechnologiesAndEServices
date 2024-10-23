import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Fetch products when component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products"); // Assuming your backend API is at this endpoint
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      fetchProducts(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  return (
    <div>
      <Link to="/add-product">Add New Product</Link>
      <h2>Products List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <Link to={`/product/${product._id}`}>{product.name}</Link>
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
            <Link to={`/edit-product/${product._id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
