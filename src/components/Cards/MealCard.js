import { Link, useNavigate } from 'react-router-dom';
import './MealCard.css';
import Routes from '../../Routes';

const MealCard = ({ image, name, price, description }) => {

    const navigate = useNavigate();

    const onImageClick = () => {
        navigate(Routes.ORDER);
    }
    return (
        <div className="meal-card">
            <img src={image} alt="menu item" onClick={onImageClick} />
            <div className="meal-card-contents">
                <h1>{name}</h1>
                <h3>{price}</h3>
                <p>{description}</p>
                <Link className="goto-button" to={Routes.ORDER}>
                    Order for Delivery
                </Link>
            </div>
        </div>
    );
}

export default MealCard;