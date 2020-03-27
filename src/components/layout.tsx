import React from 'react';

const Layout: React.FC = ({ children }) => (
    <main style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        {children}
    </main>
);

export default Layout