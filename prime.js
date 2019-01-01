function print_prime(n) {

    while (n >= 1) {
        if (is_prime(n)) {
            console.log('>>', n);
        }
        n--;
    }
    
}

function is_prime(number) {

    for (i = 2; i <= Math.floor(number / 2); i++) {
        if (number % i == 0) {
            return false;
        }
    }

    return true; 

}

print_prime(100)