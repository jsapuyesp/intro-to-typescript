/*
    ===== Código de TypeScript =====
*/

export interface Producto{
    desc: string;
    precio: number;
}

const nokia: Producto = {
    desc: 'Nokia 1100',
    precio: 200
}

const ipad: Producto = {
    desc: 'Ipad Pro',
    precio: 600
}

export function calculaISV(prodcutos: Producto[]): number[] {
    let total = 0;

    prodcutos.forEach(({ precio }) => {
        total += precio
    })
    
    return [total, total * 0.15];
}

const articulos = [nokia, ipad];

const [total, isv] = calculaISV(articulos);

console.log('Total: ', total)
console.log('ISV: ', isv)