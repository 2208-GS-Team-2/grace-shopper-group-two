import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUpdatedProduct } from "../../store/productSlice";

const UpdateProduct = ({ singleProduct, setFormIsShown }) => {
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
        <input
          id="description"
          type="text"
          value={description}
          onChange={updateDescriptionHandler}
        />
      </div>
      <div
        style={{
          display: "flex",
          padding: "5px",
        }}
      >
        <input
          type="submit"
          style={{
            marginLeft: "5px",
            margin: "5px",
            padding: "5p",
            backgroundColor: "dodgerblue",
          }}
        />
        <button
          style={{ background: "lightgray", color: "black" }}
          //   onClick={cancelUpdatedForm}
        >
          Cancel
        </button>
      </div>
    </form>
  );
  return <>{renderForm}</>;
};

export default UpdateProduct;
