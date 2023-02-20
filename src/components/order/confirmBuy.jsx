import { useNavigate } from "react-router";
import { Button } from "reactstrap";



const ConfirmBuy = (props) => {

    return (
        <div>
            <h1>Total a pagar: ${props.total}</h1>
            <Button
                onClick={() => {
                    props.save();
                    props.toggle()
                }}
                color="danger"
            >Finalizar Compra</Button>

        </div>
    );
}

export default ConfirmBuy;