import Resources from "../Resources";
import PageWrapper from "./PageWrapper/PageWrapper";
import PageContentContainer from "./PageContentContainer";


const About = () => {
    return (
        <PageContentContainer>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nobis esse dolore, consequuntur officiis, dolorum quis architecto tenetur dignissimos cumque aliquam non! Ut, fuga nihil cum debitis earum est blanditiis amet beatae repellendus omnis asperiores accusamus natus voluptates nobis consequatur esse quis numquam vel rerum culpa iure? Dolores sit sapiente veniam soluta nobis deleniti expedita eius tenetur eveniet culpa architecto praesentium nihil illo, odit eaque! Laboriosam ut aspernatur veritatis odio error ducimus, eveniet ad. Culpa dolores porro sunt nihil nulla cumque saepe quas, illum aliquid sit amet quae ullam voluptatibus repellat sed dicta? Obcaecati libero corrupti ducimus cum eius. Impedit.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic sapiente sint laudantium necessitatibus repellat non molestias sunt esse libero dolorem, eligendi dolores aliquid saepe, maiores laborum, doloremque beatae praesentium aliquam!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic sapiente sint laudantium necessitatibus repellat non molestias sunt esse libero dolorem, eligendi dolores aliquid saepe, maiores laborum, doloremque beatae praesentium aliquam!
            </p>
        </PageContentContainer>
    );
}

export default PageWrapper(About, Resources.heroImage, 'About');