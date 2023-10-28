import React,{Component} from 'react';
export default class Exp6 extends Component{
    state = {count : 0};
    increment = ()=>{
        this.setState({count : this.state.count+1});
    }

    decrement = ()=>{
        if(this.state.count >0){
          this.setState({count : this.state.count-1});
        }
    }

    render(){
        return (
            <div>
              <div className="buttons">
                <button onClick={this.increment}>+</button>
                {this.state.count}
                <button onClick={this.decrement}>-</button>
              </div>
            </div>
          )
    } 

}