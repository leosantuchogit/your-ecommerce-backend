const mostrarLista = (array) => {

    if (array.length === 0) {
       return 'lista vacia'
   

     
    }

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element);
    }

    return `La longitud del array es ${array.length}`

}

console.log(mostrarLista([1, 2, 3]));
console.log(mostrarLista([]));
console.log(mostrarLista(['R2', 'x', 22]));
