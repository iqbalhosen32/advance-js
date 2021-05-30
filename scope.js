// scope holo {} ar modde thaka element sudu tar vitorei kaj korbe

function num(num1, num2) {
    let sum = num1 + num2;
    // return sum;
    if (sum > 5) {
        // let mood = 'happy';
        var mood = 'happy';
        // whasting holo kono kicu decliar korle oita scope {} upor ar level a niya jaoya
        console.log(mood);
    }
    console.log(mood);
}

const result = num(2, 4);
// console.log(result);
// console.log(sum);