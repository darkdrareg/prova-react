import React, { Component } from 'react';
import Post from './Post';
class Result extends Component {
    
    showPosts = () => {
        const posts = this.props.posts /* to not call if we dont have data */
        if (posts.length === 0) return null;
        
        console.log(posts);
        
        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {posts.map(post => (
                        <Post
                            key={post.id}
                            post={post}
                        />
                    ))}
                </div>
            </React.Fragment>
        )
    }
     /* use <React.Fragment> to not create markup extra with aditional divs */
    render() {
        return ( 
            <React.Fragment>  
            { this.showPosts() }
            </React.Fragment>
        );
    }
}

export default Result;