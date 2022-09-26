import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function QuickLink({ onClick }){
    const handleClick = (event) => {
        onClick(event);
    }

    return (
        <Link
            component="button"
            variant="body2"
            onClick={(event) => handleClick(event)}>
                {children}
        </Link>
    )
}

function PostLinkBar({ onFirstPostRequested, onLatestPostRequested, onPreviousPostRequested, onNextPostRequested }) {
    const handleFirstRequested = () => {
        onFirstPostRequested();
    }

    const handleLatestRequested = () => {
        onLatestPostRequested();
    }

    const handlePreviousRequested = () => {
        onPreviousPostRequested()
    }

    const handleNextRequested = () => {
        onNextPostRequested();
    }

    return (
        <React.Fragment>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
                <QuickLink
                    onClick={(event) => handlePreviousRequested()}>
                    Previous
                </QuickLink>
                <QuickLink
                    onClick={(event) => handleFirstRequested()}>
                    First
                </QuickLink>
                <QuickLink
                    onClick={(event) => handleLatestRequested()}>
                    Latest
                </QuickLink>
                <QuickLink
                    onClick={(event) => handleNextRequested()}>
                    Next
                </QuickLink>
            </Toolbar>
        </React.Fragment>
    );
}

export default PostLinkBar;