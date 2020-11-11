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
        login: (username, password, history) => this.login(username, password, history),
        register: (email, username, password, history) => this.register(email, username, password, history),
        logout: () => this.logout(),
    }

    login(username, password, history){
        console.log("history", history);
        user.login(username, password)
            .then(data => {
                this.setState({
                    isAuthenticated: true,
                    errors: {
                        login: {},
                        register: {}
                    }
                })

                // send user to home page
                history.push('/')

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

    register(email, username, password, history){
        user.register(email, username, password)
            .then(data => {
                this.setState({
                    isAuthenticated: true,
                    errors: {
                        login: {},
                        register: {}
                    }
                })
                history.push('/')
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
        console.log(this.props);
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