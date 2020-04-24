import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }
    componentDidUpdate() {
        if (this.props.id) {

            if (!this.state.loadedPost || (this.state.loadedPost.id !== this.props.id)) {

                axios.get(`https://jsonplaceholder.typicode.com/posts/` + this.props.id)
                    .then((response) => {
                        const post = response.data;
                        this.setState({ loadedPost: post })
                    });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/` + this.props.id)
            .then((response) => {
                // console.log("deleted", response)
            });
    }
    render() { 
        const loadedPost = this.state.loadedPost;
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.state.loadedPost) {

            post = (
                <div className="FullPost">
                    <h1>{loadedPost.title}</h1>
                    <p>{loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;