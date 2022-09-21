import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Markdown from './Markdown';

function Post({ post }) {
    if (post === null || post === undefined) {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="top"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <CircularProgress />
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid item>
            <Typography variant="h4">
                {post.title}
            </Typography>
            <Typography variant="h8">
                {post.timestamp}
            </Typography>
            <Markdown className="markdown" key={post.title + post.last_modified}>
                {post.content}
            </Markdown>
        </Grid>
    );
}

export default Post
