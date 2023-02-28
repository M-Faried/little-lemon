import Resources from '../Resources';
import PageWrapper from './PageWrapper/PageWrapper';
import PageContentContainer from './PageContentContainer';

const Order = () => {
    return (
        <PageContentContainer>
            <h1>Order</h1>
        </PageContentContainer>
    )
}

export default PageWrapper(Order, Resources.lemonCake, "Order");