import React, { useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import { PostContext } from '../contexts/postContext';
import {createUUID} from '../utils'


const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
];


export default function Blog() {

    const {data} = useContext(PostContext)
    const posts = data.results

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Blog App (React + Django)" sections={sections} />
                <main>
                    <Grid container spacing={4}>
                        {posts.map((post) => (
                            <FeaturedPost key={createUUID()} post={post} />
                        ))}
                    </Grid>
                </main>
            </Container>
            <Footer title="Footer" description="Something here to give the footer a purpose!" />
        </>
    );
}