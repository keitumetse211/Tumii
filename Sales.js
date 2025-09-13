import React, { useState } from "react";

function Sales({ products, setProducts, sales, setSales, customers }) {
  const [newSale, setNewSale] = useState({
    customerId: "",
    productId: "",
    quantity: ""
  });

  const handleChange = (e) => {
    setNewSale({ ...newSale, [e.target.name]: e.target.value });
  };

  const handleAddSale = () => {
    const customer = customers.find((c) => c.id === parseInt(newSale.customerId));
    const product = products.find((p) => p.id === parseInt(newSale.productId));

    if (!customer || !product) return;
    if (product.quantity < parseInt(newSale.quantity)) {
      alert("Not enough stock!");
      return;
    }


    setProducts(
      products.map((p) =>
        p.id === product.id
          ? { ...p, quantity: p.quantity - parseInt(newSale.quantity) }
          : p
      )
    );

    
    const saleRecord = {
      id: Date.now(),
      customerName: customer.name,
      productName: product.name,
      quantity: parseInt(newSale.quantity),
      total: product.price * parseInt(newSale.quantity),
      date: new Date().toLocaleString()
    };

    setSales([...sales, saleRecord]);

   
    setNewSale({ customerId: "", productId: "", quantity: "" });
  };

  return (
    <div>
      <h2>Sales Module</h2>

      
      <div style={{ marginBottom: "30px" }}>
        <h3>Record Sale</h3>
        <select
          name="customerId"
          value={newSale.customerId}
          onChange={handleChange}
        >
          <option value="">Select Customer</option>
          {customers.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        <select
          name="productId"
          value={newSale.productId}
          onChange={handleChange}
        >
          <option value="">Select Product</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} (Stock: {p.quantity})
            </option>
          ))}
        </select>

        <input
          type="number"
          name="quantity"
          value={newSale.quantity}
          onChange={handleChange}
          placeholder="Quantity"
        />
        <button onClick={handleAddSale}>Add Sale</button>
      </div>

     
      <h3>Sales History</h3>
      {sales.length === 0 ? (
        <p>No sales recorded yet.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Date</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((s) => (
              <tr key={s.id}>
                <td>{s.date}</td>
                <td>{s.customerName}</td>
                <td>{s.productName}</td>
                <td>{s.quantity}</td>
                <td>${s.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Sales;
