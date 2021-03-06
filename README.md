# Part II of Udemy course, these are my notes

This part of the course will focus in routing, authentication and interaction with databases

## Basics of React-Router
Client side routing with this is tool is basically matching routes to components. Named imports for ```BrowserRouter``` and ```Route``` are necessary from ```react-router-dom``` (in case you're working with a web app). With those two components layout your routh handling. See more [here](https://reactrouter.com/web/guides/quick-start)...
It's necessary to config webpack to not use classic server side routing (otherwise you'll get an error in the style of "Cannot GET /someroute"). In devServer prop set historyApiFallback to true. Close webpack and rerun dev-server. You'll see in the logs

```
i ｢wds｣: 404s will fallback to /index.html
```

Set the prop ```exact={true}``` in the Route component for /, to match only the exact route and render just one component. When React router matches our paths, it just cares if the path at least starts with whatever we have. (Does "/someroute" starts with a "/"? Yes, so route "/" is a match.)

Linking pages: using an anchor tag won't cut it. This will make a full page load, when we actually want to change just a component from the rendered view. Use a named import for Link, you'll find it useful to redirect to home after a 404.
```
<Link to="/someroute"> Go to Someroute </Link>
```
The component NavLink has more features comparing to Link, being one of the most relevant activeClassName, which defines the style of the active NavLink.

## React-Dates

React-Dates is a legacy library to add date pickers among other things. It has named imports such as DateSinglePicker, that will be rendered as react components. As such, props are passed to determine default dates.

## Jest

jest is a testing library for javascript. Install and add "jest --watchAll" at scripts to listen to modifications in test suite.write tests in the following fashion:
```
    test(<some descriptive text of what the tested function should do>, ()=>{
        const expectedValue = ...;
        expect(functionOutput).toBe(expectedValue);
    });
```

## Snapshot testing

In this case, meant to test if components are rendered correctly (components are reactive to input, props, etc). When testing Header component, is of interest knowing what JSX is coming back from the render process. React has the `react-test-renderer ` library. For simple components (no interaction, or user motivated changes), use shallow renderer. Full DOM renderer renders the child components. Shallow render gives an overview of what React renders from the component definition, and as such, it's not very useful. That's where snapshots come in. Snapshots track changes to data over time. If the output changes in a desired or undesired way, we'll be able to see it. From the `expect` API, use `.toMatchSnapshot`.

## Firebase

We can't store arrays as such in Firebase. Passing an array to set() returns a javascript object with unique keys generated automatically for each element in the original array, having the array elements as values to said keys. If the array element (an js object) had an id, it became inaccesible.
```
const arr = [{id:2312,body:"primero"}, {id:3125, body:"segundo"}]
-->
{
    1:{id:2312,body:"primero"},
    2:{id:3125, body:"segundo"}
}

```
One workaround would be using map() to transform the array into an object with keys taken from each elements id, making it possible to "index" the object.
```
const arr = {
    2312:{body:"primero"},
    3125:{body:"segundo"}
}
```
Si, no usar `database.ref("notes").push({title:"Hey there", body:"Goodbai"});` me genera algo parecido a lo de arriba, pero el id es generado por firebase. Voy a escribir a firebase y luego despachar las acciones que sean necesarias. ¿Pero donde pongo ese funcionamiento? React shouldn't know anything about the database we're using, so the redux actions will handle it. `redux-thunk` will be necessary.

### Structure for private space in firebase

Started with:
``` 
expenses
    expenseid1
        ...props
    expenseid2
        ...props
    expenseid3
        ...props
```
Will be:
```
users
    uid1
        expenseid1
            ...props
        expenseid2
            ...props
    uid2
        expenseid3
            ...props

``` 