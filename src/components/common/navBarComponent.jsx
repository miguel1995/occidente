import { useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink } from "reactstrap";
import CarWidget from "./carWidget";
import logo from '../../assets/logo-social.png'; // Tell webpack this JS file uses this image
import { useSelector } from "react-redux";


const NavBarComponent = (props) => {

    const userName = useSelector((state) => state.user.name);


    return (

        <div style={{
            backgroundColor: "#ffffff",
            position: "fixed",
            zIndex: 1,
            top: 0,
            right: 0,
            left: 0
        }}>
            <Navbar>
                <NavbarBrand href="/products">
                    <img src={logo} alt="Logo" width={200} />
                </NavbarBrand>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        {userName}
                    </NavItem>
                </Nav>
                <NavbarText>
                    <CarWidget />
                </NavbarText>
            </Navbar>
        </div>
    );
}

export default NavBarComponent;