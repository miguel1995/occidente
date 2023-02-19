import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router";
import { Badge, Button } from "reactstrap";

const CarWidget = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Button color="info" onClick={()=>{navigate("/order")}}>
                Mi Carrito <BsCart4/> <Badge color="danger"  pill>14</Badge>
            </Button>
        </div>
    );
}

export default CarWidget;