import { Link } from "react-router-dom";
import './Navbar.css';
import Resources from '../../Resources';
import Routes from '../../Routes';


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

            <Link className="styled-link" to={Routes.HOME}>Home</Link>
            <Link className="styled-link" to={Routes.MENU}>Menu</Link>
            <Link className="styled-link" to={Routes.ORDER}>Order</Link>
            <Link className="styled-link" to={Routes.RESERVE}>Reservations</Link>
            <Link className="styled-link" to={Routes.ABOUT}>About</Link>
        </nav>
    );
}

export default Navbar;