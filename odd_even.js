function print_even (n)
{
    if (n <= 2){
        return false;
    }

    for(i = 2; i <= n; i+2) {
        is_even(n);
    }
}

function is_even(val) {
    if ( val%2 == 0) {
        console.log(val);
    }
}


print_even(10);