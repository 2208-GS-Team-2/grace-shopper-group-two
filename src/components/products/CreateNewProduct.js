import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProducts } from "../../store/productSlice";
import Navbar from "../mainPage/Navbar";
import "./productsStyle.css";
import { Button } from "@mui/material";

const CreateNewProduct = ({ user, quantity }) => {
  //Custom hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //LOCAL STATES TO HOLD THE INPUT DATA
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  //Handler functions
  const newNameHandler = (event) => {
    setName(event.target.value);
  };
  const newPriceHandler = (event) => {
    setPrice(event.target.value);
  };
  const setImgHandler = (event) => {
    setImg(event.target.value);
  };
  const newDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const handleSumbitForm = async (event) => {
    event.preventDefault();
    const newProduct = { name, price, img, description };
    try {
      const response = await axios.post(`/api/products`, newProduct);
      const allProducts = await axios.get("/api/products");
      dispatch(setProducts(allProducts));
    } catch (err) {
      console.log(`there is ${err} updating the data`);
    }
    navigate("/");
  };

  const renderForm = (
    <form onSubmit={handleSumbitForm}>
      <div className="form-label">
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" value={name} onChange={newNameHandler} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="text"
            value={price}
            onChange={newPriceHandler}
          />
        </div>
        <div>
          <label htmlFor="img">Image</label>
          <input id="img" type="text" value={img} onChange={setImgHandler} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={newDescriptionHandler}
          />
        </div>
      </div>
      <div className="cancel-submit-button">
        <input className="submit-button" type="submit" />
        <button className="create-product-cancel-button">Cancel</button>
      </div>
    </form>
  );
  return (
    <div className="container">
      <div className="header-content">
        <Navbar user={user} quantity={quantity} />
      </div>
      <div className="create-product-content">
        <h3 className="add-product-title">Add A New Product</h3>
        {renderForm}
      </div>
    </div>
  );
};

export default CreateNewProduct;
