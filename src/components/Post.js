/* This is a functional component */

import React from 'react';

const Post = (props) => {
    
    const {userId, title, body} = props.post;
    
    return(
    <div className="col-12 row">
        <div className="jumbotron">
            <h3> user: {userId} </h3>
            <h4> {title} </h4>
            <p> {body} </p>
        </div>
    </div>
    )        
}

export default Post;