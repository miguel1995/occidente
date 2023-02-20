import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { setProductToBuy } from "../../state";

const AddProduct = (props) => {

    const dispatch = useDispatch();

    function addProductToCar(product){
        console.log(">> ADD");
        console.log(product);
        dispatch(setProductToBuy({
            product            
        }));
    }

    return(

        <div>
            <Button color="danger" onClick={()=>{addProductToCar(props.product)}}>
                    <BsCartPlus
                        size={30}
                    />
                </Button>
        </div>
    );
}

export default AddProduct;