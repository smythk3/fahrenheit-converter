var value;


function setup() {
  fahrenheitConversion(100);
  println(value);
  
}

function draw() {
 
}

function fahrenheitConversion(far) {
  value = (far-25)/2;
  return value;
}