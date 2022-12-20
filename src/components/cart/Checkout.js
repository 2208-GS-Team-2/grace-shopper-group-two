import React from 'react';

const Checkout = ({ navigate }) => {
    return (
        <>
            <div id="address">
                <h1>
                    Billing Address
                </h1>
                <form id="addressOne">
                    <label>name <input type="text"/></label>
                    <label>Address Line 1: <input type="text"/></label>
                    <label>State <input type="text"/></label>
                    <label>Zipcode <input type="text"/></label>
                </form>
                <h1>
                    Credit Card/Debit Card Info
                </h1>
                <form id="addressTwo">
                <label>name <input type="text"/></label>
                    <label>Address Line 1: <input type="text"/></label>
                    <label>State <input type="text"/></label>
                    <label>Zipcode <input type="text"/></label>
                    <label>Card Number <input type="text"/></label>
                    <label>CVC <input type="text"/></label>
                    <label>Experation Date <input type="text"/></label>
                </form>
                <Link>Submit</Link>
                <Button
                onClick={(e) => {
                e.preventDefault();
                }}> Submit Order 
                </Button>
                <Button
                onClick={(e) => {
                e.preventDefault();
                navigate('/cart')
                }}> Back to Cart
                </Button>
            </div>
        </>
    )
}; 

export default Checkout;