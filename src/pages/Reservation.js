import PageWrapper from './PageWrapper/PageWrapper';
import Resources from '../Resources';

const Reservation = () => {
    return (
        <h1>Reservation</h1>
    )
}

export default PageWrapper(Reservation, Resources.greekSalad, 'Reserve Table');