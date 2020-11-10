import React, { Component, createContext } from 'react';
import Post from '../classes/post'


let Context = null

const { Provider, Consumer } = Context = createContext()
const post = new Post()

class PostProvider extends Component {

    render() {
        return (
            <Provider value={{ post }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { PostProvider, Consumer as PostConsumer, Context as PostContext }