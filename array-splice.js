const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const part = nums.slice(2, 6);
console.log(part);
console.log(nums);

const remove = nums.splice(2, 4, 32, 23, 51);
// start number and count number ar por baki j number gula deya hobe oi gula add hoya jabe
console.log(remove);
console.log(nums);

const join = nums.join(", ");
console.log(join);