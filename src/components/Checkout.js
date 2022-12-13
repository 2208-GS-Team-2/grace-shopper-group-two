import React from  'react';
import {useState, useEffect } from 'react';
import {addOrCreateUsersOrderHistory} from '../../api';
import { Container, Button, Form, FloatingLabel, Col, Row} from 'react-bootstrap';



const Checkout = ({user, getUserCart, token, navigate}) => {
  const [userCart, setUserCart] = useState([])

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [addressLineOne, setAddressLineOne] = useState('');
  const [addressLineTwo, setAddressLineTwo] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')

  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('')

  async function userCartHelper(){
    const cartToCheckout = await getUserCart(token, user.id);
    console.log('cartToCheckout: ', cartToCheckout)
    setUserCart(cartToCheckout)

  } 

  useEffect(()=>{
    userCartHelper();
  }, [])

  async function submitCartHandler() {
    await addOrCreateUsersOrderHistory(token, user.id)
    navigate(`/order-history/${user.id}`)
  }



  return  <Container>
    <Form.Label >Shipping and Payment</Form.Label>
         <Form onSubmit={event => {
        event.preventDefault();
        submitCartHandler();
      }}>
    <Row >
    <Form.Group >
      <FloatingLabel label='First Name'>
        <Form.Control
          type='text'
          placeholder='Enter first name here'
          required
          value={firstName}
          onChange={e => setFirstName(e.target.value)}></Form.Control>
      </FloatingLabel>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridLastName">
      <FloatingLabel label='Last Name'>
        <Form.Control
          type='text'
          placeholder='Enter last name here'
          required
          value={lastName}
          onChange={e => setLastName(e.target.value)}></Form.Control>
      </FloatingLabel>
      </Form.Group>
      </Row>
      <Form.Group controlId="formGridAddress1">
      <FloatingLabel label='Address Line One'>
        <Form.Control
          type='text'
          placeholder='Enter Street Name and Number'
          required
          value={addressLineOne}
          onChange={e => setAddressLineOne(e.target.value)}></Form.Control>
      </FloatingLabel>
      </Form.Group>
      <Form.Group controlId="formGridAddress2">
      <FloatingLabel label='Address Line Two'>
        <Form.Control
          type='text'
          placeholder='Enter Apt/Unit Number if Applicable'
          value={addressLineTwo}
          onChange={e => setAddressLineTwo(e.target.value)}></Form.Control>
      </FloatingLabel>
      </Form.Group>
      <Row>
      <Form.Group as={Col} controlId="formGridCity">
      <FloatingLabel label='City'>
        <Form.Control
          type='text'
          placeholder='Enter City Here'
          required
          value={city}
          onChange={e => setCity(e.target.value)}></Form.Control>
      </FloatingLabel>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
      <FloatingLabel label='State'>
        <Form.Control
          type='text'
          placeholder='Enter State Here'
          required
          value={state}
          onChange={e => setState(e.target.value)}></Form.Control>
      </FloatingLabel>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridZip">
      <FloatingLabel label='ZipCode'>
        <Form.Control
          type='text'
          placeholder='Enter Zip Code Here'
          required
          value={zipCode}
          onChange={e => setZipCode(e.target.value)}></Form.Control>
      </FloatingLabel>
      </Form.Group>
      </Row>
  
    <Form.Group controlId="formGridCreditCartNumber">
      <FloatingLabel label='Credit Card Number'>
        <Form.Control
          type='text'
          placeholder='Enter Credit Card Number Here'
          required
          value={cardNumber}
          onChange={e => setCardNumber(e.target.value)}></Form.Control>
      </FloatingLabel>
      </Form.Group>
      <Row>
      <Form.Group as={Col} controlId="formGridExpiration">
      <FloatingLabel label='Expiration'>
        <Form.Control
          type='text'
          placeholder='Enter Card Expiration Here'
          required
          value={expiration}
          onChange={e => setExpiration(e.target.value)}></Form.Control>
      </FloatingLabel>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridCVV">
      <FloatingLabel label='CVV'>
        <Form.Control
          type='text'
          placeholder='Enter CVV Here'
          required
          value={cvv}
          onChange={e => setCvv(e.target.value)}></Form.Control>
      </FloatingLabel>
      </Form.Group>
      </Row>
      <div>
      <Button type='submit'>
        Submit Payment
      </Button>
      </div>
    </Form>
    </Container>




}




export default Checkout;