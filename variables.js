let a = [1, 2, 3]
let b = [...a] // copia el contenido de "a" sin modificar "a", es como que ocupa otro lugar en memoria

b.push(4)

console.log(a);
console.log(b);