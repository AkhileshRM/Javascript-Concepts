let value =  "" || 11  // false, ""  is not accepted by || operator
console.log(value)

let value1 =  "" ?? 11  // false, "" is accepted by ?? operator Coalescing operator
console.log(value1)