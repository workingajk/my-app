import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function Login() {
    const nav = useNavigate();
    // let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    console.log( email, password);

    const handleLogin = () => {
        if ( email == "" || password == "") {
            alert("Please Fill the Form");
        } else {
            if (email in sessionStorage) {
                let user = JSON.parse(sessionStorage.getItem(email))
                console.log(user);
                if (user.password === password){
                    alert("Login Successfull");
                    nav('/dashboard')
                } else{
                    alert("Incorrect Password");
                }
                
            } else {
                alert("User does not Exist");
            }
        }
    };

    return (
        <>
            <Row className="p-5">
                <Col></Col>
                <Col>
                    <h1 className="text-center">Login</h1>
                    <Form>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Enter email"
                            />
                            {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        
                        <div className="text-center">
                            <Button
                                variant="primary"
                                // type="submit"
                                onClick={handleLogin}
                            >
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </>
    );
}

export default Login;
