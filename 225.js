/**
 * Initialize your data structure here.
 */
var MyStack = function () {
    var arr = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    console.log('...', arr);
    arr.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    arr = arr.reverse();
    topElement = arr.shift();
    arr.reverse();
    return topElement;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    return arr[arr.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return arr.length == 0;
};

MyStack.prototype.show = function () {
    return arr;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

var obj = new MyStack();

obj.push(1);
obj.push(3);
obj.push(5);
obj.push(15);
obj.push(17);
obj.push(27);

obj.show();