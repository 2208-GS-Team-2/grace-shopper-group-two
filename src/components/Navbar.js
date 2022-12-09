import { React } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = ({ logout, token, navigate }) => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>L.A.S.T Coffee Shop</Navbar.Brand>
          <Nav>
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/products')}>Products</Nav.Link>
            
            
              user.isAdmin && <Nav.Link onClick={() => navigate('/admin')}>Admin</Nav.Link> 
        

            {token ? (
              <Nav.Link
                onClick={() => {
                  navigate('/');
                  logout();
                }}>
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;