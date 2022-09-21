import React from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

function SidebarItem({ post, onClick }){
    const handleClick = (event) => {
        onClick(event);
    }

    return (
        <Link
            component="button"
            variant="body2"
            onClick={(event) => handleClick(event)}>
                {post.timestamp}
        </Link>
    )
}

function Sidebar({ posts, onPostRequested }) {
    if (posts === null || posts === undefined) {
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

    const handlePostRequested = (index) => {
        onPostRequested(index);
    }

    return (
        <Grid rowSpacing={10}>
            <Divider />
            {posts.map(post => (
                <Grid item key={post.key}>
                    <SidebarItem post={post} onClick={(event) => handlePostRequested(post.index)} />
                    <Divider />
                </Grid>
            ))}
        </Grid>
    )
}

export default Sidebar;