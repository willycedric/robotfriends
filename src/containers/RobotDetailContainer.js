import React, { Component} from 'react';
import { requestRobots } from '../actions';
import { connect } from 'react-redux';
import RobotDetails from '../components/RobotDetails';



const mapStateToProps = (state, props)=>{
  
    return {
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestRobots: () => dispatch(requestRobots())
    };
} 

class RobotDetailContainer extends Component {

    componentWillMount(){
        this.props.onRequestRobots();
    }


    render(){
        let index = this.props.location.pathname.replace('/robot/','')-1;
      
        const {  robots, isPending } = this.props       
       // const filteredRobot = robots.filter(robot => robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()))       
        return isPending ? (<div className='tc'><h1>Loading ...</h1></div>):(
                    <RobotDetails robot={robots[index]} />
          );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RobotDetailContainer);
