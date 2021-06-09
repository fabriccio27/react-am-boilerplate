import React, {useEffect, useReducer} from "react";
import notesReducer from "../reducers/notes";
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";
import NotesContext from "../context/notes-context";

/* para ver custon hook, ir a ver componente Note */

const NoteApp = () =>{
    //si JSON.parse me tira error de que hay algo mal con la 1ra linea, limpio el localStorage con clear y deberia andar
    const [notes, dispatch] = useReducer(notesReducer, []); //el 2do arg es el state inicial
    //const [notes, setNotes] = useState([]); useState usa por debajo useReducer, asi que si tengo uno en el componente principal, lo voy

    // EFECTOS -------------------------------------------------------
    useEffect(() => {
      console.log("loading from localStorage...");
      const notes =  JSON.parse(localStorage.getItem("notes"));
      if (notes){
        dispatch({type:"POPULATE_NOTES", notes})
      }
    },[]);
  
    useEffect(()=>{
      localStorage.setItem("notes", JSON.stringify(notes));
    },[notes]);
  
    return(
      /* en value pongo lo que quiero que los componentes hijos y nietos tengan acceso, como objeto
      esto me va a eliminar la necesidad de pasarle manualmente las props a los componentes inferiores
      en los componentes donde quiera usar lo que esta Provider, tengo que usar el hook useContext */
      <NotesContext.Provider value={{notes, dispatch}}> 
        <h1>NoteApp</h1>
        <NoteList/>
        <AddNoteForm />
          
      </NotesContext.Provider>
    );
  };
  export default NoteApp;