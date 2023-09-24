const repeatString = function(string, n) {
    let newstr = "";
    if (n < 0) {
        return "ERROR";
    }

    for (let i = 0; i < n; i++) {
        newstr += string;
    }
    return newstr;
};

// Do not edit below this line
module.exports = repeatString;
