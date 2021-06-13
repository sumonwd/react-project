import React from 'react';
import './Header.css'
import {
    Navbar, 
    NavbarBrand,
    Nav,
    NavItem,
    NavLink

} from 'reactstrap';

const Header = () => {
    return (
        <div className="Navigation">
           <Navbar style={{ backgroundColor: '#d70f64',height: '70px' }}>
               <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">LOGO</NavbarBrand>
               <Nav className="mr-md-5">
                   <NavItem>
                       <NavLink href="#" className="NavLink">Link</NavLink>
                   </NavItem>
               </Nav>
           </Navbar>
        </div>
    )
}
export default Header;