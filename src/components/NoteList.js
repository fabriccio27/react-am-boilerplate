import React from "react";
import Note from "./Note";
const NoteList = ({notes,removeNote})=>{
    return notes.map(note=>{
        return <Note key={note.title} note={note} removeNote={removeNote}/>
    });

}
export default NoteList;