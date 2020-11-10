import React, { Component, createContext } from 'react';
import Post from '../classes/post'


let Context = null

const { Provider, Consumer } = Context = createContext()
const post = new Post()

class PostProvider extends Component {

    state = {
        loading: true,
        error: null,
        data: {
            results: []
        }
    }


    componentDidMount() {
        post.getPosts()
            .then((data) => this.setState({
                data: data,
                error: null,
                loading: false
            }))
            .catch(e => {
                this.setState({
                    loading: false,
                    error: "Failed to load posts at this moment. Please try again later!"
                })
            })
    }
    

    render() {
        
        return (
            <Provider value={{ ...this.state, post }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { PostProvider, Consumer as PostConsumer, Context as PostContext }