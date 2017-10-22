
var Config = {
  zValue: 1,
  lastX: 0,
  lastY: 0,
  currentLength: 0,
  totalHight: window.innerHeight,
  totalWidth: window.innerWidth,
  fontSize: function(){  return 12 * this.zValue},
  fontFamily: "Arial",
  dropLangth : function(){ return 12 / this.zValue},
  gravity: function(){ return this.fontSize() },
  speed: function () {
    return this.dropLangth() + 30
  },
  fontApply: function () {
    this.font = this.fontSize() + "px " + this.fontFamily
    
  },
  update: function () {
      this.fontApply();    
    this.lastX = this.x;

    // reset lastY position after end drop-tail(full drop length) 
    this.lastY = this.lastY > this.totalHight + (this.gravity() * this.dropLangth()) ? 0 : this.lastY + this.gravity();
    this.fillText(symbol(), this.lastX, this.lastY);
    this.currentLength++;

    if (this.currentLength > this.dropLangth()) {
      this.clear();
    }
    this.next();
  },
  clear: function () {
    var height = this.lastY - (this.gravity() * this.dropLangth());
    this.clearRect(this.x, this.y, this.fontSize(), height);
  },
  next: function () {
    setTimeout(() => this.update(), this.speed());
  },

};

const myCanvas = document.getElementById("myCanvas");

// canvas size
[myCanvas.width, myCanvas.height] = [Config.totalWidth, Config.totalHight];

Object.assign(CanvasRenderingContext2D.prototype, Config);

var a = myCanvas.getContext("2d");

var createDrop = function (drop ,x, y) {
  drop.fillText(symbol(), x, y);
  drop.x = x;
  drop.y = y;
  drop.update();
}

 




// getting rendom symbol
function symbol() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  for (var i = 0; i < 1; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}