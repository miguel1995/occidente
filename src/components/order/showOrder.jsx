import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardImg, CardBody, CardImgOverlay, CardText, CardTitle, Col, Row, Cardody, CardSubtitle } from "reactstrap";
import { BsFillCreditCardFill, BsFillTrashFill } from "react-icons/bs";
import { setCleanProductsToBuy, removeProductToBuy } from "../../state";
import mediosPago from "../../assets/medios-pago.jpg";

const ShowOrder = () => {

    const [total, setTotal] = useState(0);
    const dispatch = useDispatch();
    const selectorData = useSelector((state) => {
        return state.productsToBuy;
    });
const [products, setProducts] = useState(selectorData);
    const count = useSelector((state) => {
        console.log(state.productsToBuy);
        return state.productsToBuy.length;
    });
    

    function cleanCar() {
        dispatch(setCleanProductsToBuy());
    }

    function removeItem(product){
        dispatch(removeProductToBuy({product:product}));
    }


    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {

        setProducts(selectorData);
        let tempTotal = 0;
        products.forEach((value) => {
            console.log(value.cost);
                tempTotal += parseInt(value.cost);
        });
        setTotal(tempTotal);

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

                        <Button color="warning">Pagar <BsFillCreditCardFill /> </Button>
                    </div>
                    <br />
                    <img src={mediosPago}/>
                </Col>
            </Row>
        </div>
    );
}

export default ShowOrder;