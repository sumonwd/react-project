import React from 'react';
import './Header.css'
import {NavLink} from 'react-router-dom'
import {
    Navbar, 
    NavbarBrand,
    Nav,
    NavItem,

} from 'reactstrap';

const Header = () => {
    return (
        <div className="Navigation">
           <Navbar style={{ backgroundColor: '#d70f64',height: '70px' }}>
               <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">LOGO</NavbarBrand>
               <Nav className="mr-md-5">
                   <NavItem>
                       <NavLink exact to="/" className="NavLink">Burger Builder</NavLink>
                       <NavLink exact to="/orders" className="NavLink">Orders</NavLink>
                   </NavItem>
               </Nav>
           </Navbar>
        </div>
    )
}
export default Header;