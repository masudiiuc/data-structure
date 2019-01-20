/**
 * The game of chess is played by 2 players on an 8-by-8 board.
 * Each player has a collection of pieces with different rules for moving.
 * During a turn, each player must move exactly one of their pieces.
 * For starters, let's learn about the rook (castle).
 * A rook can move as many spaces as it likes within its row and column, as long as nothing is in its way.
 * For example, if R is a rook, the squares with Xs represent valid moves.
 *
 *
 *  [ ][ ][ ][X][ ][ ][ ][ ]
 *  [ ][ ][ ][X][ ][ ][ ][ ]
 *  [ ][ ][ ][X][ ][ ][ ][ ]
 *  [X][X][X][R][X][X][X][X]
 *  [ ][ ][ ][X][ ][ ][ ][ ]
 *  [ ][ ][ ][X][ ][ ][ ][ ]
 *  [ ][ ][ ][X][ ][ ][ ][ ]
 *  [ ][ ][ ][X][ ][ ][ ][ ]
 *
 * If an enemy piece is in the rook's path, the rook may capture the enemy piece and move to its square.
 * If Es represent enemy pieces, the following squares (including E squares) are available:
 *
 *  [ ][ ][ ][E][ ][ ][ ][ ]
 *  [ ][ ][ ][X][ ][ ][ ][ ]
 *  [ ][ ][ ][X][ ][ ][ ][ ]
 *  [ ][E][X][R][X][F][ ][ ]
 *  [ ][ ][ ][X][ ][ ][ ][ ]
 *  [ ][ ][ ][X][ ][ ][ ][ ]
 *  [ ][ ][ ][E][ ][ ][ ][ ]
 *  [ ][ ][ ][ ][ ][ ][ ][ ]
 *
 * Note that if E belonged to the same player as R, its square would not be a valid move.
 *
 * Problem: Using the language with which you are most comfortable, write a Rook class with a method that, given a position on a board,
 * will return a list of all available moves.
 * You may use any data structure to represent the board and its relationship to its pieces.
 * Write some tests for the rook's "available moves" logic by populating a board with some enemy and/or friendly pieces.
 */



var _ = require('underscore');


function Queue () {
 
    this.init = function () {
        
    };
    this.enqueue = function () {
        
    }
    this.dequeue = function () {
        
    }
    
    this.size = function () {
        
    }
}



function is_valid_path(board, row, col) {
    
    var ememies = 'F';
    
    
    //if dead-end  -end of board
    
    if (row < 0 || row >= board.length || col < 0 || col >=board[0].lenth) {
        
        return false
    }
    
    //enemies blocker
    
    if (board[row][col] == enemies) {
        return false;
    }
    
    return true;
    
    
}

function start_exploring(board, row,col) {
    
}

function print_valid_paths(board, visitied, row, col) {
    
}



function find_available_moves(board, row,col) 
{
    var search_board_queue = new Queue();
    var visited = new Array(board.length).fill(false).map(
        () => new Array(board[0].length).fill(false);
    )
    

    var valid_row_move = [0, 0, 1, -1];
    var valid_col_move = [1, -1, 0, 0];
    
    
    search_board_queue.enqueue({0:row, 1: col});
    
    while(!_.isEmpty(search_board_queue)) {
        
        current_node = search_board_queue.dequeue();
        
        var cur_x = current_node[0];
        var cur_y = current_node[1];
        
        visited[x][y] = true;
        
        for(var i = 0; i < 4; i++) {
            
            var next_row = cur_x + valid_row_move[i];
            var next_col = cur_y + valid_col_move[i];
            
            while(next_row < 8 && next_row >= 0) {
                
                next_row ++;
            }
            
            if (is_valid_path(board, next_row, next_col)) {
                search_board_queue.enqueue(board, next_row, next_col);
                visited[next_row][next_col] = true;
            }
            
        }
        
    }
    
    
    return print_valid_paths(board,visited, row, col);
    
}


var board = new Array(8).fill(0).map(
        () => new Array(8).fill(0);
    
    board[3][1] = 'E';
    board[3][5] = 'F';
    board[6][3] = 'E';
    board[0][3] = 'E';
    

find_available_moves(board, 3, 3);

