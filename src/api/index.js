const createHeaders = token => {
    return token
      ? {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      : {
          'Content-Type': 'application/json',
        };
  };

  //Users

  export const getAllUsers = async token => {
    try {
      const headers = createHeaders(token);
      return await fetch('users', {
        headers,
      }).then(response => response.json());
    } catch (error) {
      console.error(error);
    }
  };

  //PRODUCTS
export const getAllProducts = async () => {
    try {
      const headers = createHeaders();
      return await fetch('products', {
        headers,
      }).then(response => response.json());
    } catch (error) {
      console.error(error);
    }
  };


  export const updateProduct = async (token, { id, ...product }) => {
    try {
      const headers = createHeaders(token);
      return await fetch(`products/${id}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(product),
      }).then(response => response.json());
    } catch (error) {
      console.error(error);
    }
  };

  
  export const deleteProduct = async (token, productId) => {
    try {
      const headers = createHeaders(token);
      return await fetch(`products/${productId}`, {
        method: 'DELETE',
        headers,
      }).then(response => response.json());
    } catch (error) {
      console.error(error);
    }
  };


  export const addProductToCart = async (token, product) => {
    try {
      const headers = createHeaders(token);
      return await fetch('users/cart', {
        method: 'POST',
        headers,
        body: JSON.stringify(product),
      }).then(response => response.json());
    } catch (error) {
      console.error(error);
    }
  };

  export const updateProductQuantityInCart = async (token, product) => {
    try {
      const headers = createHeaders(token);
      return await fetch('users/cart', {
        method: 'PATCH',
        headers,
        body: JSON.stringify(product)
      }).then(response => response.json());
    } catch (error) {
      console.error(error);
    }
  };

  export const deleteProductFromCart = async (token, product) => {
    try {
        const headers = createHeaders(token);
        return await fetch('users/cart', {
          method: 'DELETE',
          headers,
          body: JSON.stringify(product)
        }).then(response => response.json());
    
      } catch (error) {
        console.error(error);
      }
    };


    export const addOrCreateUsersOrderHistory = async (token, userId) => {
        try {
          const headers = createHeaders(token);
          return await fetch('order_history', {
            method: 'POST',
            headers,
            body: JSON.stringify({
              userId,
            }),
          }).then(response => response.json());
        } catch (error) {
          console.error(error);
        }
      };
    