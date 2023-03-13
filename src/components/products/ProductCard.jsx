import { Button, Tooltip, } from "@mui/material";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import React from "react";
import { Link } from "react-router-dom";
import "./productCardStyle.css"

const ProductCard = ({ product, user }) => {
  return (
    <div key={product.id} className="product-card">
      <Link key={product.id} to={`/products/${product.id}`}>
        <div className="link-item-products">
          <img className="productCardImg" src={product.img} alt="product-image" />
          <h3>{product.name}</h3>
          <h5>
            {`${(product.price / 100).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}`}
          </h5>
        </div>
      </Link>
      {user.isAdmin && (
        <div className="product-buttons">
          <Tooltip title="Edit Product">
            <Button className="edit-button">
              <EditTwoToneIcon fontSize={"large"} />
            </Button>
          </Tooltip>
          <Tooltip title="Delete Product">
            <Button className="delete-button">
              <DeleteForeverTwoToneIcon fontSize={"large"} />
            </Button>
          </Tooltip>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
