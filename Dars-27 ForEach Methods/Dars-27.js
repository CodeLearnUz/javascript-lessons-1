const ismlar = ['doston', 'sardor', 'donyor', 'farxod']
const newIsmlar = []

ismlar.forEach(function(ism) {
    const newIsm = ism.charAt().toUpperCase() + ism.slice(1).toLocaleLowerCase() + 'bek'
    newIsmlar.push(newIsm)
})

console.log(newIsmlar);