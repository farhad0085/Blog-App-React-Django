import React from 'react';
import Blog from './Blog'
import {PostProvider} from '../contexts/postContext'

const App = () => {
    return (
        <PostProvider>
            <Blog />
        </PostProvider>
    );
}

export default App;