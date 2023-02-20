import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Badge, Button } from "reactstrap";

const CarWidget = () => {
    const navigate = useNavigate();
    const count = useSelector((state)=>{
        console.log(state.productsToBuy);
        return state.productsToBuy.length;
    });

    return (
        <div>
            <Button color="info" onClick={()=>{navigate("/order")}}>
                Mi Carrito <BsCart4/> <Badge color="danger"  pill>{count}</Badge>
            </Button>
        </div>
    );
}

export default CarWidget;