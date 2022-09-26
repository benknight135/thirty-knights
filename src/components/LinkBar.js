import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';

function QuickLink({ children, onClick }){
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

function LinkBar({ names, onClick }) {
    const handleClick = (name) => {
        onClick(name);
    }

    return (
        <React.Fragment>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
                
    {names.map(name => (
      <QuickLink
        key={name.key}
        onClick={(event) => handleClick(name)}>
          name.value
      </QuickLink>
            ))}
            </Toolbar>
        </React.Fragment>
    );
}

export default LinkBar;