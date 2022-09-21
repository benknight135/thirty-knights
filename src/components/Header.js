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

function PreviousLink({ onPreviousRequested }){
    const handleClick = (event) => {
        onPreviousRequested();
    }

    return (
        <QuickLink title={"Previous"} onClick={(event) => handleClick(event)} />
    )
}

function NextLink({ onNextRequested }){
    const handleClick = (event) => {
        onNextRequested();
    }

    return (
        <QuickLink title={"Next"} onClick={(event) => handleClick(event)} />
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

function Header({ title, onFirstPostRequested, onLatestPostRequested, onPreviousPostRequested, onNextPostRequested }) {
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
                <PreviousLink onPreviousRequested={handlePreviousRequested} />
                <FirstDayLink onFirstRequested={handleFirstRequested} />
                <LatestLink onLatestRequested={handleLatestRequested} />
                <NextLink onNextRequested={handleNextRequested} />
                </Toolbar>
        </React.Fragment>
    );
}

export default Header;