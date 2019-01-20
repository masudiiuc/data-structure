

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

///////////////////////////////////////////////////////////

function add_to_queue(queueList, row, col){
    var new_node = {0: row, 1: col};
    queueList.enqueue({0: row, 1: col});
    return queueList;
}

function is_valid_path(graph, visited, row, col) {
    // if dead-end  of array
    if (row < 0 || row >= graph.length || col < 0 || col >= graph[0].length) {
        return false;
    }

    // check user defined blocker
    if (graph[row][col] == 0) {
        return false;
    }

    // if already visited
    if (visited[row][col]) {
        return false;
    }

    return true;
}

function is_destination(graph, cur_row, cur_col) {
    return graph[cur_row][cur_col] == '9';
}

function find_nine_from_matrix(graph, start_point )
{
    var bfs_queue = new Queue();
    var visited = new Array(graph.length).fill(false).map(() => new Array(graph[0].length).fill(false));
    var distance = new Array(graph.length).fill(0).map(() => new Array(graph[0].length).fill(0));

    var row = start_point[0];
    var col = start_point[1];

    bfs_queue = add_to_queue(bfs_queue, row, col);

    var row_move_list = [0, 0, 1, -1];
    var col_move_list = [1, -1, 0, 0];

    while(bfs_queue.size() != 0) {
        //console.log('>>', distance);
        var current_node = bfs_queue.dequeue();
        var x = current_node[0];
        var y = current_node[1];

        visited[x][y] = true;

        //let's explore
        for(var i = 0; i< 4; i++) {
            var next_row = x + row_move_list[i];
            var next_col = y + col_move_list[i];

            if (is_valid_path(graph, visited, next_row, next_col)) {

                bfs_queue = add_to_queue(bfs_queue, next_row, next_col);
                distance[next_row][next_col] = distance[x][y] + 1;

                if (is_destination(graph, next_row, next_col)) {
                    
                    return distance[next_row][next_col];
                }
            }
        }
        
    }
    return -1;
}





var graph = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 0, 1, 9, 1],
    [1, 1, 0, 1, 1]
];

console.log(find_nine_from_matrix(graph, [0,0]));
