/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string,
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Juan',
}

const pasajero2: Pasajero = {
    nombre: 'Pasajero2',
    hijos: ['Hijo1', 'Hijo2']
}


function imprimeHIjos(pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimeHIjos(pasajero1);
imprimeHIjos(pasajero2);