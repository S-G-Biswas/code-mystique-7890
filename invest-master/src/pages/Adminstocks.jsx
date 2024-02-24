// import React, { useState, useEffect } from 'react';
// import { Button, Box, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';
// import axios from "axios";

// const Adminstocks = () => {
//   const [adminstock, setAdminstock] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalMode, setModalMode] = useState('add');
//   const [selectedStock, setSelectedStock] = useState(null);
//   const [isFormValid, setIsFormValid] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   const toast = useToast(); // Initialize useToast hook

//   // Define the newStock state variable and setNewStock function
//   const [newStock, setNewStock] = useState({ title: '', price: '', return: '' });

//   useEffect(() => {
//     fetchAdminStock();
//   }, []);

//   const fetchAdminStock = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/users/allstocks");
//       setAdminstock(response.data);
//     } catch (error) {
//       console.log("Error fetching stock data");
//     }
//   };

//   const handleEditStock = (stock) => {
//     setSelectedStock(stock);
//     setModalMode('edit');
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setSelectedStock(null);
//     setIsModalOpen(false);
//     setIsFormValid(false);
//     setModalMode('add');
//   };

//   //admin deltes a stock
//   const handleDeleteStock = (stockId) => {
//     console.log(`Deleting stock with ID ${stockId}`);
//     setAdminstock(prevStocks => prevStocks.filter(stock => stock.id !== stockId));
//     toast({
//       title: "Stock deleted successfully",
//       status: "success",
//       duration: 3000,
//       isClosable: true,
//     });
//   };

//   //admin updates a stock
//   const handleUpdate = () => {
//     handleModalClose();
//     toast({
//       title: "Stock edited successfully",
//       status: "success",
//       duration: 3000,
//       isClosable: true,
//     });
//   };

//   //admin adds a stock
//   const handleAddStock = async () => {
//     try {
//       // Send a POST request to add a new stock
//       await axios.post("http://localhost:8080/users/allstocks", newStock);
//       setIsModalOpen(false);
//       toast({
//         title: "Stock added successfully",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//       setNewStock({ title: '', price: '', return: '' });
//     } catch (error) {
//       console.log("Error adding stock:", error);
//       toast({
//         title: "Error adding stock",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = Math.min(startIndex + itemsPerPage, adminstock.length);
//   const currentItems = adminstock.slice(startIndex, endIndex);

//   const goToPreviousPage = () => {
//     setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
//   };

//   const goToNextPage = () => {
//     setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(adminstock.length / itemsPerPage)));
//   };

//   return (
//     <div>
//       <h2>Stocks Available are:</h2>
//       <Box>
//         <Button onClick={() => setIsModalOpen(true)}>ADD STOCK</Button>
//       </Box>
//       <div style={{ backgroundColor: "black", display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', padding: '10px', maxWidth: '100%' }}>
//         <SimpleGrid spacing={5} templateColumns='repeat(auto-fill, minmax(250px, 2fr))' alignItems='center' justifyContent='center' maxWidth='100%'>
//           {currentItems.map((item, index) => (
//             <Card key={index} height='100%'>
//               <CardHeader>
//                 <Heading size='md'>STOCK</Heading>
//               </CardHeader>
//               <CardBody>
//                 <Text>View a summary of all your customers over the last month.</Text>
//                 <img src="https://img.freepik.com/free-vector/stock-market-concept-design_1017-13713.jpg" alt="" />
//                 <Heading size='sm'>Stock: {item.title}</Heading>
//                 <Heading size='sm'>Price: {item.body}</Heading>
//               </CardBody>
//               <CardFooter gap="4" justifyContent='center'>
//                 <Button onClick={() => handleEditStock(item)}>EDIT</Button>
//                 <Button onClick={() => handleDeleteStock(item.id)}>DELETE</Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </SimpleGrid>
//       </div>
//       <div style={{display:"flex",justifyContent:"center",gap:"2%"}}>
//         <button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
//         <span>{currentPage}</span>
//         <button onClick={goToNextPage} disabled={currentPage === Math.ceil(adminstock.length / itemsPerPage)}>Next</button>
//       </div>

