import React from "react";
import "./Contacto.css";
function Contacto(props)
{
    function eliminarAmigo()
    {
       
        props.borrarAmigo();
    }

    return[
    
        
            <div className="contactos">
                <h2>Nombre:{props.nombre}</h2> 
                <h3>Telefono:{props.telefono}</h3>
                <h3>Correo:{props.correo}</h3>
                <button onClick={eliminarAmigo}>Eliminar</button>
            </div>];
    


}

export default Contacto;