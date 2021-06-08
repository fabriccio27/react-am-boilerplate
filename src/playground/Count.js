import React, {useState} from "react";

const Count = ({count=0})=>{
    //en class-based components el state siempre era un objeto, aca un pedazo de state puede ser cualquier cosa
    // React ahora prefiere que llames a useState como atributos del state tengas
    // useState devuelve un array. 1er arg: el valor actual del state que va ir cambiando, 2do arg: funcion que va a llamarse para actualizar el state
  
    const [countState, setCount] = useState(count); //aca destructuro a un array en vez de a un objeto, pero es analogo, mando los nombres que quiero
    const [text, setText] = useState("");
  
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

//alternativa
/* 
App.defaultProps = {
  count:0
} 
como argumento de App props, y como argumento de useState props.count
*/