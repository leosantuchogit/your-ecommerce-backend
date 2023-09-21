class Person {
    name = 'Leonardo'

    constructor(name) {
        this.name = name
        this.age = 30
        console.log('se creo una instancia de Persona');
    }

    // atributo global de la clase Persona
    static specie = 'humano'

    speak() {
        console.log(`My name is ${this.name} y soy ${Person.specie}`);
    }

    walk = () => {
        console.log('I am walking...');
    }
}

const jorge = new Person('Pepe') // creando una instancia de Persona
const marcos = new Person('Luis')


jorge.age++

console.log(jorge)
console.log(marcos);

jorge.speak()
marcos.speak()

jorge.walk()
marcos.walk()

console.log(Person.specie);