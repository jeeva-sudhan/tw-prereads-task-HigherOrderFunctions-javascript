//let arr = [1,2,3,4,5];

class Array {
    
    constructor() {
        this.arr = [];
    }

    add(element) {
       this.arr.push(element);
    }

    size() {
        return this.arr.length;
    }

    map(callbackFunction) {
        let length = this.arr.length;
        let resultArr = [];
        for(let iterator=0;iterator<length;iterator++) {
            resultArr.push(callbackFunction(this.arr[iterator]));
        }
        return resultArr;
    }

    filter(callbackFunction) {
        let length = this.arr.length;
        let resultArr = [];
        for(let iterator=0;iterator<length;iterator++) {
            if(callbackFunction(this.arr[iterator])) {
                resultArr.push(this.arr[iterator]);
            }
        }
        return resultArr;
    }

    reduce(callbackFunction,initialValue) {
        let length = this.arr.length;
        let accumulator=initialValue, current;
        for(let iterator=0;iterator<length;iterator++) {
            current = this.arr[iterator];
            accumulator = callbackFunction(accumulator,current);
        }
        return accumulator;
    }

    reduce(callbackFunction) {
        let accumulator = this.arr[0];
        this(callbackFunction,accumulator);
    }

    forEach(callbackFunction) {
        let length = this.arr.length;
        for(let iterator=0;iterator<length;iterator++) {
            callbackFunction(this.arr[iterator]);
        }
    }
}

let array = new Array();
array.add(1);
array.add(2);
array.add(3);
console.log(array.size());

let squareOfArr = array.map((element) => element*element);
console.log(array.arr);
console.log(squareOfArr);

let evenArr = array.filter((element) => element%2==0);
console.log(evenArr);

let totalSumOfSquaredArr = squareOfArr.reduce((acc,curr) => acc+curr,0);
console.log(totalSumOfSquaredArr);

let totalSumWithoutInitialValue = squareOfArr.reduce((acc,curr) => acc+curr);
console.log(totalSumWithoutInitialValue);

array.forEach((element) => console.log(element));
