import PageWrapper from './PageWrapper/PageWrapper';
import HomePanner from '../components/HomePanner/HomePanner';
import HomeSpecials from '../components/HomeSpecials/HomeSpecials';
import HomeTestimonials from '../components/HomeTestimonials/Testimonials';

const Home = () => {
    return (
        <>
            <HomePanner />
            <HomeSpecials />
            <HomeTestimonials />
        </>
    )
}

export default PageWrapper(Home);