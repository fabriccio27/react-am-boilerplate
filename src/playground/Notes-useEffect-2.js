import React, {useEffect, useState} from "react";
const NoteApp = () =>{
    //si JSON.parse me tira error de que hay algo mal con la 1ra linea, limpio el localStorage con clear y deberia andar
  
    const [notes, setNotes] = useState([]); 
    //aca arranco useSate vacio, porque tengo el useEffect que corre solo una vez para modificar notes si es necesario
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
  
    const addNote=(event)=>{
      event.preventDefault();
  
      setNotes([
        ...notes,
        {
          title,
          body
        }
      ]);
      setTitle("");
      setBody("");
    };
  
    const removeNote=(title)=>{
      const filteredNotes = notes.filter(note=>{
        return note.title!==title;
      });
      setNotes(filteredNotes);
    };
    // EFECTOS -------------------------------------------------------
    useEffect(() => {
      console.log("loading from localStorage...");
      const localNotes =  JSON.parse(localStorage.getItem("notes"));
      if (localNotes){
        setNotes(localNotes);
      }
    },[]);
  
    useEffect(()=>{
      console.log("useEffect ran because of notes changes.");
      localStorage.setItem("notes", JSON.stringify(notes));
    },[notes]);
  
    return(
      <div>
        <h1>NoteApp</h1>
        <h2>Add note</h2>
        <form onSubmit={addNote}>
          {/* actualizo activamente el state, asi despues cuando haga submit saco info del state y no de html */}
          <input value={title} onChange={(event)=>setTitle(event.target.value)}/>
          <textarea value={body} onChange={(event)=>setBody(event.target.value)}></textarea>
          <button>Submit</button>
        </form>
        
          {notes.length>0? (
            notes.map(note=>{
              return(
                <div key={note.title}>
                  <h3>{note.title}</h3>
                  <p>{note.body}</p>
                  <button onClick={()=>removeNote(note.title)}>Remove</button>
                </div>
              )
            })
          ):(
            <p>Nothing to see here</p>
          )}
        
      </div>
    );
};

export default NoteApp;