// app/offline.tsx

import React from 'react';

const OfflinePage = () => {
    return (
        <div className='text-[100px] flex items-center justify-center'>
            <h1>No Internet Connection</h1>
            <p>It seems you are offline. Please check your internet connection and try again.</p>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        padding: '20px',
    },
};

export default OfflinePage;