//       {/* Modal for update or add based on modalMode */}
//       <Modal isOpen={isModalOpen} onClose={handleModalClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>{modalMode === 'add' ? 'Add New Stock' : 'Edit Stock'}</ModalHeader>
//           <ModalBody>
//             {modalMode === 'add' ? (
//               <>
//                 <FormControl>
//                   <FormLabel>Stock Title</FormLabel>
//                   <Input value={newStock.title} onChange={(e) => setNewStock({ ...newStock, title: e.target.value })} />
//                 </FormControl>
//                 <FormControl>
//                   <FormLabel>Stock Price</FormLabel>
//                   <Input value={newStock.price} onChange={(e) => setNewStock({ ...newStock, price: e.target.value })} />
//                 </FormControl>
//                 <FormControl>
//                   <FormLabel>Stock Return</FormLabel>
//                   <Input value={newStock.return} onChange={(e) => setNewStock({ ...newStock, return: e.target.value })} />
//                 </FormControl>
//               </>
//             ) : (
//               <>
//                 <FormControl>
//                   <FormLabel>Stock Title</FormLabel>
//                   <Input defaultValue={selectedStock.title} />
//                 </FormControl>
//                 <FormControl>
//                   <FormLabel>Stock Price</FormLabel>
//                   <Input defaultValue={selectedStock.title} />
//                 </FormControl>
//                 <FormControl>
//                   <FormLabel>Stock Return</FormLabel>
//                   <Input defaultValue={selectedStock.title} />
//                 </FormControl>
//               </>
//             )}
//           </ModalBody>
//           <ModalFooter>
//             {modalMode === 'add' ? (
//               <Button bg={"teal.500"} color={"white"} onClick={handleAddStock}>Add</Button>
//             ) : (
//               <Button bg={"teal.500"} color={"white"} disabled={!isFormValid} onClick={handleUpdate}>Update</Button>
//             )}
//             <Button ml={3} onClick={handleModalClose}>Cancel</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </div>
//   )
// }

// export default Adminstocks;

