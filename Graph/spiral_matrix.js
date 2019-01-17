function is_valid_path(graph, row, col) {
    // if dead-end  of array
    if (row < 0 || row >= graph.length || col < 0 || col >= graph[0].length) {
        return false;
    }

    return true;
}


function spiral_matrix(graph, row, col, visited) 
{
    if (!is_valid_path(graph, row, col) ) {
        return;
    }

    if (visited[row][col]) {
        return;
    }

    visited[row][col] = true;
    console.log(graph[row][col]);

    spiral_matrix(graph, row, col+1, visited);
    spiral_matrix(graph, row+1, col, visited);
    spiral_matrix(graph, row, col-1, visited);
    spiral_matrix(graph, row-1, col, visited);

}

function spiral_matrix_anti_clock_wise(graph, row, col, visited) 
{
    if (!is_valid_path(graph, row, col) ) {
        return;
    }

    if (visited[row][col]) {
        return;
    }

    visited[row][col] = true;
    console.log(graph[row][col]);

    spiral_matrix_anti_clock_wise(graph, row+1, col, visited);
    spiral_matrix_anti_clock_wise(graph, row, col+1, visited);
    spiral_matrix_anti_clock_wise(graph, row-1, col, visited);
    spiral_matrix_anti_clock_wise(graph, row, col-1, visited);

}


var graph = [
    [1,   2,  3, 4],
    [10, 11, 12, 5],
    [ 9,  8,  7, 6]
];

// var visited = new Array(graph.length).fill(false).map(
//     () => new Array(graph[0].length).fill(false)
// );

// spiral_matrix(graph, 0, 0, visited);
// console.log('>>>>');


var visited = new Array(graph.length).fill(false).map(
    () => new Array(graph[0].length).fill(false)
);
spiral_matrix_anti_clock_wise(graph, 0, 0, visited);