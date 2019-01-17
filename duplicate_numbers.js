/**
 * Find the start and end point of a duplicate numbers in a sorted array
 * 
 */

function print_duplicate_range(arr, expected_number) {
    if (arr.length < 1) {
        return false;
    }

    
    var start_index = get_lower_index(arr, expected_number, 0, arr.length);
    var end_index = get_higher_index(arr, expected_number, 0, arr.length);

    return [start_index, end_index];
}

function get_lower_index(arr, expected_number, start, end) {

    var mid = Math.floor((start + end) / 2);

    if (start >= mid) {
        return (arr[start] == expected_number) ? start : -1;
    }

    if (arr[start] == expected_number && arr[end] == expected_number) {
        return start;
    }

    // mid is equal to value and previous mid is less then value
    if (arr[mid] == expected_number && arr[mid - 1] < expected_number) {

        return mid;

        // mid is less then value    
    } else if (arr[mid] < expected_number) {

        return get_lower_index(arr, expected_number, mid, end);
    }

    // otherwise 
    return get_lower_index(arr, expected_number, 0, mid);
}

function get_higher_index(arr, expected_number, start, end) {
    var mid = Math.floor((start + end) / 2);

    if (start >= mid) {
        return (arr[start] == expected_number) ? start : -1;
    }

    if (arr[start] == expected_number && arr[end] == expected_number) {
        return end;
    }

    // mid is equal to value and previous mid is greater then value
    if (arr[mid] == expected_number && arr[mid + 1] > expected_number) {

        return mid;

        // mid is greater then value    
    } else if (arr[mid] > expected_number) {

        return get_higher_index(arr, expected_number, start, mid);
    }

    // otherwise 
    return get_higher_index(arr, expected_number, mid, end);
}


var data = [1, 2, 3, 4, 4, 4, 5, 5, 6],
    data_2 = [1, 2, 3, 4, 4, 4, 5, 5, 6, 11, 23, 24, 24, 24, 24, 24, 24, 27, 28, 28, 29, 30, 39, 41, 41];

var data_3 = [4, 4, 4, 4, 4];
var data_4 = [4, 4, 4, 4, 4,5];
var data_5 = [1, 4, 4, 4, 4, 4];
var data_6 = [2, 2, 2, 2, 2, 2];


var result = [];

result = print_duplicate_range(data, 4); // 3,5
console.log(result);

result = print_duplicate_range(data_2, 24); // 11,16
console.log(result);

result = print_duplicate_range(data_3, 4); // 0,4
console.log(result);

result = print_duplicate_range(data_4, 4); // 0,4
console.log(result);

result = print_duplicate_range(data_5, 4); // [1,5]
console.log(result);

result = print_duplicate_range(data_6, 4); // [-1,-1]
console.log(result);
