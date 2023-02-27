import { useRouteError } from "react-router-dom";
import PageWrapper from "./PageWrapper/PageWrapper";
import Resources from "../Resources";

const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" style={{ padding: '40px' }}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default PageWrapper(Error, Resources.errorImage, 'Error');