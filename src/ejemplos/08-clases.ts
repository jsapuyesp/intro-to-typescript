/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {

    constructor(
        public nombre: string,
        public direccion: string
    ) { }
}


class Heroe extends PersonaNormal {
    // alterEgo: string;
    // edad: number;
    // nombreReal: number;

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super( nombreReal, 'NY, USA' );
    }
}

const ironMan = new Heroe( 'Iron Man', 30, 'Tony Stark');

console.log(ironMan);