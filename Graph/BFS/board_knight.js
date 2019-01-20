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


function is_valid_path(board, row, col)
{
    if (row < 0 || row > board.length || col < 0 || col > board[0].length) {
        return false;
    }

    return true;
}

function is_destination(board, row, col) {
    return board[row][col] == 9;
}

function add_to_queue(search_board_queue, row, col){
    search_board_queue.enqueue({0: row, 1: col});
    return search_board;
}

function print_path(destination_board_path, dest_row, dest_col, st_row, st_col)
{
    console.log('x: ',dest_row,'y:', dest_col );

    if(dest_row == st_row && dest_col == st_col) {
        return;
    }

    print_path(destination_board_path, destination_board_path[dest_row][dest_col].x, destination_board_path[dest_row][dest_col].y, st_row, st_col);
    
}

function find_valid_knight_moves(board, start_point)
{
    var destination_board_path = new Array(8).fill({}).map(
        () => new Array(8).fill({})
    );
    var visited_board_path = new Array(8).fill(false).map(
        () => new Array(8).fill(false)
    );

    var distance = new Array(8).fill(0).map(() => new Array(8).fill(0));


    var valid_row_move = [-1, 1, -1, 1, -2, 2,  2,  -2 ];
    var valid_col_move = [-2,-2,  2 ,2,  1,  1, -1, -1 ];

    var row = start_point[0];
    var col = start_point[1];

    var search_board_queue = new Queue();
    
    search_board_queue.enqueue({0:row, 1:col});

    while(search_board_queue.size() !== 0) {

        var current_board_position = search_board_queue.dequeue();
        var cur_row = current_board_position[0];
        var cur_col = current_board_position[1];

        visited_board_path[cur_row][cur_col] = true;

        //explore
        for(var i = 0; i < valid_row_move.length; i++) {

            var next_row = cur_row + valid_row_move[i];
            var next_col = cur_col + valid_col_move[i];

            if (is_valid_path(board, next_row, next_col)) {


                if (!visited_board_path[next_row][next_col]) {

                    distance[next_row][next_col] = distance[cur_row][cur_col] + 1;
                    destination_board_path[next_row][next_col] = {'x': cur_row, 'y': cur_col};

                    
                    search_board_queue.enqueue({0:next_row, 1: next_col});                

                }

                if (is_destination(board, next_row, next_col)) {
                    console.log('\n# distance:\n', distance);

                    console.log('\n# Destination Position : ', next_row , ' ', next_col, '\n# Total distance: ', distance[next_row][next_col]);

                    console.log('# distance Path:')
                    
                    return print_path(destination_board_path, next_row, next_col, row, col);
                }
            }
        }// end of explore

    }

    return -1;
}





var board = new Array(8).fill(0).map(
    () => new Array(8).fill(0)
);

board[4][3] = 9;

console.log(board);

var result = find_valid_knight_moves(board, [0,0]);





