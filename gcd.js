function print_gcd(arr)
{
    var gcd_number = arr[0];

    for(var i = 1; i < arr.length; i++) {
        gcd_number = gcd_update(arr[i], gcd_number);
    }
    return gcd_number;
}

function gcd(number, divider) {
    var reminder = number % divider;

    if (reminder == 0) {
        return divider;
    }

    return gcd(divider, reminder);
}


function gcd_update(number, divider) {
    

    if (divider == 0) {
        return number;
    }

    return gcd_update(divider, number % divider);
}


console.log(print_gcd([27,99, 108]));