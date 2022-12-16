import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./productStyle.css";

const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        background: "lightgray",
      }}
    >
      <Card
        key={product.id}
        sx={{ maxWidth: 500 }}
        style={{
          margin: "50px",
          display: "flex",
          flexDirection: "row",
          border: "4mm ridge rgba(193, 188, 188, 0.1)",
          justifyContent: "center",
        }}
      >
        <Link key={product.id} to={`/products/${product.id}`}>
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
            <Typography>{`${(product.price / 100).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}`}</Typography>
          </CardContent>
        </Link>
      </Card>
    </div>
  );
};

export default ProductCard;
