/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(30);
let soyArreglo = queTipoSoy([1, 2, 3, 4])

let soyExplicito = queTipoSoy<number>(100);