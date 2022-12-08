import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './productStyle.css';

const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        background: 'lightgray',
      }}
    >
      <Card
      key={product.id}
      sx={{ maxWidth: 500 }}
      style={{
        margin: '50px',
        display: 'flex',
        flexDirection: 'row',
        border: '4mm ridge rgba(193, 188, 188, 0.1)',
        justifyContent: 'center',
      }}
      >
        <Link key={product.id} to={`/products/${product.id}`}>
          <CardMedia
            component="img"
            height="140"
            image={product.img}
            alt="product-image"
            />
          <CardContent>
            <Typography
              style={{ color: 'darkblue' }}
              gutterBottom
              variant="h4"
              component="div"
              >
              {product.name}
            </Typography>
            <Typography>{'$' + (product.price/100)}</Typography>
          </CardContent>
          <CardContent>

              {/* <Button
                style={{
                  color: 'dodgerblue',
                  margin: '10px',
                  width: '100%',
                }}
                onClick={''}
                >
                Click for more Info
              </Button> */}

          </CardContent>
        </Link>
      </Card>

    </div>
  );
};

export default ProductCard;
