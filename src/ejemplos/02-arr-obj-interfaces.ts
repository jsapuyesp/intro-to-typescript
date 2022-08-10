/*
    ===== Código de TypeScript =====
*/
let habilidades: string[] = ['HOLA']; 

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[]
    puebloNatal?: string;
}

const personaje : Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter']
}

personaje.puebloNatal = 'Un pueblo';


console.table(personaje);