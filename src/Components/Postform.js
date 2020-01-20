import React, { Component } from 'react'
import {connect} from 'react-redux'
import {newPost} from '../actions/postAction'

class Postform extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : '',
            body : ''
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
            title : this.state.title,
            body : this.state.body
        }
        this.props.newPost(params)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h1> Post Form </h1> 
                    <div>
                        <label> Title : </label>
                        <input type="text" name="title" onChange={this.onChangeMethod} value={this.state.title}/>
                    </div>
                    <br />
                    <div>
                        <label> Body : </label>
                        <textarea name="body" onChange={this.onChangeMethod} value={this.state.body}/>
                    </div>
                    <button type="submit" > Submit </button>
                </form>
            </div>
        )
    }
}

export default connect(null, {newPost})(Postform)
