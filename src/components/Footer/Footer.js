import { Link } from "react-router-dom";
import Resources from '../../Resources';
import Routes from "../../Routes";
import './Footer.css';

const FooterList = ({ title, items }) => {
    return (
        <div>
            <h1 className="footer-list-header">{title}</h1>
            <ul className="footer-list">
                {items}
            </ul>
        </div>
    )
}

const Footer = () => {
    return (
        <footer>

            <div className='footer-logo'>
                <img
                    src={Resources.footerLogo}
                    alt="logo"
                />
            </div>

            <FooterList
                title='Navigation'
                items={[
                    <Link key='home' to={Routes.HOME}>Home</Link>,
                    <Link key='menu' to={Routes.MENU}>Menu</Link>,
                    <Link key='order' to={Routes.ORDER}>Order</Link>,
                    <Link key='reservations' to={Routes.RESERVE}>Reservations</Link>,
                    <Link key='about' to={Routes.ABOUT}>About</Link>,
                ]}
            />

            <FooterList
                title='Contacts'
                items={[
                    <li key='adress1'>2395 Maldove Way,</li>,
                    <li key='address2'>Chicago Illinois</li>,
                    <li key='phone'>(629)-243-6827</li>,
                    <a
                        key='email'
                        href="mailto: support@littlelemon.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        support@littlelemon.com
                    </a>
                ]}
            />

            <FooterList
                title='Social Media'
                items={[
                    <a key='facebook' href="#">Facebook</a>,
                    <a key='twitter' href="#">Twitter</a>,
                    <a key='instagram' href="#">Instagram</a>
                ]}
            />

        </footer>
    );
}

export default Footer;
