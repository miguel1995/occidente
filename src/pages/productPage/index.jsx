import { Container } from "reactstrap";
import NavBarComponent from "../../components/common/navBarComponent";
import ListProduct from "../../components/product/listProduct";

const ProductPage = () => {
    return(
        <div>
            <NavBarComponent/>

            <Container>
                <div style={{paddingTop:200}} >
                    <ListProduct/>
                </div>
            </Container>
        </div>
    );
}

export default ProductPage;