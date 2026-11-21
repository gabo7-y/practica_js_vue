// ==========================================
// EJERCICIO 2: Filtrar Publicaciones Recientes y Extraer sus Títulos
// ==========================================
// Enunciado:
// Declara un arreglo `publicaciones` con objetos que tengan `titulo`,
// `visitas` y `publicada` (true o false), por ejemplo:
// - "Nuevo portal de clientes" (120 visitas, publicada: true)
// - "Borrador mantenimiento" (15 visitas, publicada: false)
// - "Guía de soporte" (85 visitas, publicada: true)
//
// Tu tarea:
// 1. Usa .filter() para conservar solo las publicaciones que estén `publicada: true`
//    y tengan `visitas` mayores o iguales a `100`.
// 2. Encadena .map() para obtener un nuevo arreglo que contenga solo los `titulo`
//    (cadenas de texto) de esas publicaciones.
// 3. Imprime el arreglo resultante con `console.log()` y verifica que `publicaciones`
//    no haya cambiado.

// Escribe tu código aquí abajo:

const publicaciones = [
    {nombre:'Nuevo Portal de Clientes', vistas:120, publicada: true},
    {nombre:'Borrador Mantenimiento', vistas:15, publicada: false},
    {nombre:'Guia de Soporte', vistas:85 ,publicada: true}
]

const publicacionesPublicadas = publicaciones
    .filter((publicacion)=>publicacion.publicada === true && publicacion.vistas > 5)
    .map((publicacion)=> `${publicacion.nombre}`)

console.log(publicacionesPublicadas)
console.log(publicaciones)