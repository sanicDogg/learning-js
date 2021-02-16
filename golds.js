//var golds = [10,1000,2,1]
var g = [4,7,2,9,5,2];
var balanceA = 0, balanceB = 0;

while (g.length > 0) {
    turnA();
    if (g.length === 0) break;
    turnB();
}

console.log([balanceA, balanceB])

function turnA() {
    let first = g[0], second = g[1], third = g[g.length - 2], last = g[g.length - 1];
    if (first < last) {
        if (last > third || third < second) { takeLast("A") }
        else { takeFirst("A") }
    }
    else {
        if (first > second || second < third) { takeFirst("A") } // TAKING first
        else { takeLast("A") } // TAKING last
    }
}

function takeFirst(who) {
    let first = g[0];
    if (who === "A") balanceA += first;
    else balanceB += first;
    g.splice(0, 1)

    //console.log(who, "TAKE first")
}

function takeLast(who) {
    let last = g[g.length - 1];
    if (who === "A") balanceA += last;
    else balanceB += last;
    g.splice(g.length - 1, 1)

    //console.log(who, "TAKE last")
}

function turnB() {
    let first = g[0], second = g[1], third = g[g.length - 1], last = g[g.length - 2];
    if (first < last) {
        if (last > third || third < second) { takeLast("B") }
        else { takeFirst("B") }
    }
    else {
        if (first > second || second < third) { takeFirst("B") } // TAKING first
        else { takeLast("B") } // TAKING last
    }
}
