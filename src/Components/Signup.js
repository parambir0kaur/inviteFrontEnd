import React, { Component } from 'react'
import '../signup.css';

export default class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : null,
            username:null,
            email : null,
            mobile : null,
            password : null,
            conf_pass : null
        }
        this.onChangeMethod = this.onChangeMethod.bind(this)
    }
    onChangeMethod(e) {
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state[e.target.name])
    }
    render() {
        return (
            <div className="signup_div">
                <form>
                    <h1>Sign Up Here</h1> 
                    <hr/>

                    <div> 
                        <input type="text" className="input_fields" name="name" placeholder="Enter your Name"  onChange={this.onChangeMethod} value={this.state.name} required/>
                    </div>

                    <div> 
                        <input type="text" className="input_fields" name="username"  placeholder="Enter your Username" onChange={this.onChangeMethod} value={this.state.username} required/>
                    </div>

                    <div> 
                        <input type="email" className="input_fields" name="email"  placeholder="Enter your Email" onChange={this.onChangeMethod} value={this.state.email} required/>
                    </div>

                    <div> 
                        <input type="number" className="input_fields" name="mobile"  placeholder="Enter your Mobile" onChange={this.onChangeMethod} value={this.state.mobile} required/>
                    </div>

                    <div> 
                        <input type="password" className="input_fields" name="password"  placeholder="Enter your Password" onChange={this.onChangeMethod} value={this.state.password} required/>
                    </div>

                    <div> 
                        <input type="password" className="input_fields" name="conf_pass"  placeholder="Confirm your Password" onChange={this.onChangeMethod} value={this.state.conf_pass} required/>
                    </div>
                    <br />
                    <button type="submit" className="login_btn"> Sign Up </button>
                    <br/>
                    <label className="haveAccount"> Already have an account? <a href="/" className="anchor">  Login here.. </a> </label>
                </form>
            </div>
        )
    }
}
