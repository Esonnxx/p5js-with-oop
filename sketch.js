
class data {
  constructor(vectorX, VectorY, diameter, velX, velY) {
    this.vectorX = vectorX
    this.VectorY = VectorY
    this.diameter = diameter
    this.velX = velX
    this.velY = velY
  }

  Draw () {


    this.vectorX += this.velX * 0.016666
    this.VectorY += this.velY * 0.016666
    if (this.vectorX > 400) {
      this.vectorX -= 400

    }
    if (this.vectorX < 0) {
      this.vectorX += 400

    }

    circle(this.vectorX, this.VectorY, this.diameter)
  }

}
var circleStorage = []
function setup () {

  myCircle = new data(200, 300, 20)

  createCanvas(400, 400)
  background(0)


  for (let i = 0; i < 100; i++) {
    circleStorage.push(new data(random(0, 500), random(0, 500), 20, random(-50.50), random(-50.50)))

  }
}

function draw () {
  background(0)

  for (let i = 0; i < 100; i++) {
    circleStorage[i].Draw()

  }

}

