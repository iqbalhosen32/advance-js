// closer holo kono akta function ar vitore arekta funtion return kora, tokhon nijeder akta enviroment toiri kore atakei closer bole

function stopWatch() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const count1 = stopWatch();
console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());

const count2 = stopWatch();
console.log(count2());
console.log(count2());

console.log(count1());
console.log(count1());

console.log(count2());
console.log(count2());