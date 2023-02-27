import { Link } from 'react-router-dom';
import Resources from '../../Resources';
import './HomePanner.css';

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
                <Link className="panner-button" to="/reservations">Reserve Table</Link>
            </div>
            <div className='panner-image'>
                <img src={Resources.pannerImage} alt="panner" />
            </div>
        </header>
    );
}

export default HomePanner