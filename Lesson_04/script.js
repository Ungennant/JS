const numArray = [1, 2, 3, 9, 11, 16, 17, 28, 39, 100, -12, -22, -33, -44, -52, -61, -72, -81, -9, -101];
numArray.sort(function (a, b) { return b - a });
console.log(numArray);
numArray.reverse(function (a, b) { return b - a });
console.log(numArray);

const positive = numArray.filter(function (num) {
    return num >= 0;
});

const negative = numArray.filter(function (num) {
    return num < 0;
})

console.log(positive);
console.log(negative);

const students = [];
var student1 = { yearOfStuding: 2020, facultyName: 'FoC' };
var student2 = { yearOfStuding: 2019, facultyName: 'FoC' };
var student3 = { yearOfStuding: 2019, facultyName: 'FoE' };
var student4 = { yearOfStuding: 2022, facultyName: 'FoC' };
var student5 = { yearOfStuding: 2019, facultyName: 'FoE' };
var student6 = { yearOfStuding: 2019, facultyName: 'FoC' };
var student7 = { yearOfStuding: 2019, facultyName: 'FoG' };
var student8 = { yearOfStuding: 2020, facultyName: 'FoG' };
var student9 = { yearOfStuding: 2020, facultyName: 'FoH' };
var student10 = { yearOfStuding: 2019, facultyName: 'FoH' };

students.push(student1, student2, student3, student4, student5, student6, student7, student8, student9, student10);

function getfacultyName(Student) {
    return Student.facultyName;
}

const Faculties = students.map(getfacultyName);
console.log(Faculties);

function getYaerOfStuding(Student) {
    return Student.yearOfStuding;
}

const Years = students.map(getYaerOfStuding);
console.log(Years);

var YearsTotal = Years.reduce(function (tot, curr) {
    return tot + curr;
})

console.log(YearsTotal);

