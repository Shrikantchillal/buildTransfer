import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'

import Nav from './components/nav'
import SignUp from './components/signup'
import StorageUtilization from './components/storageUtilization'
import ReplicationStatus from './components/replicationStatus'
import Routes from './components/routes'
import NotFound from './components/notFound'

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends React.Component {
    render() {
        return(
            <Router>
                <Nav />
                <div className='container'>
                    <Switch>
                        <Route path="/" component={SignUp} exact />
                        <Route path="/replicationStatus" component={ReplicationStatus} />
                        <Route path="/storageUtilization" component={StorageUtilization} />
                        <Route path="/routes" component={Routes} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))