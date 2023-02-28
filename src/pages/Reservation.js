import Resources from '../Resources';
import PageWrapper from './PageWrapper/PageWrapper';
import PageContentContainer from './PageContentContainer';
import Reserve from '../components/Reserve/Reserve';

const Reservation = () => {
    return (
        <PageContentContainer>
            <Reserve />
        </PageContentContainer>
    );
}

export default PageWrapper(Reservation, Resources.greekSalad, 'Reserve Table');