import { useState ,useEffect} from 'react';
import './estilos/estilos.css';

const Input =()=>
{



    const [nombre,definirNombre]=useState("ValorPrincipalVacío");
    useEffect(()=>
    {
        console.log("Cambio")
    },
    [nombre])


    return <div>
    <input 
    name="popo" placeholder="Inserta tú nombre" 
    onChange={(e)=>definirNombre(e.target.value)
    }/>{} </div>;
}

export  function Saludar()
{

    return<>
        <Input/>
        <button onClick={()=>{console.log("pop")}} >Eso</button>

    </>;
}

