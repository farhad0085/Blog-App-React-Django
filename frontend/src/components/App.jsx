import React from 'react';
import Routes from './Routes'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { PostProvider } from '../contexts/postContext'
import { AuthProvider } from '../contexts/authContext'
import Header from './Header';
import Footer from './Footer';


const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Sports', url: '#' }
];


const App = () => {
    return (
        <AuthProvider>
            <PostProvider>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Header title="Blog App (React + Django)" sections={sections} />
                    <Routes />
                </Container>
                <Footer description="Something here to give the footer a purpose!" />
            </PostProvider>
        </AuthProvider>
    );
}

export default App;