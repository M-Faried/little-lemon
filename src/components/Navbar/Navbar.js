import { Link } from "react-router-dom";
import './Navbar.css';
import Resources from '../../Resources';


const Navbar = () => {

    return (
        <nav>
            <div className='nav-logo'>
                <img
                    src={Resources.navLogo}
                    alt="logo"
                    className="nav-image"
                />
            </div>

            <Link className="styled-link" to='/'>Home</Link>
            <Link className="styled-link" to='/about'>About</Link>
            <Link className="styled-link" to='/reservations'>Reservations</Link>
            <Link className="styled-link" to='/order'>Order</Link>
            <Link className="styled-link" to='/login'>Login</Link>
        </nav>
    );
}

export default Navbar;