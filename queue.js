var Queue = function () {
    var arr = [];

    this.enqueue = function (val) {
        arr[arr.length] = val
    }

    this.dequeue = function () {
        arr.splice(0, 1);
    }
    this.size = function () {
        return arr.length;
    }
    this.show = function () {
        return arr;
    }
};

var q = new Queue();
q.enqueue('a');
q.enqueue(true);
q.enqueue(2.34);

console.log(q.show());

q.dequeue();

console.log(q.show());

q.enqueue('12345');
q.enqueue('testing');

console.log(q.show());
q.dequeue();
q.dequeue();
console.log(q.show());
console.log(q.size());