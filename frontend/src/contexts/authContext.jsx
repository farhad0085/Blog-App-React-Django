import React, { Component, createContext } from 'react';
import User from '../classes/user'


let Context = null

const { Provider, Consumer } = Context = createContext()
const user = new User()

class AuthProvider extends Component {

    state = {
        isAuthenticated: user.isAuthenticated,
        errors: {
            login: {},
            register: {}
        },
        login: (username, password) => this.login(username, password),
        logout: () => this.logout(),
    }

    login(username, password){
        user.login(username, password)
            .then(data => {
                this.setState({
                    isAuthenticated: true,
                    errors: {
                        login: {},
                        register: {}
                    }
                })
            })
            .catch(err => {
                console.dir(err);
                this.setState({
                    isAuthenticated: false,
                    errors: {
                        login: {},
                        register: {}
                    }
                })
            })
    }

    logout(){
        user.logout()
        this.setState({
            isAuthenticated: false
        })
    }

    render() {
        return (
            <Provider value={{ user: this.state }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { AuthProvider, Consumer as AuthConsumer, Context as AuthContext }