import './PageWrapper.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const PageHeader = ({ imgSrc, title }) => {
    return (
        <header className='default-header'>
            <img src={imgSrc} alt="header" />
            <div className="header-text">
                <h1>{title}</h1>
            </div>
        </header>
    )
}

const PageWrapper = (Component, imgSrc, title) => {
    return () => (
        <div className='page-structure'>
            <Navbar />
            {imgSrc && title && <PageHeader imgSrc={imgSrc} title={title} />}
            <main><Component /></main>
            <Footer />
        </div>
    )
}

export default PageWrapper;