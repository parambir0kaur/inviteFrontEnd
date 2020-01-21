import React, { Component } from 'react'
import '../signup.css';
import {signUp,validateAuth} from '../actions/authAction';
import {withRouter} from 'react-router-dom'

class Signup extends Component {
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
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChangeMethod(e) {
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state[e.target.name])
    }
    onSubmit(e){
        e.preventDefault();
        var params = {
            email : this.state.email,
            password : this.state.password,
            password_confirmation : this.state.conf_pass
        }
        console.log(params)
        signUp(params)
        .then(res=>{
            if(res.status === 200){
                localStorage.setItem("uid", res.headers.uid)
                localStorage.setItem("client", res.headers.client)
                localStorage.setItem("access_token", res.headers["access-token"])
                
                let uid = localStorage.getItem("uid")
                let client = localStorage.getItem("client")
                let access_token = localStorage.getItem("access_token")
                validateAuth(uid,access_token,client)
                .then(res =>{
                    if(res.status === 200){
                        if (res.headers['access-token'] != ''){
                            localStorage.setItem("access_token", res.headers["access-token"])
                        }
                        this.props.history.push('/')
                    }
                    else{
                        alert('Something went wrong')
                        this.props.history.push('/login')
                    }
                })
            }
        })
    }
    render() {
        return (
            <div className="signup_div">
                <form onSubmit={this.onSubmit}>
                    <h1>Sign Up Here</h1> 
                    <hr/>

                    <div> 
                        <input type="email" className="input_fields" name="email"  placeholder="Enter your Email" onChange={this.onChangeMethod} value={this.state.email} required/>
                    </div>

                    <div> 
                        <input type="password" className="input_fields" name="password"  placeholder="Enter your Password" onChange={this.onChangeMethod} value={this.state.password} required/>
                    </div>

                    <div> 
                        <input type="password" className="input_fields" name="conf_pass"  placeholder="Confirm your Password" onChange={this.onChangeMethod} value={this.state.conf_pass} required/>
                    </div>
                    <br />
                    <button type="submit" className="signup_btn"> Sign Up </button>
                    <br/>
                    <label className="haveAccount"> Already have an account? <a href="/" className="anchor">  Login here.. </a> </label>
                </form>
            </div>
        )
    }
}

export default withRouter(Signup)
