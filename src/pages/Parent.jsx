import React, { useState } from "react";
import Child1 from "../components/Child1";
import Child2 from "../components/Child2";
import Counter from "../components/Counter";

function Parent() {
    const [name,setName]=useState(0)
    return (
        <div>
            Parent
            {/* passing data between children */}
            <Child1 n={name} setName={setName} /> {/* passing data to children through props */}
            <Child2 n={name}/>
            <Counter/>
        </div>
    );
}

export default Parent;
