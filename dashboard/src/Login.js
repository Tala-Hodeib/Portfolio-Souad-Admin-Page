import React from "react";
import "./Login.css";




class Login extends React.Component {


    render () {
        return (
            <div>
                <form action="">
                    <h2><span class="entypo-login"><i class="fa fa-sign-in"></i></span> Login</h2>
                    <button class="submit"><span class="entypo-lock"><i class="fa fa-lock"></i></span></button>
                    <span class="entypo-user inputUserIcon">
                        <i class="fa fa-user"></i>
                    </span>
                    <input type="text" class="user" placeholder="ursername"/>
                    <span class="entypo-key inputPassIcon">
                        <i class="fa fa-key"></i>
                    </span>
                    <input type="password" class="pass"placeholder="password"/>
                </form>
            </div>
        );
    }
}

export default Login;