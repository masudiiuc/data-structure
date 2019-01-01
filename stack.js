//todo: introduce closure


function stack(params) {

    var arr = [];

    init(params);

    function init(params) {
        arr = params ? params : [];
    };

    this.push = function (val) {
        arr[arr.length] = val;
    };

    this.pop = function () {
        var length = arr.length - 1;
        arr.splice(length);

    };

    this.size = function () {
        return arr.length;
    };

    this.show = function () {
        return arr;
    };
}

function matchBalancedBracket(string) {

    var balance = true, stackObj = new stack();

    if (!string.length) {
        return balance;
    }
    string = string.split('');
    string.forEach(function (value, index) {
        //console.log(string[index]);
        var item = string[index];

        if (item == '(') {
            stackObj.push(item);
        } else if (item == ")") {
            if (stackObj.size() == 0) {
                balance = false;
            } else {
                stackObj.pop();
            }
        }
    });

    if (balance && stackObj.size() === 0) {
        console.log('True');
        return true;
    }
    console.log(stackObj.show());
    console.log('false');
    return false;
}

var validStr = "(((()())))()(()(()()))";
var inValidStr = "))))()";
var inValidStr2 = "((())))";
var mathStr = "5+2+(9*3)-(10%5)($$$$$$$$#@&*)((((()))))";

matchBalancedBracket(validStr);
matchBalancedBracket(inValidStr);
console.log('3: ');
matchBalancedBracket(mathStr);