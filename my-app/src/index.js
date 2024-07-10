import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Index from './pages/index';
import SignIn from './pages/sign-in';
import User from './pages/user';
import'../src/style/main.css'
import { Provider } from 'react-redux';
import store from '../src/redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <React.StrictMode>
      <Provider store={store}>
        <Router basename="/">      
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/user" element={<User />} />
            <Route path="*" element={<SignIn />} />
          </Routes>
        </Router>
      </Provider>
    </React.StrictMode>
);