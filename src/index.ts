/*
    ===== Código de TypeScript =====
*/


const superHeroe ={
    nombre: 'Spiderman',
    edad: 30,
    direccion:{
        calle: 'Main St',
        pais: 'Usa',
        ciudad: 'NY'
    },

    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }    
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);

