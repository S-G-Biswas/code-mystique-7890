
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cardstock from '../Components/Stockcard';

const Stocklist = () => {
  const [stock, setStock] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // number of items per page as needed

  useEffect(() => {
    fetchStock();
  }, []);

  const fetchStock = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setStock(response.data);
    } catch (error) {
      console.log("Error fetching stock data");
    }
  };

  // Calculate the index of the first and last item of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, stock.length);

  // Slice the data array to display only the items for the current page
  const currentStock = stock.slice(startIndex, endIndex);

  // Function to handle previous page navigation
  const goToPreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  // Function to handle next page navigation
  const goToNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(stock.length / itemsPerPage)));
  };

  return (
    <div>
      <h1>Stocks available are....</h1>
      <Cardstock data={currentStock} />
      <div style={{display:"flex",justifyContent:"center",gap:"2%"}}>
        {/* Previous page button */}
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
        {/* Current page indicator */}
        <span>{currentPage}</span>
        {/* Next page button */}
        <button  onClick={goToNextPage} disabled={currentPage === Math.ceil(stock.length / itemsPerPage)}>Next</button>
      </div>
    </div>
  );
};

export default Stocklist;
