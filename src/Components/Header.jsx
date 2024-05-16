import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



function Header() {

  const wishlist=useSelector((state=>state.whishlistReducer))
  const cart=useSelector((state=>state.CartReducer))
  return (
    <>

      <Navbar expand="lg"  className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
      <Container>
        <Navbar.Brand > <Link to={'/'} className="fw-bold " style={{color:"black",textDecoration:"none"}}>

            <i class="fa-solid fa-truck-fast p-1"></i>E-cart
            </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><Link to={'/wishlist'} className="fw-bold " style={{color:"black",textDecoration:"none"}}>

            <i class="fa-solid fa-heart p-1"></i>
WishList <Badge bg="primary">{wishlist.length}</Badge> </Link></Nav.Link>
            <Nav.Link >
            <Link to={'/cart'} className="fw-bold " style={{color:"black",textDecoration:"none"}}>
            <i class="fa-solid fa-cart-shopping p-1"></i>
Cart <Badge bg="primary">{cart.length}</Badge> </Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Header