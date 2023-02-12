function makeBuffer() {
    var text = '';

    function buffer(part) {
        if (arguments.length == 0) {
            return text;
        }
        text += part + ' ';
    }
    buffer.clear = function () {
        text = '';
    }
    return buffer;
}

var buffer = makeBuffer();

buffer('JavaScript');
buffer('Вчити');
buffer('Потрібно!');
console.log(buffer());

buffer.clear();

buffer(0);
buffer(1);
buffer(0);
console.log(buffer());

buffer.clear();

buffer("Тест");
buffer("тебе не з'їсть");
console.log(buffer());

buffer.clear();

console.log(buffer());