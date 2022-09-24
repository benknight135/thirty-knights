import React, { useRef, useState, useLayoutEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Markdown from './Markdown';

function Post({ post }) {
    const divRef = useRef(null);
    
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    
    useLayoutEffect(() => {
      setWidth(divRef.current.offsetWidth);
      setHeight(divRef.current.offsetHeight);
      }, []);
    

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
            <div 
                ref={divRef} >
                <Markdown 
                    className="markdown"
                    key={post.title + post.last_modified}
                    width={width}>
                        {post.content}
                </Markdown>
            </div>
        </Grid>
    );
}

export default Post
