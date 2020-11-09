import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Blog from './Blog'
import PostDetails from './PostDetails'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Blog} />
            <Route path="/post/:id" component={PostDetails} />
        </Switch>
    )
}

export default Routes