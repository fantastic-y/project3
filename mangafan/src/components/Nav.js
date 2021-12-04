import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";

export default function AppNavbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
            <Navbar sticky="top" expand="md" bg="dark" variant="dark">
                <NavbarBrand href="#home">MangaFan</NavbarBrand>
                <NavbarToggler onclick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#billboard">Billboard</NavLink>
                            <NavLink href="#news">News</NavLink>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nev caret>
                                    Help
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="#action/3.1">About</DropdownItem>
                                    <DropdownItem href="#action/3.2">Request</DropdownItem>
                                    <DropdownItem href="#action/3.3">Report</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )

}