import React, { Component } from 'react';

class CounterButton extends Component {
    shouldComponentUpdate(nextProps, nextState){
      if(nextState.count %3 == 0)
        return  true;
        return false;
    }
   constructor(){
       super();
       this.state = {
           count :0
       };
   }
   updateCount = ()=>{      
      this.setState((prevState, currentProps)=>{
          
          return {count :prevState.count+1}
      })
   }
    render() {         
        console.log('CounterButton');
        return (            
                <button color = {this.props.color} style={{color:this.props.color}} onClick={this.updateCount} >Count: {this.state.count}</button>
          )
    }
}

export default CounterButton;