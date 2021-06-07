import React from "react";
import {Router, Route, Switch} from "react-router-dom";

//import Header from "../components/Header.js"; header lo voy a mostrar dependiendo de las rutas, por eso lo muevo a PrivateRoute
import DashboardPage from "../components/DashboardPage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import { createBrowserHistory } from 'history';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


export const history =  createBrowserHistory(); 
//si uso Router en lugar de BrowserRouter, le puedo pasar mi instancia de history
//quiero que me deje ir a LoginPage solo si no estoy authenticado, si no que me redirija a dashboard
const AppRouter = () =>(

    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute exact={true} path="/" component={LoginPage}/>
                <PrivateRoute path="/dashboard" component={DashboardPage} /> {/* if I remove the exact prop for this component,  every route starting with / will show this component also */}
                <Route component={NotFoundPage} /> {/* with Switch and no path defined, this will run if there's no match for any of the routes above */}
            </Switch>
                
        </div>
        
    </Router>
);

export default AppRouter;