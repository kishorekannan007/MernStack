import React, { useState,useEffect } from 'react';
export default function Test() {
    const[count,setcount] = useState(0);
    const[name2,setName2] = useState(0);
    useEffect(() => {
       if(count==10){
        setcount(0);
       }
       console.log("rendering...");
    },[count])
    return (
        <div>
            <h1>My count is {count}</h1>
            <button onClick={() => setcount(count + 1)}>Change the name</button>
            <h1>My name2 is {name2}</h1>
            <button onClick={() => setName2(name2 + 1)}>Change the name2</button>
        </div>
    );
}