import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App  from './containers/App';
import Home from './components/Home/Home';

import RobotDetails from './containers/RobotDetailContainer';
import ErrorBoundry from './components/ErrorBoundry';

const routes = (
    
        <Router>
            <Switch>
                <ErrorBoundry>
                    <Route exact path='/' component={Home}/>          
                    <Route exact path='/friends' component={App}/>                    
                    <Route exact path='/robot/:id' component={RobotDetails}                                            
                       
                    />
                </ErrorBoundry>
            </Switch>
        </Router>
    
)

export default routes;