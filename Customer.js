import React, { useState } from "react";

function Customer({ customers, setCustomers }) {
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!newCustomer.name || !newCustomer.email) return;
    setCustomers([
      ...customers,
      { ...newCustomer, id: Date.now() }
    ]);
    setNewCustomer({ name: "", email: "", phone: "" });
  };

  const handleDelete = (id) => {
    setCustomers(customers.filter((c) => c.id !== id));
  };

  return (
    <div>
      <h2>Customer Module</h2>

      
      <div style={{ marginBottom: "30px" }}>
        <h3>Add New Customer</h3>
        <input
          name="name"
          value={newCustomer.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="email"
          value={newCustomer.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="phone"
          value={newCustomer.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <button onClick={handleAdd}>Add Customer</button>
      </div>

    
      <h3>Customer List</h3>
      {customers.length === 0 ? (
        <p>No customers yet.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>
                  <button onClick={() => handleDelete(c.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Customer;
