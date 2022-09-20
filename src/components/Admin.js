import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function RefreshButton({ apiBaseUrl }){
    const [isRefreshLoaded, setIsRefreshLoaded] = useState(true);

    const handleRefresh = () => {
        setIsRefreshLoaded(false);
        fetch(apiBaseUrl + "/posts/refresh")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsRefreshLoaded(true);
                },
                (error) => {
                    setIsRefreshLoaded(true);
                }
            )
    }
    const buttonText = isRefreshLoaded? "Refresh Posts" : "Refreshing..."
    return (
        <Button variant="outlined" onClick={handleRefresh} disabled={!isRefreshLoaded}>
            {buttonText}
        </Button>
    )
}

function Admin({ apiBaseUrl }) {
    return (
        <Box textAlign='center'>
            <RefreshButton apiBaseUrl={apiBaseUrl} />
        </Box>    
    )
}

export default Admin;