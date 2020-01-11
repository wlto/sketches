function collatz(n) {
  return n % 2 == 0 ? n / 2 : (3*n + 1)/2;
}

function drawCollatz(x, y) {
  let len = 8;
  let angle = Math.PI / 3;

  for (let i = 1; i < 5000; i++) {
    let n = i;
    let sequence = [];

    do {
      sequence.push(n);
      n = collatz(n);
    } while (n != 1);
    sequence.push(1);
    sequence.reverse();

    resetMatrix();
    translate(x, y);
    // rotate(Math.PI / 4);
    for (let j = 0; j < sequence.length; j++) {
      let value = sequence[j];
      if (value % 2 == 0) {
        rotate(angle);
      } else {
        rotate(-angle);
      }
      strokeWeight(2);
      stroke(255, 10);
      line(0, 0, 0, -len);
      translate(0, -len);
    }
  }
}

function setup() {
  createCanvas(800, 800);
  background(0);

  drawCollatz(width/2, height/2);
}

function draw() {

}