// list_a = 1 -> 3 -> 10

// list_b = 5 -> 6 -> 9

// merge_list = 

var c = new Node(10, null);
var b = new Node(3, c);
var a = new Node(1, b);

var list_a = a;

var e = new Node(9, null);
var f = new Node(6, e);
var g = new Node(2, f);

var list_b = g;


var result = merge(list_a, list_b);
console.log('merge list', result);

var result = merge(null, null);
console.log('merge list', result);

var result = merge_with_recursion(list_a, list_b);
console.log('without memory', result);


/**
 * merge two linked list
 * 
 * @param {*} list_a 
 * @param {*} list_b 
 */
function merge(list_a, list_b) {

    var merge_list = new Node(null, null);
    
    if (list_a === null && list_b === null) {
        return merge_list;
    }

    
    var prev       = merge_list;

    while(list_a !== null && list_b !== null) {

        if (list_a.data <= list_b.data) {
            prev.next = list_a;
            list_a    = list_a.next;
        }else{
            prev.next = list_b;
            list_b    = list_b.next;
        }
        prev = prev.next;
    }

    if (list_a === null) {
        prev.next = list_b;
    }

    if (list_b === null) {
        prev.next = list_a;
    }

    return merge_list.next;
}


function merge_with_recursion(list_a, list_b) {
    
    if (list_a == null) return list_b;
    if (list_b == null) return list_a;
    
    if (list_a.data < list_b.data) {
        list_a.next = merge_with_recursion(list_a.next, list_b);
        return list_a;
    }else{
        list_b.next = merge_with_recursion(list_b.next, list_a);
        return list_b;
    }
    
}


/**
 * Linked list
 * 
 * @param {*} data 
 * @param {*} next 
 */
function Node(data, next) {
    this.data = data;
    this.next = next;
}
