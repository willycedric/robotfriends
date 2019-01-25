import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestOneRobot } from '../actions';

const mapStateToProps = state => {
    return {
        robots: state.requestOneRobot.robot,
        isPending: state.requestOneRobot.isPending,
        error: state.requestOneRobot.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestRobots: (id) => dispatch(requestOneRobot(id))
    };
}
class RobotDetails extends Component{

    componentDidMount() {

        this.props.onRequestRobots(this.props.id);
    }
    render(){
        console.log(this.props.robot)
        const {id, name, email } = this.props.robot;
        return (
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
                <div id={name.toLowerCase().replace(/\s/g, '') + '-' + id}>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RobotDetails);