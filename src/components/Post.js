import React, { useCallback, useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Markdown from './Markdown';

function Post({ post }) {
    const useResize = (myRef) => {
        const getWidth = useCallback(() => myRef?.current?.offsetWidth, [myRef]);
    
        const [width, setWidth] = useState(undefined);
    
        useEffect(() => {
            const handleResize = () => {
                setWidth(getWidth());
            };
    
            if (myRef.current) {
                setWidth(getWidth());
            }
    
            window.addEventListener('resize', handleResize);
    
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, [myRef, getWidth]);
    
        return width && width > 25 ? width - 25 : width;
    };

    const divRef = useRef(null);
    let width = useResize(divRef);
    if ( width === undefined ) {
        width = 100;
    }
    

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
