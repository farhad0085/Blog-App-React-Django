import React, { Component, createContext } from 'react';
import Profile from '../classes/profile'


let Context = null

const { Provider, Consumer } = Context = createContext()

const profile = new Profile()

class ProfileProvider extends Component {

    render() {
        return (
            <Provider value={{ profile }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { ProfileProvider, Consumer as ProfileConsumer, Context as ProfileContext }