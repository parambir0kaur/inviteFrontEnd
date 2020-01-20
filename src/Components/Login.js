import React, { Component } from 'react'
import '../login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="login_div">
                <form>
                    <h1>Log In Here</h1> 
                    <hr/>
                    <div> 
                        <h1 className="login_headers"> Username </h1>
                        <input type="text" className="input_field" name="username" />
                    </div>

                    <div> 
                        <h1 className="login_headers"> Password </h1>
                        <input type="password" className="input_field" name="password" />
                    </div>
                    <br />
                    <button type="submit" className="login_btn"> Log In </button>
                    <br/>
                    <label className="noAccount"> Don't have an account? <a href="/signup" className="anchor">  Signup here.. </a> </label>
                </form>
            </div>
        )
    }
}
