import React, {Component} from 'react';
import "./BestMenu.css";
import GoogleFontLoader from 'react-google-font-loader';

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
class title {
  constructor(ctx,startPoint,endPoint,length){
    this.ctx = ctx;
    this.startPoint = startPoint;
    this.endPoint = endPoint;
    this.length = length;
  }

  drawTitleText(ctx,startPoint,endPoint,length){}
} 

function drawTitleText(props){
  const {ctx,toX,toY,length} = props;

  if(length>=0){
    ctx.font = "20px Quicksand";
    ctx.fillText(menuData[0], toX+5, toY-5);
  }else{
    ctx.font = "20px Quicksand";
    ctx.fillText(menuData[0], toX+length+5, toY-5);
  } 
}

class content {

}

function drawTitle(props) {
  const {ctx, fromX, fromY, toX, toY, length,color,i} = props;
  ctx.beginPath();
  ctx.moveTo(fromX,fromY);
  ctx.lineTo(toX,toY);
  
  ctx.moveTo(toX,toY);
  ctx.lineTo(toX+length,toY);
  //Menu text
  drawTitleText({ctx,toX,toY,length});

  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.closePath();

}

function underLine(props) {
  const {ctx, newFromX, newFromY, newToX, newToY, color} = props;
  ctx.beginPath();
  ctx.moveTo(newFromX,newFromY);
  ctx.lineTo(newToX,newToY);

  if(newFromX<=newToX){
    ctx.font = "15px Quicksand";
    ctx.fillText(service[0], newFromX, newToY-5);
    ctx.strokeStyle = color;
    ctx.stroke();
  }else{
    ctx.font = "15px Quicksand";
    ctx.fillText(service[0], newToX, newToY-5);
    ctx.stroke();

  }
}

function menu(props) {
  const {ctx, fromX, fromY, toX, toY, length, height, color} = props;


  drawTitle({ctx, fromX, fromY, toX, toY, length, color});
  
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
  
  componentDidMount() {
    const canvas = this.canvas.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //load building img
    var img = new Image();
    img.src = "./service.png";
    img.onload = function(){
      ctx.drawImage(img,0,0);
    }
    
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");

      //building var
      var building1 = {
        x1 : 543,
        x2 : 607,
        y1 : 80,
        y2 : 331
      }
      var building2 = {
        x1:458,
        x2:569,
        y1:302,
        y2:495
      }

      var building3 = {

      }
      canvas.addEventListener('click',
        function(event){
          //Smart Office Menu
          if(event.pageX>=building1.x1 & event.pageX<=building1.x2){
            if(event.pageY>=building1.y1 & event.pageY<=building1.y2){
                menu({ctx, fromX: 600, fromY: 150, toX: 750, toY: 100, length:150, height:40,color: "black" });
            } 
          }

          //Smart City
          if(event.pageX>=building2.x1 & event.pageX<=building2.x2){
            if(event.pageY>=building2.y1 & event.pageY<=building2.y2){
              menu({ctx, fromX: 480, fromY: 520, toX: 300, toY: 500, length:-150, height:40,color: "#DCDCDC" });
            } 
          }
        
        });

      // canvas.addEventListener("click",
      //   function(event){
      //     alert(event.x + "," + event.y);
      //   })

      
    
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

