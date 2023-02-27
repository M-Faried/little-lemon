import './PageWrapper.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const PageHeader = ({ imgSrc, text }) => {
    return (
        <header>
            <img src={imgSrc} alt="header" />
            <div className="header-text">
                <h1>{text}</h1>
            </div>
        </header>
    )
}

const PageWrapper = (Component, imgSrc, text) => {
    return () => (
        <div className='page-structure'>
            <Navbar />
            <div>
                {imgSrc && text && <PageHeader imgSrc={imgSrc} text={text} />}
                <main><Component /></main>
            </div>
            <Footer />
        </div>
    )
}

export default PageWrapper;