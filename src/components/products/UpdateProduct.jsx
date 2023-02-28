import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUpdatedProduct } from "../../store/productStuffSlice";

const UpdateProduct = ({ singleProduct, setFormIsShown, user, quantity }) => {
  //Custom Hooks:
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //States:
  const [name, setName] = useState(singleProduct.name);
  const [price, setPrice] = useState(singleProduct.price);
  const [description, setDescription] = useState(singleProduct.description);
  //Handler functions
  const updateNameHandler = (event) => {
    setName(event.target.value);
  };

  const updatePriceHandler = (event) => {
    setPrice(event.target.value);
  };

  const updateDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const handleSumbitForm = async (event) => {
    event.preventDefault();
    const updateProductInfo = { name, price, description };
    try {
      const response = await axios.put(
        `/api/products/${singleProduct.id}`,
        updateProductInfo
      );
    } catch (err) {
      console.log(`there is ${err} updating the data`);
    }
    dispatch(setUpdatedProduct(updateProductInfo));
    const allUsers = await axios.get("/api/users");
    setFormIsShown(false);
    navigate("/products");
  };

  const renderForm = (
    <form onSubmit={handleSumbitForm}>
      <div className="form-label">
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={updateNameHandler}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="text"
            value={price}
            onChange={updatePriceHandler}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            type="text"
            value={description}
            onChange={updateDescriptionHandler}
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
      </div>
      <div className="create-product-content">{renderForm}</div>
    </div>
  );
};

export default UpdateProduct;