import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const Adminstocks = () => {
  const [adminstock, setAdminstock] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [selectedStock, setSelectedStock] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const toast = useToast(); // Initialize useToast hook

  // Define the newStock state variable and setNewStock function
  const [newStock, setNewStock] = useState({ name: "", price: "", return: "" });

  useEffect(() => {
    fetchAdminStock();
  }, []);

  const fetchAdminStock = async () => {
    try {
      const response = await axios.get("http://localhost:8080/adminstocks/");
      setAdminstock(response.data.stocks); // Update adminstock with array of stocks
    } catch (error) {
      console.log("Error fetching stock data:", error);
    }
  };

  const handleEditStock = (stock) => {
    setSelectedStock(stock);
    setModalMode("edit");
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedStock(null);
    setIsModalOpen(false);
    setIsFormValid(false);
    setModalMode("add");
  };

  // Admin deletes a stock
  const handleDeleteStock = async (stockId) => {
    try {
      await axios.delete(`http://localhost:8080/adminstocks/${stockId}`);
      setAdminstock((prevStocks) =>
        prevStocks.filter((stock) => stock._id !== stockId)
      );
      toast({
        title: "Stock deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log("Error deleting stock:", error);
      toast({
        title: "Error deleting stock",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Admin updates a stock
  const handleUpdate = async () => {
    try {
      // Send the entire selectedStock object
      await axios.patch(
        `http://localhost:8080/adminstocks/${selectedStock._id}`,
        selectedStock
      );
      handleModalClose();
      // Update adminstock state after patching the stock
      setAdminstock((prevStocks) =>
        prevStocks.map((stock) => {
          if (stock._id === selectedStock._id) {
            return selectedStock;
          }
          return stock;
        })
      );
      toast({
        title: "Stock edited successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log("Error updating stock:", error);
      toast({
        title: "Error updating stock",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Admin adds a new stock
  const handleAddStock = async () => {
    try {
      // Send a POST request to add a new stock
      await axios.post("http://localhost:8080/adminstocks", newStock);
      setIsModalOpen(false);
      toast({
        title: "Stock added successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setNewStock({ name: "", price: "", return: "" });
    } catch (error) {
      console.log("Error adding stock:", error);
      toast({
        title: "Error adding stock",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, adminstock.length);
  const currentItems = adminstock.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(adminstock.length / itemsPerPage))
    );
  };

  return (
    <div>
      <h2 style={{ color: "yellow" }}>Stocks Available are:</h2>
      <Box>
        <Button onClick={() => setIsModalOpen(true)}>ADD STOCK</Button>
      </Box>
      <div
        style={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          padding: "10px",
          maxWidth: "100%",
        }}
      >
        <SimpleGrid
          spacing={3}
          templateColumns="repeat(auto-fill, minmax(250px, 2fr))"
          alignItems="center"
          justifyContent="center"
          maxWidth="100%"
        >
          {currentItems.map((item, index) => (
            <Card key={index} height="100%">
              <CardHeader>
                <Heading size="md">Invest Master</Heading>
              </CardHeader>
              <CardBody
                style={{ padding: "10px", margin: "0", textAlign: "center" }}
              >
                <img
                  style={{ maxHeight: "200px" , alignSelf: 'center' }}
                  src="https://img.freepik.com/free-vector/stock-market-concept-design_1017-13713.jpg"
                  alt=""
                />
                <Heading size="sm">Stock: {item.name}</Heading>
                <Heading size="sm">Price: {item.price}</Heading>
                <Heading size="sm">Return: {item.return}</Heading>
              </CardBody>

              <CardFooter gap="4" justifyContent="center">
                <Button onClick={() => handleEditStock(item)}>EDIT</Button>
                <Button onClick={() => handleDeleteStock(item._id)}>
                  DELETE
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "2%" }}>
        <button
          style={{ color: "yellow" }}
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span style={{ color: "yellow" }}>{currentPage}</span>
        <button
          style={{ color: "yellow" }}
          onClick={goToNextPage}
          disabled={currentPage === Math.ceil(adminstock.length / itemsPerPage)}
        >
          Next
        </button>
      </div>

      {/* Modal for update or add based on modalMode */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {modalMode === "add" ? "Add New Stock" : "Edit Stock"}
          </ModalHeader>
          <ModalBody>
            {modalMode === "add" ? (
              <>
                <FormControl>
                  <FormLabel>Stock Name</FormLabel>
                  <Input
                    value={newStock.name}
                    onChange={(e) =>
                      setNewStock({ ...newStock, name: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Stock Price</FormLabel>
                  <Input
                    value={newStock.price}
                    onChange={(e) =>
                      setNewStock({ ...newStock, price: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Stock Return</FormLabel>
                  <Input
                    value={newStock.return}
                    onChange={(e) =>
                      setNewStock({ ...newStock, return: e.target.value })
                    }
                  />
                </FormControl>
              </>
            ) : (
              <>
                <FormControl>
                  <FormLabel>Stock Name</FormLabel>
                  <Input defaultValue={selectedStock.name} />
                </FormControl>
                <FormControl>
                  <FormLabel>Stock Price</FormLabel>
                  <Input defaultValue={selectedStock.price} />
                </FormControl>
                <FormControl>
                  <FormLabel>Stock Return</FormLabel>
                  <Input defaultValue={selectedStock.return} />
                </FormControl>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            {modalMode === "add" ? (
              <Button bg={"teal.500"} color={"white"} onClick={handleAddStock}>
                Add
              </Button>
            ) : (
              <Button
                bg={"teal.500"}
                color={"white"}
                disabled={!isFormValid}
                onClick={handleUpdate}
              >
                Update
              </Button>
            )}
            <Button ml={3} onClick={handleModalClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Adminstocks;
