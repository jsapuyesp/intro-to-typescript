/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}


const reproductor: Reproductor = {
    volumen: 90,
    segundo: 30,
    cancion: 'Bad bunny',
    detalles: {
        autor: 'Bad bunny beibe',
        anio: 2015
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

console.log('El volumen actual de: ', volumen);
console.log('El segundo actual de: ', segundo);
console.log('La cancion actual de: ', cancion);
console.log('El autor es: ', autor);


// ------

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [, , fin] = dbz;

console.log(fin);