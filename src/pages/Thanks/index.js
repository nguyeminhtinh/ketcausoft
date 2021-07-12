import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const Thanks = () => {
    useEffect(() => {
        document.title = 'Thanks';
    }, []);
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

export default Thanks;
