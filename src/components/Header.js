import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function QuickLink({ title, onClick }){
    const handleClick = (event) => {
        onClick(event);
    }

    return (
        <Link
            component="button"
            variant="body2"
            onClick={(event) => handleClick(event)}>
                {title}
        </Link>
    )
}

function FirstDayLink({ onFirstRequested }){
    const handleClick = (event) => {
        onFirstRequested();
    }

    return (
        <QuickLink title={"First"} onClick={(event) => handleClick(event)} />
    )
}

function LatestLink({ onLatestRequested }){
    const handleClick = (event) => {
        onLatestRequested();
    }

    return (
        <QuickLink title={"Latest"} onClick={(event) => handleClick(event)} />
    )
}

function Header({ title, onFirstPostRequested, onLatestPostRequested }) {
    const handleFirstRequested = () => {
        onFirstPostRequested();
    }

    const handleLatestRequested = () => {
        onLatestPostRequested();
    }

    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    {title}
                </Typography>
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
                <FirstDayLink onFirstRequested={handleFirstRequested} />
                <LatestLink onLatestRequested={handleLatestRequested} />
            </Toolbar>
        </React.Fragment>
    );
}

export default Header;