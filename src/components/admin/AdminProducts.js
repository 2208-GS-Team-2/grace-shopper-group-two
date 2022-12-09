import React from "react";
import { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { getAllProducts }  from '../../api';



const AdminProducts = ({token}) => {

    const fetchProducts = async () => {
        try {
          const fetchedProducts = await axios.get('/api/products');
          console.log(fetchedProducts);
          dispatch(setProducts(fetchedProducts.data));
        } catch (err) {
          console.log(err);
        }
      };
    
      useEffect(() => {
        console.log(fetchProducts());
        fetchProducts();
      }, []);

    const [products, setProducts] = useState([]);

    async function getProductsHelper(){
        const result = await getAllProducts(token);
        if(result){
            setProducts(result);
        }
    }
    
    async function handleTargetSort(sortId){
        setTargetSort(sortId);
        setProducts(products.sort((a, b) => {return a[sortId]-b[sortId]}));
    }
    useEffect(() => {
        getProductsHelper();
    }, []);
    
    

    return (
        <Container>
            <Table striped hover >
                <thead>
                    <tr>
                        <th onClick={() => handleTargetSort('id')}>id</th>
                        <th onClick={() => handleTargetSort('name')}>Name</th>
                        <th onClick={() => handleTargetSort('description')}>Description</th>
                        <th onClick={() => handleTargetSort('price')}>Price</th>              
                    </tr>
                </thead>
                <tbody>
                    {
                       products ? products.map((product) => {
                            const { id, name, description, price } = product;

                            
                            return (
                                <tr key={id}>
                                    <th>{id}</th>
                                    <th>{name}</th>
                                    <th>{description}</th>
                                    <th>${price}</th>                                                        
                                </tr>
                            )
                        }) : <></>
                    }
                </tbody>
            </Table>
        </Container>
    );
}


export default AdminProducts;