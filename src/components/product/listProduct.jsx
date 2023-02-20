import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CardGroup, Col, Row } from "reactstrap";
import NavBarComponent from "../common/navBarComponent";
import ShowItem from "./showItem";


const ListProduct = (props) => {


    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const apiUrl = "https://cj897jxtlg.execute-api.us-east-1.amazonaws.com";

    //Load Product List from API Backend
    const loadProducts = async () => {
        const response = await fetch(`${apiUrl}/products`, {
            method: "GET",
            //headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setProducts(data);
        
    };

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div>

            <Row>
                {
                    products.map((data, index) => {
                        return (
                            <Col key={index} md={4}>
                                <ShowItem   item={data}/>                        
                            </Col>
                        );
                    })
                }
            </Row>

        </div>
    );
}

export default ListProduct;