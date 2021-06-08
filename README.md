// los hooks se usan con functional components
// antes con functional components (stateless functional components) no podia manejar local state y lifecycle methods (componentDidMount etc)

/* un hook es una funcion que me permite tocar el state o lifecycle method, y convertir un SFC en un FC */

/* que pasa si en useState paso un objeto? voy a seguir teniendo una sola funcion para modificar el state, pero cuando
llame la funcion voy a reemplazar todo el objeto, no la propiedad a la que habia apuntado
WORKAROUND:  el objeto que pase al setter tiene que usar el spread operator para conservar las props no modificadas
AUN ASI, no se recomienda usar objetos usando esta metodologia
 */

/* 
useEffect funciona como un reemplazo de ComponentDidMount o ComponentDidUpdate, ya que toma una funcion como argumento
Dicha funcion se corre en el montaje del componente y en su actualizacion (de su state o de sus props)
Cronologia:
  llamo a ReactDOM.render con una instancia de Count, lo que va a hacer es llamar a Count con las props correspondientes
  Count es llamada con las props correspondientes
  React corre el return de Count para representar
  despues de la representaicon, el efecto creado en useEffect corre
Los efectos se pueden disparar condicionalmente
*/
/* tambien puedo configurar useEffect para que simule el comportamiento de componentDidUnmount. Para verlo voy a armar
un component separado para la representacion de una nota */

/* puedo recrear algo del comportamiento de redux usando useReducer */


//el reducer devuelve el state logrado y el objeto dispatch para despachar acciones
//voy a modificar funciones para usar acciones con dispatch