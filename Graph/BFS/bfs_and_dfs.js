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


function bfs(graph, start_point) {
    var search_queue  = new Queue();
    var visited       = []

    search_queue.enqueue(start_point);

    while(search_queue.size() != 0) {

        var node = search_queue.dequeue();
        visited.push(node);

        var neighbor = graph[node];
        console.log(visited);
        for(var i = 0; i<neighbor.length; i++) {
            if(visited.indexOf(neighbor[i]) != -1 ){
                search_queue.enqueue(neighbor[i]);
            }
        }
    }

    return visited;
}

var graph = {
    1: [2, 3], 
    2: [1,4,5], 
    3: [5], 
    4: [2,5,6],
    5: [2,3,4,6],
    6: [4,5]
};

console.log(bfs(graph, 1));