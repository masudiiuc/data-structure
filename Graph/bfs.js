
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




function breadth_first_search(graph, root) 
{
    var search_queue = new Queue();
    var visited_arr  = [];

    search_queue = add_to_queue(search_queue, graph[root]);
    visited_arr.push(root);

    while(search_queue.size() != 0) {

        var new_node = search_queue.dequeue();

        if (visited_arr.indexOf(new_node) == -1) {
            visited_arr.push(new_node);
            search_queue = add_to_queue(search_queue, graph[new_node])
        }
    }
    return visited_arr;
}

function add_to_queue(search_queue, arr_of_values) {

    if (typeof arr_of_values == 'undefined') {
        return search_queue;
    }

    if (arr_of_values.length != 0) {
        arr_of_values.forEach( (val) => {
            search_queue.enqueue(val);
        });
    }
    return search_queue
}

var graph = {0: [1, 2], 1: [2], 2: [3], 3: [1,2]} 
console.log(breadth_first_search(graph, 0));

var graph = {
    1: [2, 3], 
    2: [1,4,5], 
    3: [5], 
    4: [2,5,6],
    5: [2,3,4,6],
    6: [4,5]
};

console.log(breadth_first_search(graph, 1));