import React from 'react';
import DrawTool from './DrawTool.js';

import * as Cst from '../Constants/Constants.js';

class DrawArea extends React.Component {
constructor(props) {
  super(props);
  this.draw=this.draw.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleSelected = this.handleSelected.bind(this);
  this.image={};
  this.posx="";
  this.posy="";
  this.posxright=""
  this.posyright=""
  this.background={};
  this.dataurl="";
  this.selected="";
  this.state = {
      file: null,
      canvasHeight:480,
      selected:""
    }

}

handleSelected(selected){
if (selected==="")
  {this.selected=""}
else{
  this.selected = Cst.Icons[selected].src
console.log(selected);
}


}
  componentDidMount() {

   this.canvas=this.refs.canvas;
    this.ctx = this.canvas.getContext("2d"); 
    this.dataurl=this.canvas.toDataURL()
    console.log("did")

  }

  draw(e){
    if (this.selected !== "")
    {
    var rect = this.canvas.getBoundingClientRect();
    this.posx= Math.round((e.clientX-rect.left)*(1024/this.canvas.scrollWidth));
    this.posy=Math.round((e.clientY-rect.top)*(this.state.canvasHeight/this.canvas.scrollHeight));
    this.ctx.globalAlpha = 0.6;
    this.image=new Image();
    this.image.src=this.selected;
    this.ctx.drawImage(this.image,this.posx-25,this.posy-25,50,50)
    this.ctx.globalAlpha = 1.0;
    }
    e.preventDefault();
   }




handleChange(event) {
    
    //this.setState({
      //file: (URL.createObjectURL(event.target.files[0]))
    //})
    if (event.target.files[0])
    {var ratio;
    this.background= new Image();
    this.background.src=(URL.createObjectURL(event.target.files[0]))
    console.log(this.background.src)
    this.background.onload=()=>{
    
      ratio = (this.background.width/this.background.height)
   
        
      ratio=Math.round(1024/ratio)
  
      this.setState({
      canvasHeight:ratio
      });
      this.ctx.drawImage(this.background,0,0,1024,ratio)
      this.dataurl=this.canvas.toDataURL('image/jpeg',0.75)
      this.setState({
      file: this.dataurl
    })
     }}
    else{console.log("cancelled")}
   event.preventDefault();
  }

  render() {
   console.log("render")
    return (
      <div className="Draw">
      <canvas className="Canvas col-12 bg-white p-1 " ref="canvas" width="1024" height={this.state.canvasHeight}  onClick={this.draw} onTouchStart={this.draw}></canvas>
      <div className="line">
         <input type="file" onChange={this.handleChange}/><br></br>
      <a className="save" href={this.state.file} download="strategy.jpg">Save</a>
      </div>
   
      <DrawTool onSelected={this.handleSelected}></DrawTool>     
	    </div>	
    );
  }
      
}

export default DrawArea;