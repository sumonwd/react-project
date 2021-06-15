import React from 'react';
import './Header.css'
import {NavLink} from 'react-router-dom'
import {
    Navbar, 
    NavbarBrand,
    Nav,
    NavItem,

} from 'reactstrap';

import {connect} from 'react-redux';


const mapStateToProps = state => {
    return {
        token: state.token,
    }
}
const Header = (props) => {
    let links = null;
    if (props.token === null) {
        links = (
                <Nav className="mr-md-5">
                   <NavItem>
                       <NavLink exact to="/login" className="NavLink">Login</NavLink>
                   </NavItem>
               </Nav>
        )
    } else {
        links = (
            <Nav className="mr-md-5">
               <NavItem>
                   <NavLink exact to="/" className="NavLink">Burger Builder</NavLink>
               </NavItem>
               <NavItem>
                   <NavLink exact to="/orders" className="NavLink">Orders</NavLink>
               </NavItem>
               <NavItem>
                   <NavLink exact to="/logout" className="NavLink">Logout</NavLink>
               </NavItem>
           </Nav>
    )
    }
    return (
        <div className="Navigation">
           <Navbar style={{ backgroundColor: '#d70f64',height: '70px' }}>
               <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">LOGO</NavbarBrand>
               {links}
           </Navbar>
        </div>
    )
}
export default connect(mapStateToProps) (Header);