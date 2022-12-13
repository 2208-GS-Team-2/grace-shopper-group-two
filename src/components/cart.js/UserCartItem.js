import React, {useState, useEffect} from 'react';
import {deleteProductFromCart, updateProductQuantityInCart} from '../../api'
import { Link, Navigate } from 'react-router-dom';
import { Card, Button, Navbar, NavDropdown, NavbarBrand, Nav, Toast} from 'react-bootstrap';
  

const UserCartItem = ({item, user, token, setUserCart, getUserCart, itemRemoved, setItemRemoved, userCart, cartEmpty, setCartEmpty}) => {
  const [itemView, setItemView] = useState({})
  const [toastMessage, setToastMessage] = useState('');
  const [toggleShowToast, setToggleShowToast] = useState(false);
  

  const {id, orderedAmount, name, description, price } = itemView
  
  const [newQuantity, setNewQuantity] = useState(orderedAmount)

  useEffect(() => {
    setItemView(item)
  }, [item])


  useEffect(() => {
    itemViewHelper()

  }, [])

async function itemViewHelper () {
  const cart = await getUserCart(token, user.id)
  cart.map(item => {
    if (item.id === id) {
      setItemView(item)
    }
  })
}

  async function handleSelectQuantity(eventKey, event) {
        event.preventDefault();
        handleUpdateQuantity(parseInt(eventKey));
    };

  function handleToggleToast(){
      setToggleShowToast(false);
  };

  async function updateQuantityCartHelper () {
    const cart = await getUserCart(token, user.id);
    cart.map(item => {
      if (item.id === id) {
      setItemView(item)
      }
    })
    setUserCart(cart)
  }

  async function removeItemCartHelper () {
    const cart = await getUserCart(token, user.id);
    if (cart) {
  setUserCart(cart)
  } else {
      setUserCart([])
      setCartEmpty(true)
  }
  }

  async function handleRemoveItem () {
    setToggleShowToast(true)
    setItemRemoved(true)
    setToastMessage('Product Removed From Cart')
    await deleteProductFromCart(token, {userId: user.id, productId: id});
    removeItemCartHelper();
  };

  async function handleUpdateQuantity (num) {
    setNewQuantity(num)
    await updateProductQuantityInCart(token, {userId: user.id, productId: id, quantity: num});
    setToggleShowToast(true)
    setToastMessage('Product Quantity Updated')
    updateQuantityCartHelper();
  };



       return ( 
       <Card  key={id}>
           <Card.Body> 
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>${price}</Card.Text>
            <div >
            <NavDropdown value={newQuantity} onSelect={handleSelectQuantity} title={<span>Quantity: {orderedAmount}</span>}>
                <NavDropdown.Item eventKey='current'>New Quantity</NavDropdown.Item>
                <NavDropdown.Divider></NavDropdown.Divider>
                <NavDropdown.Item eventKey='1'>1</NavDropdown.Item>
                <NavDropdown.Item eventKey='2'>2</NavDropdown.Item>
                <NavDropdown.Item eventKey='3'>3</NavDropdown.Item>
                <NavDropdown.Item eventKey='4'>4</NavDropdown.Item>
                <NavDropdown.Item eventKey='5'>5</NavDropdown.Item>
                <NavDropdown.Item eventKey='6'>6</NavDropdown.Item>
                <NavDropdown.Item eventKey='7'>7</NavDropdown.Item>
                <NavDropdown.Item eventKey='8'>8</NavDropdown.Item>
                <NavDropdown.Item eventKey='9'>9</NavDropdown.Item>
                <NavDropdown.Item eventKey='10'>10</NavDropdown.Item>
            </NavDropdown>
               {
                    toastMessage.length ? 
                    <Toast show={toggleShowToast} onClose={handleToggleToast}>
                        <Toast.Header>
                            <strong>Cart</strong>
                        </Toast.Header>
                        <Toast.Body>{toastMessage}</Toast.Body>
                    </Toast> : <></>
                }
            </div>
            <div>
              <Button onClick={async (event) => { handleRemoveItem()}
                    }>Remove Item </Button>
            </div>
            <Link to={`/products/${id}`}>
                <Button>View Product Details</Button>
             </Link>
          </Card.Body>
           
        </Card>
    ); 
}

export default UserCartItem;