import Resources from '../Resources';
import PageWrapper from './PageWrapper/PageWrapper';

const Order = () => {
    return (
        <h1>Order</h1>
    )
}

export default PageWrapper(Order, Resources.lemonCake, "Order");