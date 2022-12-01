import React from "react";
import './../ModalAmigo/ModalAmigo.css';
import {ContactoContext} from "./../Context/ContactoProvider";

function ModalAmigo()
{
    let {setModal,agregarAmigo} = React.useContext(ContactoContext);
    let [amigui,setAmigo] = React.useState({
        nombre:"", correo:"",telefono:""
    });
    const modalCancelar=(event)=>
    {
        event.preventDefault();
        setModal(false);
    }
    const modalGuardar=(event)=>
    {
        event.preventDefault();  
        agregarAmigo(amigui);
        setModal(false);
    }
const onChangeNombre=(event)=>
{
    // console.log(event.target.value);
    let amiguitemporal=amigui;
    amiguitemporal.nombre=event.target.value;
    setAmigo(amiguitemporal);   

}

const onChangeTelefono=(event)=>
{
    // console.log(event.target.value);
    let amiguitemporal=amigui;
    amiguitemporal.telefono=event.target.value;
    setAmigo(amiguitemporal);   
}
const onChangeCorreo=(event)=>
{
    // console.log(event.target.value);
    let amiguitemporal=amigui;
    amiguitemporal.correo=event.target.value;
    setAmigo(amiguitemporal);   
}
    /////////////////////////////////////
    return(
        <div className="modal">
        <h1 className="modal_header">Modal Amigo</h1>
        <form className="modal_formulario">
            <input typeof="text" placeholder="Nombre" onChange={onChangeNombre} className='modal_input_text'/><br/>
            <input typeof="text" placeholder="Email"  onChange={onChangeCorreo} className='modal_input_text' /><br/>
            <input typeof="text" placeholder="Teléfono" onChange={onChangeTelefono}  className='modal_input_text'/><br/>
            <button typeof="submit" className="btn_modal" onClick={modalGuardar} >Guardar</button><br/>
            <button className="btn_cancelar_modal" onClick={modalCancelar}>Cancelar</button>
        </form>
        </div>


    );
}

export default ModalAmigo;