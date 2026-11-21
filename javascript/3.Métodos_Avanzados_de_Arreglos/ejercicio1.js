// ==========================================
// EJERCICIO 1: Servicios Activos con Formato de Tarjeta
// ==========================================
// Enunciado:
// Declara un arreglo `servicios` con varios objetos que tengan `nombre`,
// `precio` y `activo` (booleano true o false), por ejemplo:
// - "Soporte Técnico" ($45, activo: true)
// - "Migración Legacy" ($120, activo: false)
// - "Optimización Web" ($80, activo: true)
//
// Tu tarea:
// 1. Usa .filter() para quedarte únicamente con los servicios donde `activo` sea `true`.
// 2. Encadena .map() para transformar cada servicio activo en un texto
//    como "Optimización Web - $80".
// 3. Guarda el resultado en una constante y muéstralo con `console.log()`.

// Escribe tu código aquí abajo:

const servicios = [
    {nombre:`Soporte Tecnico`,precio:45,activo:true},
    {nombre:`Migracion Legacy`,precio:120,activo:false},
    {nombre:`Optimizacion Web`,precio:80,activo:true},
]

const serviciosActivos = servicios
    .filter((servicios)=>servicios.activo === true)
    .map((servicios)=> `${servicios.nombre} - $${servicios.precio}`);

console.log(serviciosActivos);