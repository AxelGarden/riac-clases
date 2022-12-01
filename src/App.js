import React from 'react';
import './App.css';
import Busqueda from './Busqueda/Busqueda';
import Lista from './Lista/Lista';
import Contacto from './Contacto/Contacto';
import AgregarAmigo from './AgregarAmigo';
import ModalAmigo from './ModalAmigo';
import {ContactoContext, ContactoProvider} from './Context/ContactoProvider';

function App() 
{ 


  
  // let contactos=
  // [
  //     {
  //         nombre:"Axel",
  //         telefono:"32323",
  //         correo:"hola@gmail"
  //     },
  //     {
  //         nombre:"chino",
  //         telefono:"3232221231223",
  //         correo:"hoffffa@gmail"
  //     },
  //     {
  //         nombre:"fernando",
  //         telefono:"322233323",
  //         correo:"chinoffaa@gmail"
  //     },

  //     {
  //       nombre:"Landa",
  //       telefono:"3219919191323",
  //       correo:"clandaa@gmail"
  //   },

  // ]
  return(
<ContactoProvider>
  <ContactoContext.Consumer>
    {(
      {cantidadAmigos,
      contactosFiltro,
      borrarAmigo,modal})=>
      (
        <React.Fragment>
          <div className='contenedor'>
<h1 >Mi lista de contactos</h1>
<h3>Tengo {cantidadAmigos} amigos</h3>
</div>
<Busqueda />
<AgregarAmigo/>
                    <Lista> 
{ 
                contactosFiltro.map((contacto)=>
                        {
                        return(<Contacto 
                            nombre={contacto.nombre}
                            telefono={contacto.telefono}
                            correo={contacto.correo}
                            borrarAmigo={()=>borrarAmigo(contacto.telefono)}/>
                            )
                        })
                }
                  </Lista>
                  {contactosFiltro.length===0 && <h1>No tienes amigos :'v</h1>}
                  {modal && <ModalAmigo/>}
                  
        </React.Fragment>
      )}
  
</ContactoContext.Consumer>
</ContactoProvider>

);
}

export default App;


  /////////////////////////NOTAAAAAAAAAAAAAAAAAAAAS
  // let miDato=10;
  // let segundoDato=500;
  // let respuesta;
  // if(props.miDato>50)
  // {
  //       respuesta="numero grande";
  // }
  // else
  // {
  //   respuesta="numero pequeño";

  // }



// function suma(dato1,dato2){
//     return dato1+dato2;

//   }

///  puedes usar el return tambien como un arreglo ejemplo: return [<h1>hola</h1>,<h1>mundo</h1>]
    // el react.frament te permite mandar varios componentes sin necesidad de un div

  //   <React.Fragment>
  
  //  <h1>Hola mundo, :D</h1>
  //  </React.Fragment>
//<h1>{respuesta}</h1>
//props.childre[0] o sin array
//<h1>hola</h1>,
//<h1>{suma(miDato,segundoDato)}</h1>  // {miDato} es para cunado declaras una variable y la desea usar .
// Tambien puedes mandar a llamar una fundion que regrese algo
// tambien puedes ejecutar ecuaciones
