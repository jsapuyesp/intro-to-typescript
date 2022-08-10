/*
    ===== Código de TypeScript =====
*/

function sumar(a?: number, b?: number):number {
    return a + b;
}

const sumaFlecha = (a?: number, b?: number): number => { return a + b }

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

//Siempre colocar los tipos en las funciones y retornos.


interface PersonajeLOR {
    nombre?: string,
    pv?: number,
    mostrarHp: () => void;
}

function curar(personaje:PersonajeLOR , curarX:number): void {
    personaje.pv += curarX
}

const nuevoPersonaje: PersonajeLOR = {
    nombre : 'Persojane',
    pv: 30,
    mostrarHp() {
        console.log('Puntos de vida ', this.pv);
    }
}

console.log('Vida personaje actual: ' , nuevoPersonaje.pv);

curar(nuevoPersonaje, 10);

console.log('Vida personaje actual: ' , nuevoPersonaje.pv);