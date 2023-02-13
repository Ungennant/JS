function Robot(robotName){
    this.robotName = robotName;
}

Robot.prototype.work = function (action) {
    console.log('Im ' + this.robotName + ' - Im ' + action);
}

var robot1 = Object.create(new Robot('Robot'));
var robot2 = Object.create(new Robot('Coffe Robot'));
var robot3 = Object.create(new Robot('Robot Dancer'));
var robot4 = Object.create(new Robot('Robot Coocker'));


robot1.work('working.');
robot2.work('boil coffe.');
robot3.work('dancing.');
robot4.work('cooking.');

console.log("ACTIONS FROM ARRAY:");
const protoRobots = [robot1, robot2, robot3, robot4];
for(var i = 0; i<robots.length; i++){
    robots[i].work();
}