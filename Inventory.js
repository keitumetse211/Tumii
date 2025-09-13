import React, { useState } from "react";

function Inventory({ products, setProducts }) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.quantity) return;
    setProducts([
      ...products,
      {
        ...newProduct,
        id: Date.now(),
        price: parseFloat(newProduct.price),
        quantity: parseInt(newProduct.quantity),
      },
    ]);
    setNewProduct({ name: "", description: "", category: "", price: "", quantity: "" });
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h2>Inventory Module</h2>

      <div style={{ marginBottom: "30px" }}>
        <h3>Add New Product</h3>
        <input name="name" value={newProduct.name} onChange={handleChange} placeholder="Name" />
        <input name="description" value={newProduct.description} onChange={handleChange} placeholder="Description" />
        <input name="category" value={newProduct.category} onChange={handleChange} placeholder="Category" />
        <input name="price" value={newProduct.price} onChange={handleChange} placeholder="Price" type="number" />
        <input name="quantity" value={newProduct.quantity} onChange={handleChange} placeholder="Quantity" type="number" />
        <button onClick={handleAdd}>Add Product</button>
      </div>

    
      <div>
        <h3>Product List</h3>
        {products.length === 0 ? (
          <p>No products yet.</p>
        ) : (
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.description}</td>
                  <td>{p.category}</td>
                  <td>{p.price}</td>
                  <td>{p.quantity}</td>
                  <td>
                    <button onClick={() => handleDelete(p.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Inventory;
