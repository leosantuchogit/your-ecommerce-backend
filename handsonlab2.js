class Contador {
    constructor(responsible){
        this.responsible = responsible
        this.countLocal = 0
    }

    static countGlobal = 0

    getResponsible = () => { return this.responsible } 
    getCountLocal = () => { return this.countLocal}
    getCountGlobal = () => { return Contador.countGlobal}

    count = () => {
        this.countLocal++
        Contador.countGlobal++
    }
}

const contador1 = new Contador('Simon')
const contador2 = new Contador('Pepe')
const contador3 = new Contador('Marcelo')

contador1.count()
contador2.count()
contador2.count()
contador2.count()
contador3.count()
contador3.count()

console.log(contador1.getResponsible(), contador1.getCountLocal());
console.log(contador2.getResponsible(), contador2.getCountLocal());
console.log(contador3.getResponsible(), contador3.getCountLocal());

console.log(Contador.countGlobal);
console.log(contador1.getCountGlobal());

