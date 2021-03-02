/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalle
}

interface Detalle{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Hola Mundo',
    detalles:{
        autor: 'Ed Sheeran',
        anio: 2016
    }
}

const {volumen, segundo, cancion, detalles } = reproductor;
const {autor, anio} = detalles;

/*console.log('El volumen es de: ', volumen);
console.log('El segundo es de: ', segundo);
console.log('La canción es de: ', cancion);
console.log('El autor es de: ', autor);
console.log('El año es de: ', anio);*/

const dbz: string[] = ['Goku','Vegeta','Trunks'];
const [p1, p2, p3] = dbz;

console.log('Personaje 1: ',dbz[0])
console.log('Personaje 2: ',p2)
console.log('Personaje 3: ',dbz[2])
