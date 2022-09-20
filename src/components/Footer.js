import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function CreatedBy({ onClick }) {
    const handleClick = () => {
        onClick();
    }

    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Created by '}
            <Link
                component="button"
                variant="body2"
                underline="none"
                color="inherit"
                onClick={(event) => handleClick(event)}>
                    {"Ben Knight"}
            </Link>
        </Typography>
    );
}

function SorceCodeLink() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Source code is available on '}
            <Link color="inherit" href="https://github.com/benknight135/thirty-knights/">
                GitHub
            </Link>{' '}
        </Typography>
    );
}

function Footer({ onNameClick }) {
    const handleNameClick = () => {
        onNameClick();
    }

    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <CreatedBy onClick={handleNameClick} />
                <SorceCodeLink />
            </Container>
        </Box>
    );
}

export default Footer;