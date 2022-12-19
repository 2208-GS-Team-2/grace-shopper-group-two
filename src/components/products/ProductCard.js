import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./productStyle.css";

const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className="product-card">
      <Link key={product.id} to={`/products/${product.id}`}>
        <div className="link-item-products">
          <div>
            <img src={product.img} alt="product-image" />
          </div>

          <div>
            {" "}
            <h3>{product.name}</h3>
          </div>
          <h5>
            {`${(product.price / 100).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}`}
          </h5>

          <div className="product-buttons">
            <Button className="edit-button">Edit</Button>
            <Button className="delete-button">Delete</Button>
          </div>
        </div>
      </Link>
      {/* <Card key={product.id} sx={{ maxWidth: 300 }} className="product-card">
        <Link
          className="link-item"
          key={product.id}
          to={`/products/${product.id}`}
        >
          <CardMedia
            key={product.id}
            component="img"
            height="140"
            image={product.img}
            alt="product-image"
          />
          <CardContent>
            <Typography
              style={{ color: "darkblue" }}
              gutterBottom
              variant="h4"
              component="div"
            >
              {product.name}
            </Typography>
            <Typography>
              {`${(product.price / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}`}
            </Typography>
          </CardContent>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </Link>
      </Card> */}
    </div>
  );
};

export default ProductCard;
