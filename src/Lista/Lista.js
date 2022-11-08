import React from "react";
function Lista(props)
{



    return (

        <React.Fragment>
            <div className="contenedordeamigos">
            {props.children}   
            </div>      
        </React.Fragment>
    );
}

export default Lista;