// break section

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < nums.length; i++) {
    
    if(nums[i] > 4){
        break;
    }
    console.log(nums[i]);
}

// continue/skip section

const num = [0, -1, -2, 3, -4, 5, -6, 7, 8];
for (let i = 0; i < num.length; i++) {
    
    if(num[i] < 0){
        continue;
    }
    console.log(num[i]);
}