import { Button, CardBody, Card, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { BsCartPlus } from 'react-icons/bs';
import AddProduct from "./addProduct";

const ShowItem = (props) => {
    return (
        <Card style={{marginBottom:10}}>
            <CardImg
                alt="Card image cap"
                src="https://picsum.photos/318/180"
                top
                width="100%"
            />
            <CardBody>
                <CardTitle tag="h5">
                    {props.item.name}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    ${props.item.cost}
                </CardSubtitle>
                <CardText>
                {props.item.description}
                </CardText>
                <AddProduct product={props.item}/>
            </CardBody>
        </Card>
    );
}

export default ShowItem;