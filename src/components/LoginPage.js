import React from "react";
import {connect} from "react-redux";
import {startLogin} from "../actions/auth";


export const LoginPage = ({startLogin})=>{
    return(
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Boilerplate</h1>
                <p>Tag line for app</p>
                <button className="btn" onClick={startLogin}>Login with Google</button> 
            </div>
        </div>
    );
};

//no necesito nada del state pero necesito que el componente tenga acceso a dispatch, por eso lo conecto
const mapDispatchToProps = (dispatch) =>{
    return {
        startLogin:()=>dispatch(startLogin())
    }
};

export default connect(undefined, mapDispatchToProps)(LoginPage);