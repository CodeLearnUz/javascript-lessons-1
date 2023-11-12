// prompt

let ism = prompt('Ismingizni kiriting:')


let bir = ism.charAt().toUpperCase()
let davomi = ism.slice(1).toLowerCase()
let result = bir + davomi

alert(`Salom, ${result}`)