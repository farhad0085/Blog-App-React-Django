import React, { Component, createContext } from 'react';
import Profile from '../classes/profile'


let Context = null

const { Provider, Consumer } = Context = createContext()

const profile = new Profile()

class ProfileProvider extends Component {

    state = {

    }

    getProfileData(username) {
        profile.getProfileData(username)
            .then(data => {
                if (JSON.stringify(this.state) !== JSON.stringify(data)) {
                    this.setState({
                        ...data
                    });
                }
            })
    }

    render() {
        return (
            <Provider value={{ profile: this.state, getProfileData: this.getProfileData.bind(this) }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { ProfileProvider, Consumer as ProfileConsumer, Context as ProfileContext }