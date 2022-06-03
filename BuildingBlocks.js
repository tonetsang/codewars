class Block{
    constructor(data){
      this.data = data
    }
    getWidth(){
      return this.data[0]
    }
    getLength(){
      return this.data[1]
    }
    getHeight(){
      return this.data[2]
    }
    getVolume(){
      return this.data.reduce((a, b) => a * b)
    }
    getSurfaceArea(){
      return 2 * (this.data[0] * this.data[1] + this.data[1] * this.data[2] + this.data[0] * this.data[2])
    }
  }