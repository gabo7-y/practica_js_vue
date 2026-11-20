//Ejemplo 1: Extraer Propiedades y Combinar Objetos con Propagación
const usuario = { id: 101, nombre: 'Lucía', activa: true };

// 1. Extraer propiedades en variables independientes
const { nombre, activa } = usuario;

// 2. Crear un nuevo objeto sin mutar el original y sobrescribir 'activa'
const usuarioActualizado = { ...usuario, activa: false };

console.log(nombre); // 'Lucía'
console.log(activa); // true
console.log(usuarioActualizado); // { id: 101, nombre: 'Lucía', activa: false }
console.log(usuario); // { id: 101, nombre: 'Lucía', activa: true } (sin cambios)