import React from 'react';
import { useState } from 'react';
import { Container, NavDropdown, NavbarBrand, Nav, Navbar } from 'react-bootstrap';
import AdminProducts from './admin/AdminProducts';
import AdminUsers from './admin/AdminUsers';

const Admin = ({token}) => {
  const [targetComponent, setTargetComponent] = useState('Products');

  const handleSelectComponent = (eventKey, event) => {
    event.preventDefault();
    setTargetComponent(eventKey);
  };

  return (
    <Container>
      <Navbar>
        <Container>
          <NavbarBrand >Admin</NavbarBrand>
          <Nav className='text-light'>
            <NavDropdown
              value={targetComponent}
              onSelect={handleSelectComponent}
              title={<span>{targetComponent}</span>}
              id='basic-nav-dropdown'>
              <NavDropdown.Item eventKey='Products'>Products</NavDropdown.Item>
              <NavDropdown.Item eventKey='Users'>Users</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      {targetComponent === 'Products' && <AdminProducts token={token} />}
      {targetComponent === 'Users' && <AdminUsers token={token} />}
    </Container>
  );
};

export default Admin;