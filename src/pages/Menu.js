import Resources from '../Resources';
import PageWrapper from './PageWrapper/PageWrapper';

const Menu = () => {
    return (
        <div style={{ margin: '4rem 1.5rem' }}>
            <img
                src={Resources.menu}
                alt='menu'
                style={{ width: '100%' }}
            />
        </div>
    )
}

export default PageWrapper(Menu, Resources.oriental, "Menu");