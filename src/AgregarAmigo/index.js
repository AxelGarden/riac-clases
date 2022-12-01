import React from "react";
import {ContactoContext} from "./../Context/ContactoProvider";


function AgregarAmigo(params)
{
    let {setModal}=React.useContext(ContactoContext);
    const abreModal=()=>
    {
        console.log("entro");
        setModal(true);
    }
    return(
        <button className="agregarAmigobtn" onClick={abreModal}>+ Amigo</button>);

    

}

export default AgregarAmigo;