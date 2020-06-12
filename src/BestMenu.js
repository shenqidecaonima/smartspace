import React, {Component} from 'react';
import "./BestMenu.css";
import GoogleFontLoader from 'react-google-font-loader';

//import building from "./service.png";
const font = () => (
  <GoogleFontLoader
  fonts={[
    {
      font: 'Quicksand',
      weights: [400, '400i'],
    },
  ]}
/>
);

function drawBuilding(props) {
  const {ctx} = props;
  var img = new Image();
  img.src = "./service.png";
  img.onload = function(){
    ctx.drawImage(img,0,0);
  }
  

}
function title(props) {
  const {ctx, fromX, fromY, toX, toY, length,color,i} = props;
  ctx.beginPath();
  ctx.moveTo(fromX,fromY);
  ctx.lineTo(toX,toY);
  
  ctx.moveTo(toX,toY);
  ctx.lineTo(toX+length,toY);

  if(length>=0){
    ctx.font = "20px Quicksand";
    ctx.fillText(menuData[0], toX+5, toY-5);
    ctx.strokeStyle = color;
    ctx.stroke();
  }else{
    ctx.font = "20px Quicksand";
    ctx.fillText(menuData[0], toX+length+5, toY-5);
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  
}

function underLine(props) {
  const {ctx, newFromX, newFromY, newToX, newToY, color} = props;
  ctx.beginPath();
  ctx.moveTo(newFromX,newFromY);
  ctx.lineTo(newToX,newToY);

  console.log("newFromX:"+newFromX);
  console.log("newToX:"+newToX);
  console.log(1);

  if(newFromX<=newToX){
    ctx.font = "15px Quicksand";
    ctx.fillText(service[0], newFromX, newToY-5);
    ctx.strokeStyle = color;
    ctx.stroke();
  }else{
    ctx.font = "15px Quicksand";
    ctx.fillText(service[0], newToX, newToY-5);
    console.log(newToX);
    ctx.stroke();

  }
}


function menu(props) {
  const {ctx, fromX, fromY, toX, toY, length, height, color,i} = props;
  title({ctx, fromX, fromY, toX, toY, length, color,i});
  var newFromX = toX;
  var newFromY = toY + height;
  var newToX = toX+length;
  var newToY = toY + height;
  underLine({ctx, newFromX, newFromY, newToX, newToY, color});
}

const service = [
  "Internet/Customization/Smart Office",
  "Cloud Server/IDC/VPN"
];

const menuData = [
  "Smart Office",
  "Smart City",
  "Intelligent Building"
]

export default class BestMenu extends Component{
  constructor(props) {
    super(props); 
    this.canvas = React.createRef();
  }
  
  
  componentWillMount() {
    
  }
  componentDidMount() {
    const canvas = this.canvas.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      var img = new Image();
      img.src = "./service.png";
      img.onload = function(){
        ctx.drawImage(img,0,0);
      }
      
    menu({ctx, fromX: 600, fromY: 150, toX: 750, toY: 100, length:150, height:40,color: "black" });
    menu({ctx, fromX: 480, fromY: 520, toX: 300, toY: 500, length:-150, height:40,color: "black" });
    menu({ctx, fromX: 700, fromY: 310, toX: 950, toY: 400, length:150, height:40,color: "black" });  
      
      

    }
    
  }


  render(){
    return(
      <div>
        <canvas ref={this.canvas}></canvas>
        {/* <img ref="image" src="./service.png"></img> */}
      </div>

    )
  }
}

