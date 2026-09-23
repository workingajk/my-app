import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ProductCard({ products, sendData }) {
    console.log(products);

    return (
        <>
            <Row>
                {products.length > 0
                    ? products.map((item) => (
                          <Col key={item.id}>
                              <Card
                                  style={{
                                      width: "18rem",
                                      margin: "10px",
                                      padding: "10px",
                                  }}
                              >
                                  <Card.Img
                                      variant="top"
                                      height={"350px"}
                                      src={item.image}
                                  />
                                  <Card.Body>
                                      <Card.Title>{item.title}</Card.Title>
                                      <Card.Text>{item.price}</Card.Text>
                                      <Row>
                                          <Col>
                                              <Link to={`/product/${item.id}`}>
                                                  <Button variant="primary"
                                                      style={{width:"100%"}}
                                                  >
                                                      Buy
                                                  </Button>
                                              </Link>
                                          </Col>
                                          <Col>
                                              <Button
                                                  onClick={() =>
                                                      sendData(item.title)
                                                  }
                                                  style={{width:"100%"}}
                                              >
                                                  Name
                                              </Button>
                                          </Col>
                                      </Row>
                                  </Card.Body>
                              </Card>
                          </Col>
                      ))
                    : "No Data"}
            </Row>
        </>
    );
}

export default ProductCard;
