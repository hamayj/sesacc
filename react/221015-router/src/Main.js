import { Link } from "react-router-dom";

function Main() {
    return (
        <div>
            <h1>Main state</h1>
            <Link to="/product/1">1번상품</Link>
            <br />
            <Link to="/product/2">2번상품</Link>
        </div>
    );
}

export default Main;