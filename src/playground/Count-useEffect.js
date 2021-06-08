import React, {useState, useEffect} from "react";
const Count = ({count=0})=>{
  //en class-based components el state siempre era un objeto, aca un pedazo de state puede ser cualquier cosa
  // React ahora prefiere que llames a useState como atributos del state tengas
  // useState devuelve un array. 1er arg: el valor actual del state que va ir cambiando, 2do arg: funcion que va a llamarse para actualizar el state
  
  const [countState, setCount] = useState(count); //aca destructuro a un array en vez de a un objeto, pero es analogo, mando los nombres que quiero
  const [text, setText] = useState("");

  //este efecto corre si se modifica text (o sea ese pedazo de state), pero el efecto no usa text
  //me gustaria que useEffect no corra al pedo. Para eso uso el 2do arg de useEffect, un array en el que
  //listo los pedazos de state que quiero rastrear/seguir (es como un arg para event listener) 

  useEffect(()=>{
    console.log("useEffect ran because of count state changes.");
    document.title = countState;
  },[countState]);

  //al 2do arg de useEffect se le llama dependencies. Si tiene valor, le digo que state seguir; si no tiene valor
  //corre ante cualquier cambio de state. Si le paso un array vacio, o sea no tiene dependencies, solo corre una vez 
  useEffect(()=>{
    console.log("this should only run once!");
  },[]);


  const increment = () =>{
    setCount(countState+1); //parecido a this.setState, pero no paso un objeto
  };
  const decrement = () =>{
    setCount(countState-1);
  };
  const reset = () =>{
    setCount(count);
  };

  return(
    <div>
      <p>The current {text || "count"} is {countState}</p>
      <button onClick={increment}>
        +1
      </button>
      <button onClick={decrement}>
        -1
      </button>
      <button onClick={reset}>
        Reset
      </button>
      <input onChange={(event)=>setText(event.target.value)} value={text}/>
    </div>
  );
};

export default Count;