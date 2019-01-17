function floyd_warshall_alorithm($graph, $v, $inf) {

    var $dist = new Array($v).fill(0).map( () => new Array($v).fill(0) );

    //make a copy of the $graph to $dist
    for(var i = 0 ; i < $v; i++) {
        for(var j = 0 ; j < $v; j++) {
            $dist[i][j] = $graph[i][j];
        }
    }

    for (var k=0; k < $v; k++) {
        for(var i = 0 ; i < $v; i++) {
            for(var j = 0 ; j < $v; j++) {
                if ($dist[i][k] + $dist[k][j] < $dist[i] [j]) {
                    if ($dist[i][k] != '9999' && $dist[k][j] != '9999'){
                        $dist[i][j] = $dist[i][k] + $dist[k][j];
                    }
                }
            }
        }   
    }

    return $dist;
}


function floyd_warshall($graph){

    var $v   = $graph.length;
    var $inf = '9999'

    return floyd_warshall_alorithm($graph, $v, $inf);

}



var graph = [
    [0,   5,  '9999', 10], 
    ['9999', 0,   3, '9999'], 
    ['9999', '9999', 0,   1], 
    ['9999', '9999', '9999', 0] 
]; 

result = floyd_warshall(graph);
console.log(result);