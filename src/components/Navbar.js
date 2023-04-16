import logo from '../img/Logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <img src={logo}></img>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
            </nav>
        </header>
    );
}

export default Navbar;