import { NavDropdown } from 'react-bootstrap';

export default function Dropwdown() {
    return (
        <NavDropdown
            title={
                <span className="text-primary my-auto"></span>
            }
            id="nav-dropdown">
            <NavDropdown.Item>Sign In</NavDropdown.Item>
            <NavDropdown.Item>Sign Up</NavDropdown.Item>
        </NavDropdown>
    );
}

