const removeFromArray = function(array, ...args) {
    let argsRemoved = [];

    array.forEach((item) => {
        if(!(args.includes(item))) {
            argsRemoved.push(item);
        }
    });

    return argsRemoved;

};

// Do not edit below this line
module.exports = removeFromArray;
