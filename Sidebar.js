import React from "react";

function Sidebar({ activeModule, setActiveModule }) {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <div
        className={`module-link ${activeModule === "Sales" ? "active" : ""}`}
        onClick={() => setActiveModule("Sales")}
      >
        Sales
      </div>
      <div
        className={`module-link ${activeModule === "Inventory" ? "active" : ""}`}
        onClick={() => setActiveModule("Inventory")}
      >
        Inventory
      </div>
      <div
        className={`module-link ${activeModule === "Customer" ? "active" : ""}`}
        onClick={() => setActiveModule("Customer")}
      >
        Customer
      </div>
      <div
        className={`module-link ${activeModule === "Reporting" ? "active" : ""}`}
        onClick={() => setActiveModule("Reporting")}
      >
        Reporting
      </div>
    </div>
  );
}

export default Sidebar;
