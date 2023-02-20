import { Container } from "reactstrap";
import NavBarComponent from "../../components/common/navBarComponent";
import ShowOrder from "../../components/order/showOrder";

const OrderPage = () => {

    return(
        <div>
<NavBarComponent/>

           <Container style={{ backgroundColor: "#FFFFFFE6" }}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
              <ShowOrder/>
            </Container>
        </div>
    );
}

export default OrderPage;