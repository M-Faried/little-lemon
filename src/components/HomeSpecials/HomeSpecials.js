import Resources from '../../Resources';
import './HomeSpecials.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import MealCard from '../Cards/MealCard';


const HomeSpecials = () => {
    return (
        <div className="special-meals">

            <SectionHeader text="This Week's Specials!!!" />

            <div className="special-meals-container">
                <MealCard
                    name="Greek Salad"
                    price="$12.99"
                    image={Resources.greekSalad}
                    description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil."
                />
                <MealCard
                    name="Bruschetta"
                    price="$16.99"
                    image={Resources.bruchetta}
                    description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil."
                />
                <MealCard
                    name="Lemon Dessert"
                    price="$8.50"
                    image={Resources.lemonCake}
                    description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest."
                />
            </div>
        </div>
    );
}

export default HomeSpecials;