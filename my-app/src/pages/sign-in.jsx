import React from 'react';
import Header from '../components/header/header'
import Conection from '../components/signIn/signIn';

function SignIn() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Argent Bank - Sign In</title>
        <link rel="stylesheet" href="../style/main.css" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>
<Header />
<Conection />
        <footer className="footer">
          <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
      </body>
    </html>
  );
}

export default SignIn;