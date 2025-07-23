import { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=100"); // Add valid URL here
    const json = await data.json();

    if (json && json.products) {
      setProducts(json.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products">
      {products.map((p) => (
        <span key={p.id}>{p.title}</span>
      ))}
    </div>
  )
}
