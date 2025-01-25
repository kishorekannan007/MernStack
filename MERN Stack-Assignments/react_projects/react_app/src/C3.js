import { useState } from "react";
import C4 from "./C4";
export default function C3(){
    const items =[1,232,4,34]
    return(
        <>
        <ul>
            {
                items.map((item,i)=> (<li key={i}>{item}</li>))
            }
            </ul>
            </>
    );
}