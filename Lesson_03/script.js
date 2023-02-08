const numArray = [2,3,4,5,6,7,8];
let value = numArray[numArray.length - 1];
console.log(value);

const styles  = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
var removed = styles.splice(styles.length - 2, 1, 'Classical');
console.log(removed);
console.log(styles);
var first = styles.shift();
console.log(first);
console.log(styles);
styles.unshift('Rap','Raggy');
console.log(styles);

function find(arr, value){
    for(i = 0; i< arr.length; i++){
        if(arr[i] = value){
            return value;
        } else {
            return -1;
        }
    }
}

var finded = find(numArray, numArray.length - 3);
console.log(finded);

function filterRange(arr, a, b){
    return arr.slice(a, b);
}

console.log(filterRange(numArray, 0 , 2));

function camelize(str) {
    var arr = str.split('-')
    for(var i = 0; i < arr.length; i++) {    
      const current = arr[i]
      arr[i] = current.charAt(0).toUpperCase() + current.slice(1)
    }
    return arr.join('')
  }

var camelizedStr = camelize('my-dear-colin.');
console.log(camelizedStr);