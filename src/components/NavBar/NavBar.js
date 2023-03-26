import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { CartButton } from "../CartButton/CartButton"
import styles from "./NavBar.module.css"

export function NavBar() {
    return (
        <Navbar className={`${styles.navbar} bg-white shadow-sm mb-3`}>
            <Container>
                <Nav className="me-auto">
                    <NavLink className={`${styles.navItem}`} to="/" > Home </NavLink>
                    <NavLink className={`${styles.navItem}`} to="/About"  > About </NavLink>
                    <NavLink className={`${styles.navItem}`} to="/Products"  > Products </NavLink>
                </Nav>
                <Nav>
                    <CartButton />
                    {/* <NavLink className={`${styles.navItem}`} to="/Register" > Register </NavLink>
                    <NavLink className={`${styles.navItem}`} to="/Login"> Login </NavLink> */}
                </Nav>
            </Container>
        </Navbar>
    )
}