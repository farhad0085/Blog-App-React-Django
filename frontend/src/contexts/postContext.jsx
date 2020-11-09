import React, { Component, createContext } from 'react';
import axios from '../utils/axios'


let Context = null

const { Provider, Consumer } = Context = createContext()


class PostProvider extends Component {

    state = {
        loading: true,
        error: null,
        data: {
            results: []
        }
    }


    getPosts = () => {
        axios.get("/posts/")
            .then(({ data }) => this.setState({
                data: data,
                error: null,
                loading: false
            }))
            .catch(e => {
                this.setState({
                    loading: false,
                    error: "Failed to load projects at this moment. Please try again later!"
                })
            })
    }

    componentDidMount(){
        this.getPosts()
    }

    render() {
        return (
            <Provider value={{...this.state, getPosts: this.getPosts}}>
                {this.props.children}
            </Provider>
        );
    }
}

export { PostProvider, Consumer as PostConsumer, Context as PostContext }