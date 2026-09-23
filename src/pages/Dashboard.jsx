import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Dashboard() {
    let baseurl = "https://fakestoreapi.com/products";

    let [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const res = await fetch(baseurl); // json response
            let data = await res.json(); //
            // console.log(data);
            setProducts(data);
            // console.log(products);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <h1>Dashboard</h1>
            <div>
                <Row>
                    {products.length > 0
                        ? products.map(item => (
                              <Col>
                                  <Card style={{ width: "18rem", margin:"10px", padding:"10px" }}>
                                      <Card.Img
                                          variant="top"
                                          height={'350px'}
                                          src={item.image}
                                      />
                                      <Card.Body>
                                          <Card.Title>{item.title}</Card.Title>
                                          <Card.Text>
                                              {item.price}
                                          </Card.Text>
                                          <Link to={`/product/${item.id}`}>
                                          <Button variant="primary">
                                              Buy
                                          </Button>
                                          </Link>
                                      </Card.Body>
                                  </Card>
                              </Col>
                        ))
                        : "No Data"}
                </Row>
            </div>
        </>
    );
}

export default Dashboard;
