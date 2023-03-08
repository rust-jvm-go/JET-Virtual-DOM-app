import { h } from "preact";
import ParentContainer1 from "../ParentContainer1";

const Content = () => {
    return (
        <div class="oj-web-applayout-max-width oj-web-applayout-content">
            <h1>Product Information</h1>
            <ParentContainer1 />
        </div>
    );
}

export default Content;
