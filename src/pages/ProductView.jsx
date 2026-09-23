import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col,Button } from "react-bootstrap";

function ProductView() {
    let { id } = useParams();
    console.log(id);

    const [product, setProduct] = useState({});

    let baseurl = `https://fakestoreapi.com/products/${id}`;

    const getProduct = async () => {
        try {
            const res = await fetch(baseurl);
            const data = await res.json();
            setProduct(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);
    return (
        <>
            <div className="container ">
                <h1>{product.title}</h1>
                <Row>
                    <Col>
                        <img src={product.image} alt="" />
                    </Col>
                    <Col>
                    <h3>Description</h3>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                    <Button>Buy Now</Button>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default ProductView;
