import React, {useState, useContext} from "react";
import NotesContext from "../context/notes-context";


const NoteForm = () =>{
    //esto estaba en NoteApp, pero cuando movi el formulario, no lo necesitaba mas en NoteApp, lo necesitaba aca
    //me evito pasar props, solo paso dispatch como prop
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const {dispatch} = useContext(NotesContext);

    const addNote=(event)=>{
      event.preventDefault();
      dispatch({
        type:"ADD_NOTE",
        note:{
          title,
          body
        }//el sacó title y body de note, los puso en el root del objeto
      });
      
      setTitle("");
      setBody("");
    };
    return(
        <form onSubmit={addNote}>
          <h2>Add note</h2>
          {/* actualizo activamente el state, asi despues cuando haga submit saco info del state y no de html */}
          <input value={title} onChange={(event)=>setTitle(event.target.value)}/>
          <textarea value={body} onChange={(event)=>setBody(event.target.value)}></textarea>
          <button>Submit</button>
        </form>
    );
};


export default NoteForm;