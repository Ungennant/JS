function Robot(name) {
    this.name = name;
    this.work = function () {
        console.log('Im ' + name + ' - Im working.');
    }
}

function CoffeRobot(name) {
    Robot.call(this);
    this.work = function () {
        console.log('Im ' + name + ' - Im boil coffe.');
    }
}

function RobotDancer(name) {
    Robot.call(this);
    this.work = function () {
        console.log('Im ' + name + ' - Im dancing.');
    }
}

function RobotCoocker(name) {
    Robot.call(this);
    this.work = function () {
        console.log('Im ' + name + ' - Im cooking.');
    }
}

var robot1 = new Robot('Robot');
var robot2 = new CoffeRobot('CoffeRobot');
var robot3 = new RobotDancer('RobotDancer');
var robot4 = new RobotCoocker('Robot Coocker');

robot1.work();
robot2.work();
robot3.work();
robot4.work();

console.log('ALL ROBOTS FROM ARRAY:');

const robots = [robot1, robot2, robot3, robot4];
for(var i = 0; i<robots.length; i++){
    robots[i].work();
}



