import { BsCartPlus } from "react-icons/bs";
import { Button } from "reactstrap";

const AddProduct = () => {
    return(
        <div>
            <Button color="danger">
                    <BsCartPlus
                        size={30}
                    />
                </Button>
        </div>
    );
}

export default AddProduct;