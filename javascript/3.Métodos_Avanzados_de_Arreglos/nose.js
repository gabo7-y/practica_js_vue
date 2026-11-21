const numeros_impares = [1, 3, 5, 7, 9];

const numeros_pares = numeros_impares.map((numeros)=>numeros*2);

console.log(`${numeros_pares}`);

const productos = [
  { nombre: "Teclado", precio: 45, stock: 5 },
  { nombre: "Ratón", precio: 25, stock: 0 },
  { nombre: "Monitor", precio: 200, stock: 3 },
];

// 1. Filtramos solo los productos con stock mayor a 0
// 2. Transformamos cada producto disponible en un texto formateado
const etiquetasDisponibles = productos
  .filter((producto) => producto.stock > 0)
  .map((producto) => `${producto.nombre} ($${producto.precio})`);

console.log(etiquetasDisponibles);
// Salida: ["Teclado ($45)", "Monitor ($200)"]

//console.log(productos);
// El arreglo original sigue intacto