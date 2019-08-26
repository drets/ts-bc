import VirtualMachine from './vm'
import { gen } from './gen'

const code = `
var a = 0;
function f() { a = 1 }
f();
a;`
const [op, value] = gen(code)

const vm = new VirtualMachine(op, value)

console.log(`code: ${code}`)
console.log(`vm: ${vm.exec().value.value}`)
console.log(`eval: ${eval(code)}`)
