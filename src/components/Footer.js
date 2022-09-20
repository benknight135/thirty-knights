import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function CreatedBy() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Created by Ben Knight'}
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

function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <CreatedBy />
                <SorceCodeLink />
            </Container>
        </Box>
    );
}

export default Footer;