import React from "react";
import { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { getAllUsers } from '../../api';



const AdminUsers = ({token}) => {

    const [users, setUsers] = useState([]);

    async function getUsersHelper(){
        const result = await getAllUsers(token);
        if(result){
            setUsers(result);
        }
    }

    async function handleTargetSort(sortId){
        setTargetSort(sortId);
        setProducts(products.sort((a, b) => {return a[sortId]-b[sortId]}));
    }


    useEffect(() => {
        getUsersHelper();
    }, []);
    
    

    return (
        <Container>
            <Table striped hover >
                <thead>
                    <tr>
                        <th onClick={() => handleTargetSort('id')}>id</th>
                        <th onClick={() => handleTargetSort('username')}>Username</th>
                        <th onClick={() => handleTargetSort('email')}>Email</th>
                        <th onClick={() => handleTargetSort('firstName')}>First Name</th>
                        <th onClick={() => handleTargetSort('lastName')}>Last Name</th>
                        <th onClick={() => handleTargetSort('isAdmin')}>isAdmin?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       users ? users.map((user) => {
                            const {id, email, username, firstName, lastName, isAdmin } = user;
                            return (
                                <tr key={id}>
                                    <th>{id}</th>
                                    <th>{username}</th>
                                    <th>{email}</th>
                                    <th>{firstName}</th>
                                    <th>{lastName}</th>
                                    <th>{isAdmin.toString()}</th>                                                                       
                                </tr>
                            )
                        }) : <></>
                    }
                </tbody>
            </Table>
        </Container>
    );
}

export default AdminUsers