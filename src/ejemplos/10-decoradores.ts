/*
    ===== Código de TypeScript =====
*/

function miDecorador<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
      newProperty = 'New Property'
      hello = 'Override'
  };
}

@miDecorador
class MiSuperClase {
    public miPropiedad: String = 'abc123';

    imprimir() {
        console.log('hola mundo')
    }
}


console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);