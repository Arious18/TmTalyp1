import {StarryBackground} from "../../Auth/components/StarryBackground.jsx";
import {LoginPage} from "../../Auth/components/LoginPage.jsx";
import React from "react";
import './Auth.css';

function Auth() {


    return (
        <div className="app">
            <StarryBackground/>

            <div className="login-container">
                <LoginPage/>
            </div>

        </div>

    )
}

export default Auth;

