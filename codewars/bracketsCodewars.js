// Given a string, return the minimal number of parenthesis reversals needed to make balanced parenthesis.
//
//     For example:
//
// solve(")(") = 2 Because we need to reverse ")" to "(" and "(" to ")". These are 2 reversals.
// solve("(((())") = 1 We need to reverse just one "(" parenthesis to make it balanced.
// solve("(((") = -1 Not possible to form balanced parenthesis. Return -1.

function solve(s){
    if (s.length % 2 !== 0) return -1;

    var openedCount = 0
    var swapped = 0;
    var count;

    for (let i = 0; i < s.length; i++) {
        let bracket = s[i];
        if (bracket === "(") {
            openedCount++;
        }
        if (bracket === ")") {
            if (openedCount > 0)
                openedCount--;
            else {
                openedCount++;
                swapped++;
            }
        }
    }
    count = openedCount / 2 + swapped;
    return count;
}

console.log(solve("(((((((()()()("))
