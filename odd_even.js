function print_even (n)
{
    console.log('--------');
    for(var i = 2; i <= n; i = i + 2) {
        is_even(i);
    }
}

function is_even(val) {
    if ( val%2 == 0) {
        console.log(val);
    }
}

print_even(1);
print_even(10);