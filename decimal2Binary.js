var DescimalToBinary = function (decimal) {
    var binary = [];


    while (decimal != 0) {
        binary.push(decimal % 2);
        decimal = decimal >> 1;
    }

    return binary.reverse().join('');
}

console.log(DescimalToBinary('233'));
console.log(DescimalToBinary(42));
console.log(DescimalToBinary(8));
console.log(DescimalToBinary(0));