// Exercise 1

const arr = [];

function arrayNum(number){
    for (let i = 0; i < number; i++) {
        arr[i] = i + 1;
    }
}

arrayNum(8);

console.log(arr);

///////////////////

// Exercise 2

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
        arr[i] = 0;
    }
}

console.log(arr);

///////////////////