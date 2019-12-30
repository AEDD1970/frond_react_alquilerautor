// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from '../Header/Header';
import { HomePage } from '../pages/HomePage';
import { AdminPage } from '../pages/AdminPage';
import { UserPage } from '../pages/Users';
import { TravelPage } from '../pages/TravelPage';


// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />            
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/users' component={UserPage} />
                <Route path='/admin' component={AdminPage} />
                <Route path='/travel' component={TravelPage} />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    </BrowserRouter>
);