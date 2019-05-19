import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './components/dashboard';
import Login from './components/login';

function App({loggedIn}) {
    if (!loggedIn) {
        return (<Login/>);
    }

    return (
        <Router>
            <Route path="/" component={Dashboard} />
        </Router>
    );
}

const mapStateToProps = ({authedUser}) => ({ loggedIn: !!authedUser.userId });
export default connect(mapStateToProps)(App);
