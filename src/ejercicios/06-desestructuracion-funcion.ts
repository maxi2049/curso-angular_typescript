/*
    ===== Código de TypeScript =====
*/


interface Producto{
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia',
    precio: 150
}

const tablet: Producto = {
    desc: 'Ipad Air',
    precio: 350
}

function calcularISV(productos: Producto[]): [number, number] {
    let total = 0;

    productos.forEach(({precio}) =>{
        total += precio;
    })

    return [total, total * 0.21]
}

const prod = [telefono, tablet];
const [total, isv] = calcularISV(prod);

console.log('Precio: $',total);
console.log('ISV: $',isv);