import React from "react";

const NoteForm = ({title,body,addNote,setTitle,setBody})=>{
    return(
        <form onSubmit={addNote}>
          {/* actualizo activamente el state, asi despues cuando haga submit saco info del state y no de html */}
          <input value={title} onChange={(event)=>setTitle(event.target.value)}/>
          <textarea value={body} onChange={(event)=>setBody(event.target.value)}></textarea>
          <button>Submit</button>
        </form>
    );
};


export default NoteForm;