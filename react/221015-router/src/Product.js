import {
    useParams
} from "react-router-dom";


function Product() {
    const { id } = useParams();
    return (
        <div>
            <h1> {id}번 Product</h1>
        </div>
    );
}

export default Product;