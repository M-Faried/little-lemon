import { Link } from 'react-router-dom';
import './HomePanner.css';
import Resources from '../../Resources';
import Routes from '../../Routes';

const HomePanner = () => {
    return (
        <header className='panner'>
            <div className="panner-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="subsection">
                    We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                    on traditional recipes served with a modern twist.
                </p>
                <div className='panner-links'>
                    <Link className="goto-button" to={Routes.RESERVE}>Reserve Table</Link>
                    <Link className="goto-button" to={Routes.MENU}>Check Menu</Link>
                </div>
            </div>
            <div className='panner-image'>
                <img src={Resources.pannerImage} alt="panner" />
            </div>
        </header>
    );
}

export default HomePanner