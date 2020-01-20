import React, { Component } from 'react';
import {fetchPosts} from '../actions/postAction';
import {connect} from 'react-redux';

class Post extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
    }
    componentWillMount(){
        this.props.fetchPosts()
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        }
    }
    render() {
        const fetchPosts = this.props.posts.map(elem =>(
            <div key={elem.id}>
                <h3> {elem.title} </h3> 
                <p> {elem.body}</p> 
            </div>
        ))
        return (
            <div>
                <h1> Posts </h1>
                {fetchPosts}
            </div>
        )
    }
}

const mapStateToProps = state =>({
    posts : state.posts.items,
    newPost : state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Post)
