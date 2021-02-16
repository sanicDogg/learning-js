// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
//
//     There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function proceed(num) {
    var firstNum;

    num = num.split("");

    // DEBUG
    console.log(this.firstNum);
    console.log(num[1])
    // -------

    if (num[0] === '*')
        return this.firstNum * num[1];
    if (num[0] === '+') {
        return (Number)(this.firstNum) + (Number) (num[1]);
    }
    if (num[0] === '-')
        return this.firstNum - num[1];
    if (num[0] === '/')
        return Math.floor(this.firstNum / num[1]);
}

// MAIN ACTION
console.log(seven(plus(zero())))

function plus(num) { return "+" + num}
function minus(num) { return "-" + num}
function times(num) { return "*" + num }
function dividedBy(num) { return "/" + num }

function zero(arg) {
    const n = 0;
    if (arguments.length === 0) return n;
    else {
        return proceed.call({firstNum: n}, arg)
    }
}

function one(arg) {
    const n = 1;
    if (arguments.length === 0) return n;
    else {
        return proceed.call({firstNum: n}, arg)
    }
}

function two(arg) {
    const n = 2;
    if (arguments.length === 0) return n;
    else {
        return proceed.call({firstNum: n}, arg)
    }
}

function three(arg) {
    const n = 3;
    if (arguments.length === 0) return n;
    else {
        return proceed.call({firstNum: n}, arg)
    }
}

function four(arg) {
    const n = 4;
    if (arguments.length === 0) return n;
    else {
        return proceed.call({firstNum: n}, arg)
    }
}

function five(arg) {
    const n = 5;
    if (arguments.length === 0) return n;
    else {
        return proceed.call({firstNum: n}, arg)
    }
}

function six(arg) {
    const n = 6;
    if (arguments.length === 0) return n;
    else {
        return proceed.call({firstNum: n}, arg)
    }
}

function seven(arg) {
    const n = 7;
    if (arguments.length === 0) return n;
    else {
        return proceed.call({firstNum: n}, arg)
    }
}

function eight(arg) {
    const n = 8;
    if (arguments.length === 0) return n;
    else {
        return proceed.call({firstNum: n}, arg)
    }
}

function nine(arg) {
    const n = 9;
    if (arguments.length === 0) return n;
    else {
        return proceed.call({firstNum: n}, arg)
    }
}