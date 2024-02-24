import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from '@chakra-ui/react'



export default function UserStock() {
    const [stock, setStock] = useState([]);
  
    useEffect(() => {
      fetchStock();
    }, [stock]);
  
    const fetchStock = async () => {
      try {
        const response = await axios.get("http://localhost:8080/portfolio");
        setStock(response.data.stock);
        console.log(response.data.stock);
      } catch (error) {
        console.log("Error fetching stock data");
      }
    };

    const deleteStock = async(_id) =>{
         console.log("running",_id);
          let res = await fetch(`http://localhost:8080/portfolio/${_id}`,{
            method:"DELETE",
            headers:{'content-type':'application-json'}
          });     
    }
  
    return (
      <box style={{ color: 'white', justifyContent: 'center' }}>
        
        <h2 style={{marginTop:'20px'}}>Here is your Stocks</h2>

          <TableContainer>
            <Table variant='striped' colorScheme='#145b26ed'>
              <TableCaption>Here is All your Stock</TableCaption>
              <Thead>
                <Tr>
                <Th>Stock ID</Th>
                 <Th>Stock Name</Th>
                  <Th>Stock Price</Th>
                  <Th isNumeric>Stock Returns</Th>
                  <Th >Action</Th>
                </Tr>
              </Thead>
              <Tbody>
              {
                stock.map((curStock) =>{
                   const {_id, name, price, returns} = curStock;
                   console.log(curStock)

                   return(
                    <Tr>
                      <Td>{_id}</Td>
                    <Td>{name}</Td>
                    <Td>{price}</Td>
                    <Td>{returns}</Td>
                    <Td><button style={{background:'red',width:'60px'}} onClick={()=> deleteStock(_id)}>Sell</button></Td>
                  </Tr>
                       )

                })
              }
              </Tbody>
            </Table>
          </TableContainer>

      </box>
    );
  }
