import {FETCH_POSTS, NEW_POST} from './types';

export const fetchPosts = ()=>dispatch =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            dispatch({
                type:FETCH_POSTS,
                payload:data
            })
        })
}

export const newPost = (params)=>dispatch =>{
    console.log(params)
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => {
      console.log(json)
      dispatch({
          type:NEW_POST,
          payload:json
      })
    })
}