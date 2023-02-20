import { useNavigate } from "react-router";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, Row } from "reactstrap";



const ConfirmProduct = (props) => {

    const navigate = useNavigate();


    return (
        <div>
            <h5>Tu producto ha sido agregado en el carrito satisfactoriamente</h5>
            <Row>
                <Col>
                    <div>
                        <Card style={{ marginBottom: 10 }}>
                            <Row>
                                    <CardImg
                                        alt="Card image cap"
                                        src="https://picsum.photos/318/180"
                                        top
                                        width="100%"
                                    />
                                                                <CardBody>
                                        <CardTitle tag="h3">
                                            {props.product.name}
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h5"
                                        >
                                            Cantidad: 1
                                        </CardSubtitle>
                                     

                                    </CardBody>
                            </Row>
                        </Card>
                    </div>




                </Col>
                <Col>
                    <Button
                        onClick={props.toggle}
                        color="danger"
                    >Continuar Comprando</Button>
                    <br/>
                    <br/>
                    <Button
                        onClick={() => { navigate("/order"); }}
                        color="danger"
                    >Ir al carrito</Button>
                </Col>
            </Row>

        </div>
    );
}

export default ConfirmProduct