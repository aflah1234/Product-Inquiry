import React from 'react';
import '../styles/Product.css'
const products = [
  {
    id: 1,
    name: "Watch",
    description: "Classy Men Watches Strap Material: Stainless Steel Display Type: Analogue Size: Free Size Multipack",
    price: "$49.99",
    imageUrl: "https://storage.googleapis.com/shy-pub/37492/1623569029470_SKU-0078_0.jpg",
  },
  {
    id: 2,
    name: "JBL",
    description: "JBL Partybox Encore Essential Portable Party Speaker With Light Show That Syncs to the Beat (Black)",
    price: "$79.99",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdXwi2SeoyVsBc_tnTT9R88aBhLcGXYCIPWg&s",
  },
  {
    id: 3,
    name: "HeadPhone",
    description: "Beats Studio Pro Wireless Headphones — Sandstone",
    price: "$99.99",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0N-LE1lEgGVbdP5y4qp-p0QZEII-5MRyi3g&s",
  },
  {
    id: 4,
    name: "MagSafe",
    description: " 20W 10000mAh Battery Magnetic Wireless Power Bank, USB C Fast Charge Portable Charger, PD Fast Charging Compatible for iPhone 15 Pro Max, 15,14 Plus, 13, 12 Series with 60W USB C Cable ",
    price: "$59.99",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8J6WTxv8kj_YvazA-4OmS23K4sFxYL50Zqq0rNtqsytiBmDNvS2FBZ-M0cvlUo7enjTU&usqp=CAU",
  }
];

const ProductPage = () => {
  return (
    <div className="product-page">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;