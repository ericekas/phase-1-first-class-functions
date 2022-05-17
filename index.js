
function receivesAFunction(cb) {
    cb()
}

function returnsANamedFunction() {
    function divide(x) {return x / 2}
    return divide
}

function returnsAnAnonymousFunction() {
    return function() {return 'hi'}
}