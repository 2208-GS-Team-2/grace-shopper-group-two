import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import { Button, CircularProgress, Tooltip } from "@mui/material";
import UpdateProduct from "./UpdateProduct";
import { setLoadingProduct, setSingleProduct, setDeleteProduct, } from "../../store/productStuffSlice";
import { setCart } from "../../store/cartSlices/cartSlice";
import "./singleProductStyle.css";

const SingleProduct = ({ quantity }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //!This will let you add to cart twice in a row.
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { singleProduct } = useSelector((state) => state.product);
  const [formIsShown, setFormIsShown] = useState(false);

  const fetchSingleProduct = async () => {
    try {
      dispatch(setLoadingProduct(true));
      const response = await axios.get(`/api/products/${id}`);

      dispatch(setSingleProduct(response.data));
      dispatch(setLoadingProduct(false));
    } catch (err) {
      dispatch(setLoadingProduct(false));
      next(err);
    }
  };

  //Delete a single product
  const deleteProductHandler = async (id) => {
    try {
      dispatch(setDeleteProduct(id));
      const { data, deleted } = await axios.delete(`/api/products/${id}`, {});
      navigate("/products");
    } catch (err) {
      console.log(err);
    }
  };

  // update a single product
  const handleAddToCart = async (productId) => {
    try {
      const cartId = cart[0].id;
      await axios.put(`/api/carts/${cartId}`, {
        productId,
      });
      const userCart = user.id;

      const newResponse = await axios.post("/api/carts/usercart", { userCart });
      dispatch(setCart(newResponse.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSingleProduct(id);
  }, []);

  if (!Object.keys(singleProduct).length || !user) {
    return (
      <div style={{ textAlign: "center", paddingTop: "100px" }}>
        <CircularProgress />
      </div>
    );
  }

  if (formIsShown) {
    return (
      <>
        <UpdateProduct
          user={user}
          quantity={quantity}
          singleProduct={singleProduct}
          setFormIsShown={setFormIsShown}
        />
      </>
    );
  }
  return (
    <div>
      <div className="single-product-content">
        <img
          src={`/${singleProduct.img}`}
          alt={`${singleProduct.name}`}
          style={{ width: "500px", height: "auto" }}
        />
        <h2>{singleProduct.name}</h2>
        <h2>{`${(singleProduct.price / 100).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}`}</h2>
        <Button
          className="addtocart"
          onClick={() => handleAddToCart(singleProduct.id)}
        >
          <div className="pretext"> add to cart</div>
        </Button>
        <h3>{singleProduct.description}</h3>

        {user.isAdmin && (
          <div className="single-product-buttons">
            <Tooltip title="Delete Product">
              <Button onClick={() => deleteProductHandler(singleProduct.id)}>
                <DeleteForeverTwoToneIcon
                  className="single-product-icon"
                  fontSize={"large"}
                />
              </Button>
            </Tooltip>
            <Tooltip title="Edit Product">
              <Button onClick={() => setFormIsShown(true)}>
                <EditTwoToneIcon
                  className="single-product-icon"
                  fontSize={"large"}
                />
              </Button>
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
