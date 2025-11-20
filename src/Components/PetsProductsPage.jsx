import React, { useState } from "react";
import "./PetProductsPage.css";
import Navbar from "./Navbar";

const products = [
  { id: 1, name: "CozyCat Comfort Bed", price: 29.99, category: "Bedding", image: "cat1.jpg" },
  { id: 2, name: "Doggy Delight Chew Toy", price: 12.5, category: "Toys", image: "toy.jpg" },
  { id: 3, name: "Feathered Friend Bird Cage", price: 75.0, category: "Bedding", image: "birdcage.jpg" },
  { id: 4, name: "Aquatic Wonders Fish Tank", price: 120.0, category: "Bedding", image: "fish.jpg" },
  { id: 5, name: "Purrfect Playtime Laser", price: 9.99, category: "Toys", image: "laser.jpg" },
  { id: 6, name: "Canine Care Grooming Kit", price: 45.0, category: "Grooming Essentials", image: "kit.jpg" },
  { id: 7, name: "Chirpy Charm Bird Dispenser", price: 19.99, category: "Food", image: "birds-house.jpg" },
  { id: 8, name: "Fin-tastic Fish Food", price: 7.5, category: "Food", image: "fish1.jpg" },
  
];

const PetProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // Filtering logic
  const filteredProducts = products.filter((product) => {
    // Search by name
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Category filter
    const matchesCategory = category ? product.category === category : true;

    // Price filter
    let matchesPrice = true;
    if (priceRange === "0-20") matchesPrice = product.price >= 0 && product.price <= 20;
    if (priceRange === "20-50") matchesPrice = product.price > 20 && product.price <= 50;
    if (priceRange === "50+") matchesPrice = product.price > 50;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="pet-products-page">
      <Navbar />
      <header className="header">
        <h1 className="title">Pet Product Showcase 🐾</h1>
        <div className="search-and-filter">
          <input
            type="text"
            placeholder="Search for pet products..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="filters">
            <select className="filter-select" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">All Categories</option>
              <option value="Food">Food</option>
              <option value="Toys">Toys</option>
              <option value="Grooming Essentials">Grooming Essentials</option>
              <option value="Bedding">Bedding</option>
            </select>
            <select className="filter-select" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
              <option value="">All Prices</option>
              <option value="0-20">$0 - $20</option>
              <option value="20-50">$20 - $50</option>
              <option value="50+">$50+</option>
            </select>
          </div>
        </div>
      </header>

      <main className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <button className="buy-button">Buy now</button>
            </div>
          ))
        ) : (
          <p className="no-results">No products match your search 🔍</p>
        )}
      </main>
    </div>
  );
};

export default PetProductsPage;