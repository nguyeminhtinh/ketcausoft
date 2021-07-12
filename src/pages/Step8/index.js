import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const UserForm = () => {
    useEffect(() => {
        document.title = 'UserForm';
    }, []);
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

export default UserForm;
