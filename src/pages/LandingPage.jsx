import React from "react";
import reactImg from "../assets/reactImg.avif";
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const nav = useNavigate();
    // const nav = React.useNavigate()

    const changePage = () => {
        nav("/login");
    };

    return (
        <div>
            <section id="bg">
                <button
                    id="lbtn"
                    className="bg-warning rounded border-0 py-1 px-3"
                    onClick={changePage}
                >
                    Let's Go
                </button>
            </section>
            <section>
                <img
                    src="https://img.magnific.com/free-photo/atom-biotechnology-nuclear-medicine-with-scientist-rsquo-s-hands-digital-transformation-remix_53876-126746.jpg?semt=ais_hybrid&w=740&q=80"
                    alt=""
                />
                <img src={reactImg} alt="" />
            </section>
        </div>
    );
}

export default LandingPage;
