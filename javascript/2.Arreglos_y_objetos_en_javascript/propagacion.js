// ==========================================
// 1. PROPAGACIÓN EN ARREGLOS ([...])
// ==========================================
// El operador '...' expande los elementos de un arreglo dentro de otro arreglo nuevo,
// evitando modificar (mutar) el arreglo original.

const seccionesBase = ["Inicio", "Nosotros"];
const seccionesExtra = ["Servicios", "Contacto"];

// Combinamos dos arreglos y añadimos un elemento nuevo al final sin alterar los originales
const menuCompleto = [...seccionesBase, ...seccionesExtra, "Blog"];

console.log("Menú completo:", menuCompleto);
// Salida: ['Inicio', 'Nosotros', 'Servicios', 'Contacto', 'Blog']

console.log("seccionesBase sigue intacto:", seccionesBase);
// Salida: ['Inicio', 'Nosotros']

// También sirve para hacer una copia independiente de un arreglo
const copiaMenu = [...menuCompleto];
console.log("¿Es un arreglo distinto en memoria?", copiaMenu !== menuCompleto);
// Salida: true

// ==========================================
// 2. PROPAGACIÓN EN OBJETOS ({...})
// ==========================================
// En objetos, '...' copia las propiedades enumerables hacia un objeto nuevo.
// Si colocas una propiedad DESPUÉS de '...objeto', su valor sobrescribe al original.

const tarjetaServicio = {
  id: 1,
  titulo: "Desarrollo Web",
  destacado: false,
};

// Creamos un nuevo objeto cambiando 'destacado' a true sin mutar 'tarjetaServicio'
const tarjetaDestacada = {
  ...tarjetaServicio,
  destacado: true,
};

console.log("Tarjeta destacada:", tarjetaDestacada);
// Salida: { id: 1, titulo: 'Desarrollo Web', destacado: true }

console.log("tarjetaServicio sigue intacta:", tarjetaServicio);
// Salida: { id: 1, titulo: 'Desarrollo Web', destacado: false }

// Cuidado con el ORDEN: si pones una clave ANTES de '...objeto', el objeto original gana
const ordenInvertido = {
  destacado: true,
  ...tarjetaServicio, // como tarjetaServicio.destacado es false, sobrescribe al true anterior
};

console.log("Con orden invertido (gana lo que viene después):", ordenInvertido);
// Salida: { id: 1, titulo: 'Desarrollo Web', destacado: false }