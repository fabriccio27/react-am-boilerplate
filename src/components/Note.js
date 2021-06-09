import React, {useContext} from "react";
import useMousePosition from "../hooks/useMousePosition";
import NotesContext from "../context/notes-context";

const Note = ({note})=>{
  const {dispatch} = useContext(NotesContext);
  const position = useMousePosition(); //en este caso no lleva argumentos, pero podria llevarlos de ser necesario

  
  const removeNote=(title)=>{
    dispatch({
      type:"REMOVE_NOTE",
      title
    });
  };

    return(
      <div>
        <h3>{note.title}</h3>
        <p>{position.x},{position.y}</p>
        <p>{note.body}</p>
        <button onClick={()=>removeNote(note.title)}>Remove</button>
      </div>
  
    );
};

export default Note;