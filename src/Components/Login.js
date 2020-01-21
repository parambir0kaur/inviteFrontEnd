import React, { Component } from 'react'
import '../login.css';
import {signInAuth} from '../actions/authAction';
import {withRouter} from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : null,
            password : null
        }
        this.onChangeMethod = this.onChangeMethod.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChangeMethod(e) {
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state[e.target.name])
    }

    onSubmit(e){
        debugger
        e.preventDefault();
        var params = {
            email : this.state.email,
            password : this.state.password
        }
        console.log(params)
        signInAuth(params)
        .then(res=>{
            if(res.status === 200){
                localStorage.setItem("uid", res.headers.uid)
                localStorage.setItem("client", res.headers.client)
                localStorage.setItem("access_token", res.headers["access-token"])
                this.props.history.push('/')
            }
            else{
                alert('Something went wrong')
                this.props.history.push('/login')
            }
        })
    }
    render() {
        return (
            <div className="login_div">
                <form onSubmit={this.onSubmit}>
                    <h1>Log In Here</h1> 
                    <hr/>
                    <div> 
                        <h1 className="login_headers"> Email </h1>
                        <input type="email" className="input_field" name="email" onChange={this.onChangeMethod} value={this.state.email} required/>
                    </div>

                    <div> 
                        <h1 className="login_headers"> Password </h1>
                        <input type="password" className="input_field" name="password" onChange={this.onChangeMethod} value={this.state.password} required/>
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

export default withRouter(Login)
