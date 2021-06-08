import React, {useState, useEffect, useReducer} from "react";
import notesReducer from "../reducers/notes";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";


const NoteApp = () =>{
    //si JSON.parse me tira error de que hay algo mal con la 1ra linea, limpio el localStorage con clear y deberia andar
    const [notes, dispatch] = useReducer(notesReducer, []); //el 2do arg es el state inicial
    //const [notes, setNotes] = useState([]); 
    
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
  
    const addNote=(event)=>{
      event.preventDefault();
      dispatch({
        type:"ADD_NOTE",
        note:{
          title,
          body
        }//el sacó title y body de note, los puso en el root del objeto
      });
      /* setNotes([
        ...notes,
        {
          title,
          body
        }
      ]); */
      setTitle("");
      setBody("");
    };
  
    const removeNote=(title)=>{
      dispatch({
        type:"REMOVE_NOTE",
        title
      });
      /* const filteredNotes = notes.filter(note=>{
        return note.title!==title;
      });
      setNotes(filteredNotes); */
    };
    // EFECTOS -------------------------------------------------------
    useEffect(() => {
      console.log("loading from localStorage...");
      const notes =  JSON.parse(localStorage.getItem("notes"));
      if (notes){
        dispatch({type:"POPULATE_NOTES", notes})
        //setNotes(localNotes);
      }
    },[]);
  
    useEffect(()=>{
      console.log("useEffect ran because of notes changes.");
      localStorage.setItem("notes", JSON.stringify(notes));
    },[notes]);
  
    return(
      <div>
        <h1>NoteApp</h1>
        <NoteList notes={notes} removeNote={removeNote} />

        <h2>Add note</h2>
        <NoteForm title={title} body={body} addNote={addNote} setTitle={setTitle} setBody={setBody}/>
        
          
      </div>
    );
  };
  export default NoteApp;