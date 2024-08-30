function setup() {
    createCanvas(900, 900);
    background("grey");
  }
  function draw() {
    
  
    stroke("blue");
    fill("green");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
     circle(mouseX, mouseY, 20, 45);
    }
  }
