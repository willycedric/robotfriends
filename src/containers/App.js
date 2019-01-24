import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
// import RobotDetails from './RobotDetails';
// import ErrorBoundry from '../components/ErrorBoundry';
//import { robots as data } from './../robots';
import './App.css';
const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    };
}
class App extends Component {

    componentWillMount() {

        this.props.onRequestRobots();
    }
    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props
        const filteredRobot = robots.filter(robot => robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()))
        return isPending ? (<div className='tc'>
            <h1>Loading ...</h1>
        </div>) : (
                <div className='tc'>
                    <div>
                        <Header />
                        <SearchBox searchChange={onSearchChange} />
                        <Scroll>
                            <CardList robots={filteredRobot} />
                        </Scroll>
                    </div>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
