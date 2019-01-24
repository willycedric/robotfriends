import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App  from './containers/App';
import RobotDetails from './containers/RobotDetailContainer';
import ErrorBoundry from './components/ErrorBoundry';

const routes = (
    
        <Router>
            <Switch>
                <ErrorBoundry>
                    <Route exact path='/' component={App}/>
                    {/* <Route exact path='/robot/:id' render={(props) => {
                        let id = parseInt(props.location.pathname.replace('/robot/', '')) - 1;                     
                        return <RobotDetails id={id} />
                    }} /> */}
                    <Route exact path='/robot/:id' component={RobotDetails}                                            
                       
                    />
                </ErrorBoundry>
            </Switch>
        </Router>
    
)

export default routes;