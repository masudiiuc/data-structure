/**
 * DFS always use STACK data structure for Back Tracking
 * @param {*} graph 
 * @param {*} start_node 
 */
function depth_first_search(graph, node, visited)
{
    
    if (node == null) {
        return;
    }

    visited[node] = true;

    var neighbor = graph[node];
    for(var i = 0; i < neighbor.length; i++) {
        if (!visited[neighbor[i]]) {
            depth_first_search(graph, neighbor[i], visited);
            
        }
    }
    console.log(node);
}

var graph = {
    1: [2,3], 
    2: [1,4,5], 
    3: [5], 
    4: [2,5,6],
    5: [2,3,4,6],
    6: [4,5]
};
var visited = [];

console.log(depth_first_search(graph, 1, visited));