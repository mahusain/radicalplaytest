  class Player {
    constructor(){
      this.r = 50;
      this.x = w / 2;
      this.y = h- this.r;
      this.flow = 2;
      this.direction = 'still';
    }

    display(){
      rect(this.x, this.y, this.r, this.r)
    }
    move(){
      switch (this.direction){
      case 'still':

      break;
      case 'up':
      this.y -= this.flow;
      break;
      case 'down':
      this.y += this.flow;
      break;
      case 'left':
      this.x -= this.flow;
      break;
      case 'right':
      this.x += this.flow; 
      break;
      default:
      break;
      }
    }
  }
