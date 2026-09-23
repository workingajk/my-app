import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

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

    const handleData=(data)=>{ {/* passing data to parents through callbacks*/}
        console.log(data);
        alert(data)
        
    }

    return (
        <>
            <h1>Dashboard</h1>
            <div>
                <ProductCard products={products} sendData={handleData}/>
            </div>
        </>
    );
}

export default Dashboard;
