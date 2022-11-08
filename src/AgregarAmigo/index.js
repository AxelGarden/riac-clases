import React from "react";
import {ContactoContext} from "./../Context/ContactoProvider";


function AgregarAmigo(params)
{
    const abreModal=()=>
    {
        console.log("si jalo");
    }
    return(
        <React.Fragment>
        <button className="agregarAmigo" onClick={abreModal}>+ Amigo</button>
        
        </React.Fragment>
    );

    

}

export default AgregarAmigo;