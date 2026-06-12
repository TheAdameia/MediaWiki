import { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
Collapse,
Nav,
NavLink,
NavItem,
Navbar,
NavbarBrand,
NavbarToggler,
} from "reactstrap";

export default function NavBar() {
const [open, setOpen] = useState(false);

const toggleNavbar = () => setOpen(!open);

return (
    <div>
    <Navbar color="light" light fixed="true" expand="lg">
        <NavbarBrand className="mr-auto" tag={RRNavLink} to="/">
        Media Wiki
        </NavbarBrand>
        
        <>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={open} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink tag={RRNavLink} to="/roster">
                        My Team
                    </NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </>
    </Navbar>
    </div>
);
}