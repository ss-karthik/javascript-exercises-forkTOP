const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }

    p1 = 0;
    p2 = 1;
    let currentValue = 0;

    for (let i = 1; i < n; i++) {
        currentValue = p1+p2;
        p1 = p2;
        p2 = currentValue;
    }

    return currentValue;
};

// Do not edit below this line
module.exports = fibonacci;
