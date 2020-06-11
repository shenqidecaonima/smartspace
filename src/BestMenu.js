import React, {Component} from 'react';
import "./BestMenu.css";
//import building from "./service.png";

function canvas() {
  console.log(111);

}

export default class BestMenu extends Component{
  constructor(props) {
    super(props); 
  }

  
  componentWillMount() {
    
  }
  componentDidMount() {
    const canvas = this.refs.canvas.getContext('2d');
    
  }


  render(){
    return(
      <div>
        <canvas ref="canvas"></canvas>
        <img ref="image" src="./service.png"></img>
      </div>

    )
  }
}

