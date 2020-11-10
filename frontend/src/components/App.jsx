import React from 'react';
import Routes from './Routes'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { PostProvider } from '../contexts/postContext'
import Header from './Header';
import Footer from './Footer';


const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Create new post', url: '/posts/new' },
    { title: 'Sign in', url: '/signin' },
    { title: 'Sign up', url: '/signup' },
];


const App = () => {
    return (
        <PostProvider>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Blog App (React + Django)" sections={sections} />
                <Routes />
            </Container>
            <Footer description="Something here to give the footer a purpose!" />
        </PostProvider>
    );
}

export default App;