import Introduce from "../components/Introduce";
import BasicLayout from "../layouts/BasicLayout";
import { INTRODUCE } from "./data";

const WhoWeArePage = () => {
    return (
        <BasicLayout>
            {INTRODUCE.map((guide) => <Introduce {...guide} />)}
        </BasicLayout>

    );
}

export default WhoWeArePage;