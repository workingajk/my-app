import { Row, Col } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Row className=" justify-between items-center p-3 bg-warning">
            <Col
                className="d-flex  align-items-center"
                style={{ color: "green", height: "", color: "white" }}
            >
                <Link
                    to="/"
                    className="text-white d-flex align-items-center justify-content-center"
                    style={{ textDecoration: "none" }}
                >
                    <h3 className="p-0 m-0">React</h3>
                </Link>
            </Col>
            <Col className="d-flex  justify-content-end" xs={4}>
                <Row className=" ">
                    <Col className="d-flex ">
                        <Link
                            to={{ pathname: "/", search: "?query=string" }}
                            className=" py-1 px-3 text-white rounded-md"
                        >
                            Home
                        </Link>
                    </Col>
                    <Col className="d-flex ">
                        <Link
                            to="/login"
                            className=" py-1 px-3 text-white rounded-md"
                        >
                            Login
                        </Link>
                    </Col>
                    <Col className="d-flex ">
                        <Link
                            to="/register"
                            className=" py-1 px-3 text-white rounded-md"
                            id="reg"
                        >
                            Register
                        </Link>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Header;
