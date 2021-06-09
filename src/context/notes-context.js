import React from "react";

const NotesContext = React.createContext();
//el argumento de createContext es un contexto por default que quiero usar
//es las cosas que quiero que esten disponibles para que otros compontes usen
//lo voy a definir despues como value del componente NotesContext.Provider

//en componente --> usar useContext con el export este de abajo, destructurar el return value para poner disponible lo que quiero
export default NotesContext;

//esto va a envolver todo lo que regrese el componente principal, como hacia con Provider en redux