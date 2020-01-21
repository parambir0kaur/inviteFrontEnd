import React, { Component } from 'react'
import {validateAuth} from '../actions/authAction';
import {withRouter} from 'react-router-dom'

class Home extends Component {
    constructor(props){
        super(props)

        this.logout = this.logout.bind(this)
    }
    componentWillMount(){
        if(localStorage.getItem("uid") && localStorage.getItem("client") && localStorage.getItem("access_token")){
            let uid = localStorage.getItem("uid")
            let client = localStorage.getItem("client")
            let access_token = localStorage.getItem("access_token")
            validateAuth(uid,access_token,client)
            .then(res =>{
                debugger
                if (res.headers['access-token'] != ''){
                    localStorage.setItem("access_token", res.headers["access-token"])
                }
                if(res.status !== 200){
                    this.props.history.push('/login')
                } 
            })
        }
        else{
            this.props.history.push('/login')
        }
        
    }
    logout(){
        debugger
        localStorage.clear()
        this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                <h1> Home </h1>
                <button type="button" onClick={this.logout}> Log out </button>
            </div>
        )
    }
}

export default withRouter(Home)