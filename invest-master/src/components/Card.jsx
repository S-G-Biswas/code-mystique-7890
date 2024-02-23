
import React, { useState } from 'react';
import { Button, CardBody, CardFooter, Heading, SimpleGrid, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, FormControl, FormLabel, Input, Select, useToast } from '@chakra-ui/react';
import { Card, CardHeader } from '@chakra-ui/react';
const Cardstock = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [quantity, setQuantity] = useState({});
  const toast = useToast(); // Initialize useToast hook

  const handlePayment = (stock) => {
    setSelectedStock(stock);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedStock(null);
    setIsModalOpen(false);
    setCardNumber('');
    setPaymentMethod('');
    setIsFormValid(false);
  };

  const handleCardNumberChange = (event) => {
    const { value } = event.target;
    setCardNumber(value);
    setIsFormValid(value.length === 6 && paymentMethod !== '');
  };

  const handlePaymentMethodChange = (event) => {
    const { value } = event.target;
    setPaymentMethod(value);
    setIsFormValid(cardNumber.length === 6 && value !== '');
  };

  const increaseQuantity = (id) => {
    setQuantity(prevQuantity => ({
      ...prevQuantity,
      [id]: (prevQuantity[id] || 0) + 1
    }));
  };

  const decreaseQuantity = (id) => {
    if (quantity[id] > 1) {
      setQuantity(prevQuantity => ({
        ...prevQuantity,
        [id]: prevQuantity[id] - 1
      }));
    }
  };

  const handlePayAmount = () => {
    if (cardNumber.length === 6 && paymentMethod !== '') {
      // Your payment processing logic here
      console.log('Payment processed successfully');
  
      // Show a toast message when stocks are added to the portfolio
      toast({
        title: "Payment successful and Stocks added to portfolio",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
  
      setIsModalOpen(false);
    } else {
      // Show an error toast message if the conditions are not met
      toast({
        title: "Error",
        description: "Please enter a valid card number and select a payment method.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  

  return (
    <div style={{ backgroundColor:"black" , display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', padding: '10px', maxWidth: '100%' }}>
      <SimpleGrid spacing={5} templateColumns='repeat(auto-fill, minmax(250px, 2fr))' alignItems='center' justifyContent='center' maxWidth='100%'>
        {data.map((item, index) => (
          <Card key={index} height='100%'>
            <CardHeader>
              <Heading size='md'>STOCK</Heading>
            </CardHeader>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
              <img src="https://img.freepik.com/free-vector/stock-market-concept-design_1017-13713.jpg" alt="" />
              <Heading size='sm'>Stock: {item.title}</Heading>
              <Heading size='sm'>Price: {item.price}</Heading>
            </CardBody>
            <CardFooter gap="4" justifyContent='center'>
            <Button onClick={() => handlePayment(item)}>BUY NOW</Button>
              <Button onClick={() => increaseQuantity(item.id)}>+</Button>
              <Text margin="0">{quantity[item.id] || 0}</Text>
              <Button onClick={() => decreaseQuantity(item.id)}>-</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Payment Details</ModalHeader>
          <ModalBody>
            {selectedStock && (
              <>
                <Text>Stock: {selectedStock.title}</Text>
                <Text>Price: {selectedStock.price * (quantity[selectedStock.id] || 0)}</Text>
                <FormControl isRequired>
                  <FormLabel>Card Number</FormLabel>
                  <Input type="number" value={cardNumber} onChange={handleCardNumberChange} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Payment Method</FormLabel>
                  <Select placeholder='Select payment option' value={paymentMethod} onChange={handlePaymentMethodChange}>
                    <option value='Credit Card'>Credit Card</option>
                    <option value='Debit Card'>Debit Card</option>
                  </Select>
                </FormControl>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={handlePayAmount}  bg={"teal.500"} color={"white"} disabled={!isFormValid}>Submit</Button>
            <Button onClick={handleModalClose} ml={3}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Cardstock;
