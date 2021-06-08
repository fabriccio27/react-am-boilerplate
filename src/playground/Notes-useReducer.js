/* puedo recrear algo del comportamiento de redux usando useReducer */
const notesReducer = (state, action)=>{
    switch(action.type){
      case "POPULATE_NOTES":
        return action.notes;
      case "ADD_NOTE":
        return state.concat(action.note);
        //el hizo [...state, {title:action.title, body:action.body}]
      case "REMOVE_NOTE":
        return state.filter(note=>{
          return note.title!==action.title;
        });
      default:
        return state;
    }
  };
  
  //el reducer devuelve el state logrado y el objeto dispatch para despachar acciones
  //voy a modificar funciones para usar acciones con dispatch
  
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
        <h2>Add note</h2>
        <form onSubmit={addNote}>
          {/* actualizo activamente el state, asi despues cuando haga submit saco info del state y no de html */}
          <input value={title} onChange={(event)=>setTitle(event.target.value)}/>
          <textarea value={body} onChange={(event)=>setBody(event.target.value)}></textarea>
          <button>Submit</button>
        </form>
        
          {notes.length>0? (
            notes.map(note=>{
              return <Note key={note.title} note={note} removeNote={removeNote}/>
            })
          ):(
            <p>Nothing to see here</p>
          )}
        
      </div>
    );
  };
  
  const Note = ({note, removeNote})=>{
    useEffect(()=>{
      console.log("Setting up effect!");
      //esta funcion de abajo realiza el clean-up. Ponele que inicialmente con este componente hice una conexion con un recurso, y para
      //que no haya una fuga de memoria, tengo que cerrar la conexion. El cerrado se hace con la funcion que devuelve el efecto
      return ()=>{
        console.log("cleaning up effect");
      };
    },[]);
    return(
      <div>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
        <button onClick={()=>removeNote(note.title)}>Remove</button>
      </div>
  
    );
  };