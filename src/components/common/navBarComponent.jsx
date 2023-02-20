import { useState } from "react";
import { Button, Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink } from "reactstrap";
import CarWidget from "./carWidget";
import logo from '../../assets/logo-social.png'; // Tell webpack this JS file uses this image
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setLogout } from "../../state";
import { BsArrowBarLeft } from "react-icons/bs";


const NavBarComponent = (props) => {

    const userName = useSelector((state) => state.user.name);
    const dispatch = useDispatch();
    const navigate = useNavigate();



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
                <Button onClick={() => {
                    dispatch(setLogout());
                    navigate("/");
                }
                }>Cerrar Sesión <BsArrowBarLeft /></Button>
            </Navbar>
        </div>
    );
}

export default NavBarComponent;