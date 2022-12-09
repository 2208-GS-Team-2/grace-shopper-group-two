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

/* Users */
  export const getAllUsers = async token => {
    try {
      const headers = createHeaders(token);
      return await fetch("users", {
        headers,
      }).then(response => response.json());
    } catch (error) {
      console.error(error);
    }
  };

/* Products */
  export const getAllProducts = async () => {
    try {
      const headers = createHeaders();
      return await fetch("products", {
        headers,
      }).then(response => response.json());
    } catch (error) {
      console.error(error);
    }
  };