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

// class title {
//   constructor(ctx,startPoint,endPoint,length){
//     this.ctx = ctx;
//     this.startPoint = startPoint;
//     this.endPoint = endPoint;
//     this.length = length;
//   }

//   drawTitleText(ctx,startPoint,endPoint,length){}
// } 

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

    var smartCity = new Image();
    smartCity.src = "./smartcity.png";
    smartCity.onload = function(){
      ctx.drawImage(smartCity,985,30,40,40);
    }
    var smartOffice = new Image();
    smartOffice.src = "./smartOffice.png";
    smartOffice.onload = function(){
      ctx.drawImage(smartOffice,1100,200,40,40);
    }
    var intelligentBuilding = new Image();
    intelligentBuilding.src = "./intelligentBuilding.png";
    intelligentBuilding.onload = function(){
      ctx.drawImage(intelligentBuilding,985,520,40,40);
    }

    
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
  
      function drawLine(){
        ctx.clearRect(820,0,1000,700);
        ctx.strokeStyle = "#DCDCDC";
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.arc(100,300,800,0.01*Math.PI,0.06*Math.PI);     
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(100,300,800,1.87*Math.PI,1.92*Math.PI);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(100,300,800,1.94*Math.PI,1.99*Math.PI);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(898,274);
        ctx.lineTo(1100,250);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(874,100);
        ctx.lineTo(1000,100);
        ctx.lineTo(1010,80);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(883,450);
        ctx.lineTo(1000,510);
        ctx.stroke();
        ctx.closePath();
      }
      drawLine();

      ctx.clearRect(1030,1400,200,200);
      ctx.font = "15px Quicksand";
      ctx.fillText(menuData[0], 0, 0);
      ctx.strokeStyle = "#DCDCDC";
      ctx.stroke();
      
 
      //building var
      var building1 = {
        x1 : 985,
        x2 : 1025,
        y1 : 190,
        y2 : 210
      };
      // var building2 = {
      //   x1:458,
      //   x2:569,
      //   y1:302,
      //   y2:495
      // }

      // var building3 = {

      // }


      canvas.addEventListener("click",
        function(event){
          //Smart Office Menu
          if(event.pageX>=985 & event.pageX<=1025){
            if(event.pageY>=1500 & event.pageY<=1530){

            }
          }
      //     //Smart City
      //     if(event.pageX>=building2.x1 & event.pageX<=building2.x2){
      //       if(event.pageY>=building2.y1 & event.pageY<=building2.y2){
      //         menu({ctx, fromX: 480, fromY: 520, toX: 300, toY: 500, length:-150, height:40,color: "#DCDCDC" });
      //       }
      //     }

      //     console.log("1");
        
        });

      // canvas.addEventListener("click",
      //   function(event){
      //     alert(event.x + "," + event.y);
      //     console.log(event);
      //   })
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

