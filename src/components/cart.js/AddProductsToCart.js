import React from "react";
import { useState, useEffect } from "react";
import { addProductToCart} from "../../api";
import { Container, Button, Form, Toast, Alert} from "react-bootstrap";
import { useNavigate, Link} from "react-router-dom";

const AddProductToCart = ({token, user, productId, getUserCart}) => {
    
    const [quantity, setQuantity] = useState(1);
    const [alertMessage, setAlertMessage] = useState('');
    const [toastMessage, setToastMessage] = useState('');
    const [toggleShowToast, setToggleShowToast] = useState(true);
    const [userCart, setUserCart] = useState([])
    const navigate = useNavigate();
    
    
    const {id} = user;

    function handleToggleToast(){
        setToggleShowToast(!toggleShowToast);
    }
   
    async function userCartHelper() {
       const cart = await getUserCart(token, id);
       console.log('cart is: ', cart)
       setUserCart(cart)
    }

    useEffect(() => {
        userCartHelper();
    }, [])


    
    async function handleAddProductToCart(){
        const productToAdd = {
            userId: id,
            productId: productId,
            quantity: quantity
        }

        if (userCart) {
        let productIdsInCart = userCart.map((product) => {
            const {id: data} = product;
            return data;
        }) 
        if(productIdsInCart.includes(Number(productId))){
            setAlertMessage('Products are already in your cart');
        } else if(productToAdd){
            await addProductToCart(token, productToAdd);
            const cart= await getUserCart(token, user.id)
            setUserCart(cart)
            setToastMessage('Product added to cart')
        } } else if(productToAdd){
            await addProductToCart(token, productToAdd);
            const cart= await getUserCart(token, user.id)
            setUserCart(cart)
            setToastMessage('Product added to cart')
        }
    }

    return (
        <Container >
            <Form onSubmit={(e) => {
                e.preventDefault();
                handleAddProductToCart();
            }}>
                <Form>Quantity</Form>
                <Form value={quantity} onChange={(e) => setQuantity(e.target.value)}></Form>
                <p>{quantity}</p>
                <Button type="submit">Add To Cart</Button>
                {
                    alertMessage.length ? <Alert className="alert alert-danger">{alertMessage}</Alert> : <></>
                }
                {
                    toastMessage.length ? 
                    <Toast show={toggleShowToast} onClose={handleToggleToast}>
                        <Header>
                            <strong>Cart</strong>
                        </Header>
                        <Body>Product added to Cart!</Body>
                        <Link to={'/cart'}>
                            <Button>View Cart</Button>
                        </Link>
                    </Toast> : <></>
                }
            </Form>
        </Container>

    )
    
}

export default AddProductToCart;