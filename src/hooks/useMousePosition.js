import {useEffect, useState} from "react";
/* un custom hook es una funcion que utiliza alguno de los hooks preseteados para hacer alguna tarea;
el ejemplo es para seguir la posicion del mouse en un componente. La funcion tiene que regresar algo*/
/* luego  tengo que llamar al custom hook dentro del componente*/
/* los hooks que van a ser usados no estan definidos en el componente pero si en el hook que va a usar
el componente, eso es lo que hace a un custom hook y es un patron de codigo seguido. Al componente, no 
le interesa que hace el custom hook, solo lo llama. Esto es lo que permite tambien reutilizar el hook en 
otro lado, por eso es importante */
const useMousePosition = ()=>{
    const [position, setPosition] = useState({x:0,y:0});
    /* cada vez que mueva el mouse, va a cambiar el state, y se va a rerenderizar, va a llamar useMousePosition de nuevo
    y va a agregar otra vez el event listener. Esto es no deseado, en un poquito de mover el mouse voy a estar agregando
    bocha de eventos y me va a chocar el navegador. El problema es estar agregando eventos, no disparandolos */
    useEffect(()=>{
      //console.log("setting up event"); esto es para ver cuantos eventos se estan seteado en consola
      const handleMouseMove =(event)=>{
        setPosition({x:event.pageX,y:event.pageY});
      };
      document.addEventListener("mousemove", handleMouseMove);
      return ()=>{
        //para remover evento, tengo que pasarle el tipo, y la funcion que tenia el evento
        //por eso es necesario en este caso tenerla guardada en memoria
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
    /* con el argumento de dependency, le digo que corra una sola vez. Si yo pusiera que corra en funcion de position
    estaria en la misma de antes, agregando eventos a lo pavote */
  
    return position;
};

export default useMousePosition;