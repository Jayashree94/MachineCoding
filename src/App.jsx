import React from "react";
import { useEffect, useState } from "react";
import "./app.css";
const App = () => {
  const [products, setProducts] = useState([]);
  const [currPage, setcurrPage] = useState(0);

  const Productdets = ({ image, title }) => {
    return (
      <div className="product_card">
        <img src={image} alt="thumbmail"></img>
        <span> {title}</span>
      </div>
    );
  };

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=200");
    const json = await data.json();
    console.log(json);
    setProducts(json.products);
  };

  const PAGE_SIZE = 20;
  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);

  useEffect(() => {
    fetchData();
  }, []);

  return !products.length ? (
    <h1> No products Found</h1>
  ) : (
    <div className="App">
      <h1>Pagination</h1>
      
      <div className="product_list">
        {products.slice(0,10).map((p) => {
          return <Productdets key={p.id} image={p.thumbnail} title={p.title} />;
        })}
      </div>

      <div className="Page">
        {[...Array(noOfPages).keys()].map((n) => (
          <span  className = "page-num" key={n}> {n} </span>
        ))}
      </div>
      
    </div>
  );
};

export default App;
