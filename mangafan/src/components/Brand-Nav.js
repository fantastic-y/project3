import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BrandSignin() {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const login = false;
    // const [login, setLogin] = useState(false); //set up login

    return(
        <div>
        <img src="./img/mangafanlogo.png" tag={Link} to="/" />
        {!login &&
            <Button>
                <Link
                    to="#"
                    className="login-button"
                >Log In</Link>
            </Button>
        }
        {login &&
            <Navbar sticky="top" expand="md" bg="dark" variant="dark">
                <NavbarToggler onClick={toggle} />
                <Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                username
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="#action/3.1">Profile</DropdownItem>
                                <DropdownItem href="#action/3.2">Bookshelf</DropdownItem>
                                <DropdownItem href="#action/3.3">Blogs</DropdownItem>
                                <DropdownItem href="#action/3.4"
                                //onClick={handleClickUserLogOut}
                                >Log Out</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        }
        </div>
    )
}
