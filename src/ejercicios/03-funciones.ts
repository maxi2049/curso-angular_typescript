/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b:number): number {
    return a + b;    
}

const sumaFlecha = (a:number, b:number): number =>{
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;    
}

interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, vidaCurarX: number): void{
    personaje.pv += vidaCurarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida: ',this.pv);
    }
}

curar(nuevoPersonaje,20);
nuevoPersonaje.mostrarHp();