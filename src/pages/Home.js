import PageWrapper from './PageWrapper/PageWrapper';
import HomePanner from '../components/HomePanner/HomePanner';
import HomeSpecials from '../components/HomeSpecials/HomeSpecials';

const Home = () => {
    return (
        <>
            <HomePanner />
            <HomeSpecials />
        </>
    )
}

export default PageWrapper(Home);