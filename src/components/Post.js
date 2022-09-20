import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Markdown from './Markdown';

function Post({ post }) {
    if (post === null || post === undefined){
        post = {
            title: "Failed to load post",
            timestamp: "never",
            content: "Failed to load post"
        }
    }

    return (
        <Grid
            item
            xs={12}
            md={8}
            sx={{
                '& .markdown': {
                    py: 3,
                },
            }}
        >
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