import { Link } from 'react-router-dom'
import { Nav, NavItem, NavSection } from './index.js'

export const AppNav = () => {
    return (
        <Nav>
            <NavSection>
                <NavItem>
                    <Link to='/' className="nav-link">Home</Link>
                </NavItem>
                <NavItem>
                    <Link to="/form" className="nav-link">Form</Link>
                </NavItem>
            </NavSection>
            <NavSection className="reverse-nav-section">
                <NavItem>
                    <Link to="/og" className="nav-link">Original Demo</Link>
                </NavItem>
                <NavItem>
                    <Link to="/products" className="nav-link">Products</Link>
                </NavItem>
                <NavItem>
                    <Link to="/warehouse" className="nav-link">Warehouses</Link>
                </NavItem>
                <NavItem>
                    <Link to="/remote" className="nav-link">Remote Warehouses</Link>
                </NavItem>
            </NavSection>
        </Nav>
    )
}