// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.
function combine(n1, n2, resultConversion) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    if (resultConversion === 'as-number') {
        result = +result;
    }
    else {
        result = result.toString();
    }
    return result;
}
console.log(combine(10, "10", 'as-number')); //1010 >> number
console.log(combine(20, 30, 'as-string')); //30 >> string
