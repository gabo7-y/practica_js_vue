/*Crea practica_a.js. Declara const moneda = "$"; y una función flecha llamada precioConDescuento que reciba precio y 
descuento (por ejemplo 0.2), y devuelva con retorno implícito precio - (precio * descuento). Pruébala con 150 y 0.2, e 
imprímela con el símbolo de moneda.*/


const total = "Monto Total";
const MontoCalculado = (precio,descuento) => precio * descuento;
const todo = MontoCalculado(10,0.2);
console.log(`${total}: ${todo}`)