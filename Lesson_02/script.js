const user = {
    name: 'PILIP',
    surname: 'SHEVCHENKO'
};
user.name = 'SERGII';
console.log(user.name);
delete user.name;

const employeeSalaries = {
    employee1: 1000,
    employee2: 1500,
    employee3: 3000
}

var sum = 0;
for (var i in employeeSalaries) {
    sum += employeeSalaries[i];
}

console.log(sum);

function calculate(a, b, opreator) {
    switch (opreator) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        default:
            return('Wrong input! Enter valid values to calculate.');
    }
}

console.log(calculate(5,10,'+'));
console.log(calculate(5,10,'-'));
console.log(calculate(5,10,'*'));
console.log(calculate(5,10,'/'));
