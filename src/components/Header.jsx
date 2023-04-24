import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useCheckout } from "../context/CheckoutContext";

function Header() {
  const {showItems}=useCheckout()
  const [count,setCount]=useState(0)

useEffect(()=>{
  setCount(showItems().length)
},[showItems])

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >SS Resale</Navbar.Brand>
          
          <Nav className="me-auto">
            
              <Link className="m-2" style={{ textDecoration: "none" }} to="/">
                Home
              </Link>
            
              <Link className="m-2" style={{ textDecoration: "none" }} to="/checkout">
                Checkout
              </Link>

              
            
          </Nav>
          <Navbar.Brand >No.of items bought :{count}</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
