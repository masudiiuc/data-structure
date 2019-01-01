var BalanceBrackets = function (str) {
    var balance = true,
        stack = [];
    openElement = ['[', '{', '('],
        closeElement = [']', '}', ')'];

    if (str.length == 0) {
        return true;
    }


    for (var i = 0; i < str.length; i++) {
        var value = str.charAt(i);

        if (openElement.indexOf(value) !== -1) {
            stack.push(value);
        } else if (closeElement.indexOf(value) !== -1) {
            var index = closeElement.indexOf(value);
            var startItem = stack.pop();
            if (startItem != openElement[index]) {
                balance = false;
                break;
            }
        }
    }

    console.log('stack: ', stack);
    if (balance && stack.length === 0) {
        return true;
    }
    return false;
};

console.log(BalanceBrackets('[{()}]'));
console.log(BalanceBrackets('[{(){{()}}}]'));
console.log(BalanceBrackets('[[{(}]]')); //invalid
console.log(BalanceBrackets('[{(')); //invalid
console.log(BalanceBrackets(')}]')); //invalid
