import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Blog from './Blog'
import PostDetails from './PostDetails'
import PostForm from '../forms/PostForm'
import SigninForm from '../forms/SigninForm'
import SignupForm from '../forms/SignupForm'
import Profile from './Profile'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Blog} />
            <Route path="/page/:pageNumber" component={Blog} />
            <Route path="/post/:id" component={PostDetails} />
            <Route path="/posts/new" component={PostForm} />
            <Route path="/signin" component={SigninForm} />
            <Route path="/signup" component={SignupForm} />
            <Route path="/user/:username" component={Profile} />
        </Switch>
    )
}

export default Routes