import Header from '../components/header/header'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import User from '../components/user/user'


function Users() {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/signin');
        }
    }, [isAuthenticated, navigate]);  

    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Argent Bank - Profile</title>
                <link rel="stylesheet" href="../style/main.css" />
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                />
            </head>
            <body>
                <div className="container-signin">
                    <Header />
                    <User />
                    <footer className="footer">
                        <p className="footer-text">Copyright 2020 Argent Bank</p>
                    </footer>
                </div>
            </body>
        </html>
    );
}

export default Users;
