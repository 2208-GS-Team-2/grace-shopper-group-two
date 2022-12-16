import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProducts } from "../../store/productSlice";

const CreateNewProduct = () => {
  //Custom hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //LOCAL STATES TO HOLD THE INPUT DATA
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
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
  return (
    <>
      <h1>Add A New Product</h1>
      {renderForm}
    </>
  );
};

export default CreateNewProduct;
