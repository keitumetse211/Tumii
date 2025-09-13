import React from "react";

function Reporting({ products, sales }) {
  const totalInventoryValue = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );

  const totalSalesRevenue = sales.reduce((sum, s) => sum + s.total, 0);

  return (
    <div>
      <h2>Reporting Module</h2>

      <h3>Inventory Report</h3>
      <p>Total Products: {products.length}</p>
      <p>Total Inventory Value: ${totalInventoryValue.toFixed(2)}</p>

      <h3>Sales Report</h3>
      <p>Total Sales: {sales.length}</p>
      <p>Total Revenue: ${totalSalesRevenue.toFixed(2)}</p>
    </div>
  );
}

export default Reporting;
