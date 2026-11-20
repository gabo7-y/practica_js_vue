//Ejemplo 2: Desestructurar un Arreglo y Agregar un Elemento sin Mutar
const etiquetas = ['js', 'vue'];

// 1. Obtener el primer elemento del arreglo
const [primeraEtiqueta] = etiquetas;

// 2. Crear un nuevo arreglo agregando 'vite' al final sin modificar el original
const nuevasEtiquetas = [...etiquetas, 'vite'];

console.log(primeraEtiqueta); // 'js'
console.log(nuevasEtiquetas); // ['js', 'vue', 'vite']
console.log(etiquetas); // ['js', 'vue'] (sin cambios)