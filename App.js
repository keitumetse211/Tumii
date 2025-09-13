import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";
import Sales from "./components/Sales";
import Customer from "./components/Customer";
import Reporting from "./components/Reporting";
import "./App.css";
import productsData from "./data/products.json";

function App() {
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [sales, setSales] = useState([]);
  const [activeModule, setActiveModule] = useState("Dashboard");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const renderMainContent = () => {
    switch (activeModule) {
      case "Dashboard":
        return <Dashboard />;
      case "Sales":
        return (
          <Sales
            products={products}
            setProducts={setProducts}
            sales={sales}
            setSales={setSales}
            customers={customers}
          />
        );
      case "Inventory":
        return <Inventory products={products} setProducts={setProducts} />;
      case "Customer":
        return (
          <Customer customers={customers} setCustomers={setCustomers} />
        );
      case "Reporting":
        return <Reporting products={products} sales={sales} />;
      default:
        return <h2>Select a Module</h2>;
    }
  };

  return (
    <div className="App">
      <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
      <div className="main-content">{renderMainContent()}</div>
    </div>
  );
}

export default App;
