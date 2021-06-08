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

export default notesReducer;