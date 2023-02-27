import './TestimonialCard.css';
import Resources from "../../Resources";

const TestimonialCard = ({ name, description }) => {
    return (
        <div className="testimonial-card">
            <img src={Resources.starIcon} alt="icon" />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

export default TestimonialCard;