import { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { setProductToBuy } from "../../state";
import ConfirmProduct from "./confirmProduct";

const AddProduct = (props) => {

    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    function addProductToCar(product){
        dispatch(setProductToBuy({
            product            
        }));
    }

    return(

        <div>
            <Button color="danger" onClick={()=>{
                addProductToCar(props.product);
                toggle();
                }}>
                    <BsCartPlus
                        size={30}
                    />
                </Button>

                <div>
                <Modal isOpen={modal} toggle={toggle} >
                    <ModalHeader toggle={toggle}></ModalHeader>
                    <ModalBody>
                        <ConfirmProduct toggle={toggle} product={props.product}/>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    );
}

export default AddProduct;