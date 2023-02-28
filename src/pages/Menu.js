import Resources from '../Resources';
import PageWrapper from './PageWrapper/PageWrapper';
import PageContentContainer from './PageContentContainer';

const Menu = () => {
    return (
        <PageContentContainer>
            <img
                src={Resources.menu}
                alt='menu'
                style={{ width: '100%' }}
            />
        </PageContentContainer>
    )
}

export default PageWrapper(Menu, Resources.oriental, "Menu");