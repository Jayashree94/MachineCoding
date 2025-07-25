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
      <div class="bg-white dark:bg-black text-black dark:text-white">
        Dark mode enabled
        <h1>hello</h1>
      </div>
      {products.map((p) => {
       return <span key={p.id}>{p.title}</span>
})}
    </div>
  )
}
