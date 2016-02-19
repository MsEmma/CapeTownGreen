
//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");

var taxiLocationCounter = 1;

//listen for the keydown event
body.onkeydown = function(e){
    //e.keyCode - will capture the key codes
    // displayMessage(keyCodeName(e.keyCode));

var trafficLight = new TrafficLight(taxiLocationCounter);

   if (e.keyCode === 37) {
     moveBackward();
   }

   else if (e.keyCode === 38) {
      trafficLight.makeRed();
   }

   else if ((e.keyCode === 39) && (trafficLight.color() === 'green')) {
      moveForward();
   }

   else if (e.keyCode === 40) {
      trafficLight.makeGreen();
    }

displayMessage (createLocationClass (taxiLocationCounter));
}


function keyCodeName (keyCode) {
  if (keyCode === 37){
    return "left";
  }
  else if (keyCode === 38) {
    return "up";
  }
  else if (keyCode === 39) {
    return "right";
  }
  else if (keyCode === 40) {
    return "down";
  }
  else {
    return "";
  }

};

function createLocationClass(n){

  switch (n) {
    case 1:
      return "slot-one-of-nine";
    break;
    case 2:
      return "slot-two-of-nine";
    break;
    case 3:
      return "slot-three-of-nine";
    break;
    case 4:
      return "slot-four-of-nine";
    break;
    case 5:
      return "slot-five-of-nine";
    break;
    case 6:
      return "slot-six-of-nine";
    break;
    case 7:
      return "slot-seven-of-nine";
    break;
    case 8:
      return "slot-eight-of-nine";
    break;
    case 9:
      return "slot-nine-of-nine";
    break;
    default:
      return"";

  }
}

function moveForward() {
  var currentLocation = createLocationClass (taxiLocationCounter);
  taxiLocationCounter++;
  if(taxiLocationCounter > 9){
      taxiLocationCounter = 1;
  }
  var newLocation = createLocationClass(taxiLocationCounter);
  moveTaxi(currentLocation,newLocation)
}

function moveBackward() {
  var currentLocation = createLocationClass (taxiLocationCounter);
  taxiLocationCounter--;
  if (taxiLocationCounter === 0){
    taxiLocationCounter = 9;
  }
  var newLocation = createLocationClass(taxiLocationCounter);
  moveTaxi(currentLocation,newLocation);
}

function createTrafficLightClass(taxiLocationCounter){

  switch (taxiLocationCounter) {
    case 1:
      return ".one-of-nine";
    break;
    case 2:
      return ".two-of-nine";
    break;
    case 3:
      return ".three-of-nine";
    break;
    case 4:
      return ".four-of-nine";
    break;
    case 5:
      return ".five-of-nine";
    break;
    case 6:
      return ".six-of-nine";
    break;
    case 7:
      return ".seven-of-nine";
    break;
    case 8:
      return ".eight-of-nine";
    break;
    case 9:
      return ".nine-of-nine";
    break;
    default:
      return"";

  }
}

var TrafficLight = function (trafficLightNumber) {
  var className = createTrafficLightClass(trafficLightNumber);
  var trafficLightElement = document.querySelector(className);

  this.makeGreen = function () {
    // make it green and remove orange and red
    trafficLightElement.classList.add("lights-go");
    trafficLightElement.classList.remove("lights-slowdown");
    trafficLightElement.classList.remove("lights-stop");
  }
  this.makeOrange = function () {
    // make it orange and remove green and red
    trafficLightElement.classList.remove("lights-go");
    trafficLightElement.classList.add("lights-slowdown");
    trafficLightElement.classList.remove("lights-stop");
  }
  this.makeRed = function () {
    // make it red and remove green and orange
    trafficLightElement.classList.remove("lights-go");
    trafficLightElement.classList.remove("lights-slowdown");
    trafficLightElement.classList.add("lights-stop");
  }
  this.color = function () {
    if (trafficLightElement.classList.contains("lights-go")){
    return 'green';
    }
    if (trafficLightElement.classList.contains("lights-slowdown")){
    return 'orange';
    }
    if (trafficLightElement.classList.contains("lights-stop")){
    return 'red';
    }
  }
}
