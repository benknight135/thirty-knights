import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import train from './train.png';

function Header({ title }) {
    
    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <img src={train} alt="train" style={ {width: 30} }/>
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
                <img src={train} alt="train" style={ {width: 30} }/>
            </Toolbar>
        </React.Fragment>
    );
}

export default Header;