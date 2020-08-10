import * as math from './math.js'

console.log(typeof math)
console.log(math)
console.log(math.add === math.default)

const add = math.default
const addNamed = math.add
const subtract = math.subtract

console.log(addNamed === add)
console.log(add(1, 2))
console.log(subtract(1, 2))