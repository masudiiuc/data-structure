var Queue = function (params) {
    var arr = [];


    init(params);

    this.init = init;

    function init(params) {
        arr = (typeof params != 'undefined' && params.length != 0) ? params : [];
    }

    this.enqueue = function (val) {
        arr[arr.length] = val
    }

    this.dequeue = function () {
        var ele = arr.splice(0, 1);
        return ele[0];
    }

    this.size = function () {
        return arr.length;
    }

    this.show = function () {
        return arr;
    }
};


var Stack = function (params) {

    var q = new Queue(params);

    this.push = function (val) {
        q.enqueue(val);
    }

    this.pop = function () {
        var q2 = new Queue();

        var qSize = q.size() - 1;
        for (var i = 0; i < qSize; i++) {
            q2.enqueue(q.dequeue());
        }
        q.init(q2.show());
    }

    this.show = function () {
        return q.show();
    }
};


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var qStack = new Stack(arr);


console.log(qStack.show());
qStack.pop();
qStack.pop();
qStack.push(11);
console.log(qStack.show());