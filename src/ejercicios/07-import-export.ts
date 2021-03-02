/*
    ===== Código de TypeScript =====
*/
import { Producto , calcularISV } from "../ejercicios/06-desestructuracion-funcion";


const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];

const [total, isv] = calcularISV( carritoCompras)

console.log('Precio: $',total);
console.log('ISV: $',isv);