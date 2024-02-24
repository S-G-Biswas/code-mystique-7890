import React, { useState, useEffect } from 'react';
import "./css/topStock.css"
import { color } from 'framer-motion';



function TopStock() {
  const [topStocks, setTopStocks] = useState([]);

  useEffect(() => {
    fetchTopStocks();
  }, []);

  const fetchTopStocks = async () => {
    try {
      const response = await fetch("http://localhost:8080/");
      const data = await response.json();
      console.log(data)
      setTopStocks(data.topStocks);
    } catch (error) {
      console.error('Error fetching top stocks:', error.message);
    }
  };

  return (
    <div className="topStock">
      <h1 className='top-stock-h1'>Top Stocks</h1>
      <div className="stock-cards">
        {topStocks.map((stock) => (
          <div key={stock._id} className="stock-card">
            <h4>{stock.name}</h4>
            <p>Price: {stock.price}</p>
            <p>Return: {stock.return}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopStock;
