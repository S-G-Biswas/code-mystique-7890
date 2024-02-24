



//2.apifetchandshows data nnot display in cards

// import React, { useState, useEffect } from 'react';
// import Cardstock from '../components/Card';
// import axios from "axios";

// const Allstocks = () => {
//   const [stock, setStock] = useState(null); // Initialize as null
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10; // Adjust the number of items per page as needed

//   useEffect(() => {
//     fetchStock();
//   }, []);

//   const fetchStock = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/users/allstocks");
//       console.log(response.data)
//       setStock(response.data);
//     } catch (error) {
//       console.log("Error fetching stock data");
//     }
//   };

//   if (!stock) {
//     return <div>Loading...</div>;
//   }

//   // Check if stock is an array before calling slice
//   const currentStock = Array.isArray(stock) ? stock.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];

//   const goToPreviousPage = () => {
//     setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
//   };

//   const goToNextPage = () => {
//     setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(stock.length / itemsPerPage)));
//   };

//   return (
//     <div>
//       <h1>Stocks available are....</h1>
//       <Cardstock data={currentStock} />
//       <div style={{display:"flex",justifyContent:"center",gap:"2%"}}>
//         <button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
//         <span>{currentPage}</span>
//         <button onClick={goToNextPage} disabled={currentPage === Math.ceil(stock.length / itemsPerPage)}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default Allstocks;





import React, { useState, useEffect } from 'react';
import Cardstock from '../components/Card';
import axios from "axios";

const Allstocks = () => {
  const [stock, setStock] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchStock();
  }, []);

  const fetchStock = async () => {
    try {
      const response = await axios.get("http://localhost:8080/users/allstocks");
      setStock(response.data.stocks);
      setCurrentPage(1); // Reset current page to 1 after fetching new data
    } catch (error) {
      console.log("Error fetching stock data");
    }
  };

  if (!stock) {
    return <div>Loading...</div>;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, stock.length);

  const currentStock = stock.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(stock.length / itemsPerPage)));
  };

  return (
    <div>
      <h1 style={{color:"yellow"}}>Stocks available are....</h1>
      <Cardstock data={currentStock} />
      <div style={{display:"flex",justifyContent:"center",gap:"2%"}}>
        <button style={{color:"yellow"}} onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
        <span style={{color:"yellow"}}>{currentPage}</span>
        <button style={{color:"yellow"}} onClick={goToNextPage} disabled={currentPage === Math.ceil(stock.length / itemsPerPage)}>Next</button>
      </div>
    </div>
  );
};

export default Allstocks;

