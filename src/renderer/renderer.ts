import * as PIXI from "pixi.js"
import {GlitchFilter} from '@pixi/filter-glitch';
import {AsciiFilter} from '@pixi/filter-ascii';
import {Circle, Container} from 'pixi.js';
import {ColorMapFilter} from '@pixi/filter-color-map';
import * as dat from 'dat.gui'
let colorMatrix = false;

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  const newColor = PIXI.utils.string2hex("0x" + randomColor);
  return newColor;
}



const app = new PIXI.Application({backgroundColor:0xce407a});
document.body.appendChild(app.view);
    document.body.style.margin = '0';
    app.renderer.view.style.position = 'absolute';
    app.renderer.view.style.display = 'block';

    // View size = windows
    app.renderer.resize(window.innerWidth, window.innerHeight);
const left =  new PIXI.Graphics();
const mid =  new PIXI.Graphics();
const right =  new PIXI.Graphics();


//app.stage.addChild(graphics)
var startX= window.innerWidth
var startY =window.innerHeight


var startX= window.innerWidth/2
var startY =window.innerHeight/2
var size = window.innerWidth

window.addEventListener('resize', (_e) => {
  app.renderer.resize(window.innerWidth, window.innerHeight);
});

 //graphics.lineStyle(2,0xC2FF50,1);
 let Circle1 = new Container();
 let Circle2 = new Container();
 let Circle3 = new Container();
 let Canvas = new Container
 for (let i=1;i<innerWidth;i++){
  
  //left.beginFill()
  if (size>2){
  let newSize = size/(i*.5);
  left.lineStyle(10,0xeddbe7,1);
mid.lineStyle(5,0xfeded3,1);
right.lineStyle(5,0xfdaecb,1);
  left.drawCircle(startX,startY,newSize);
  
 mid.drawCircle(startX+newSize,startY,newSize);
  
  right.drawCircle(startX-newSize,startY,newSize);
  //graphics.endFill();
}
app.ticker.maxFPS = -100;
}
app.ticker.add((delta)=>{
Circle1.addChild(left)
Circle2.addChild(right)
Circle3.addChild(mid)
Circle1.filters = [new GlitchFilter(),new AsciiFilter(datGuiTools.size)]
Circle2.filters = [new GlitchFilter(),new AsciiFilter(datGuiTools.size)]
Circle3.filters = [new GlitchFilter(),new AsciiFilter(datGuiTools.size)]
app.stage.addChild(Circle1)
app.stage.addChild(Circle2)
app.stage.addChild(Circle3)
app.stage.filters = [new PIXI.filters.ColorMatrixFilter()];
})

window.addEventListener("click", colorSwap);

function colorSwap(){
  app.renderer.backgroundColor = setBg();
if (colorMatrix == false){
  colorMatrix = true
}else{
  colorMatrix = false 
}
}

const datGuiData = function() {
  this.size = 10;
  this.matrix = 'lsd';
}


const datGuiTools = new (datGuiData as any)();
let gui = new dat.GUI(); 
gui.add(datGuiTools, 'size', 1, 100);
gui.add(datGuiTools,'LSD');
;