import './PageWrapper.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const PageWrapper = (Component) => {
    return () => (
        <div className='page-structure'>
            <Navbar />
            <main><Component /></main>
            <Footer />
        </div>
    )
}

export default PageWrapper;