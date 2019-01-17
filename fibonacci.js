// memorization
// dynamic programming


// recursive problem (traditional) which create repated call stack problem. 
function x_print_fibonnacci(n) 
{
    if (n <= 1) {
        return n;
    }

    return print_fibonnacci(n-1) + print_fibonnacci(n-2);
    
}

var cache = {}; // space issue
function xx_print_fibonnacci(n) 
{
    if (n <= 1) {
        return n;
    }

    var a = cache[n-1];
    if (!a) {
        a = xx_print_fibonnacci(n-1);
        cache[n-1] = a; 
    }

    var b = cache[n-2];
    if (!b) {
        b = xx_print_fibonnacci(n-2);
        cache[n-2] = b; 
    }

    return a + b;
}

//using space optimization
function print_fibonnacci(n) 
{
    var a = 0;
    var b = 1;
    var fib = 0 ;

    for( var i = 2; i <= n; i++) {
        fib = a+b;
        a = b;
        b = fib;
    }
    return fib;

}

console.log(print_fibonnacci(100));

