import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardImg, CardBody, CardImgOverlay, CardText, CardTitle, Col, Row, Cardody, CardSubtitle, Modal, ModalBody, ModalHeader  } from "reactstrap";
import { BsFillCreditCardFill, BsFillTrashFill } from "react-icons/bs";
import { setCleanProductsToBuy, removeProductToBuy } from "../../state";
import mediosPago from "../../assets/medios-pago.jpg";
import ConfirmBuy from "./confirmBuy";




const ShowOrder = () => {

    
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const products = useSelector((state)=>{    
        return state.productsToBuy;
    });

    const total = useSelector((state)=>{    
        return state.totalToBuy;
    });

    const count = useSelector((state)=>{    
        return state.countToBuy;
    });
    
    function cleanCar() {
        dispatch(setCleanProductsToBuy());
    }

    function removeItem(product){
        dispatch(removeProductToBuy({product:product}));
    }


    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {

        

    }, []);

    

    return (
        <div>
            <Row>
                <Col md={6}>
                    {
                        products.map((data, index) => {




                            return <div key={index}>
                                <Card style={{ marginBottom: 10 }}>
                                    <Row>
                                        <Col md={4}>
                                            <CardImg
                                                alt="Card image cap"
                                                src="https://picsum.photos/318/180"
                                                top
                                                width="100%"
                                            />
                                        </Col>
                                        <Col md={8}>
                                            <CardBody>
                                                <CardTitle tag="h3">
                                                    {data.name}
                                                </CardTitle>
                                                <CardSubtitle
                                                    className="mb-2 text-muted"
                                                    tag="h5"
                                                >
                                                    ${data.cost} x {data.cost} Unidades
                                                </CardSubtitle>
                                                
                                                <Button color="danger" onClick={()=>{removeItem(data)}}><BsFillTrashFill/></Button>

                                            </CardBody>
                                        </Col>
                                    </Row>
                                </Card>
                            </div>;


                        })
                    }
                </Col>
                <Col md={6}>
                    <br />
                    <div>
                        <h3>Tienes {count} productos en el carrito</h3>
                    </div>
                    <div>
                        <h1>Total a pagar: ${total}</h1>
                    </div>
                    <br />
                    <br />
                    <div>
                        <Button color="danger" onClick={cleanCar}>Limpiar Carrito <BsFillTrashFill /> </Button>

                        <Button color="warning" onClick={toggle}>Pagar <BsFillCreditCardFill /> </Button>
                    </div>
                    <br />
                    <img src={mediosPago}/>
                </Col>
            </Row>

            <Modal isOpen={modal} toggle={toggle} >
                    <ModalHeader toggle={toggle}></ModalHeader>
                    <ModalBody>
                        <ConfirmBuy toggle={toggle} total={total} save={cleanCar}/>
                    </ModalBody>
                </Modal>

        </div>
    );
}

export default ShowOrder;