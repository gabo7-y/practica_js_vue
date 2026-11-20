// ==========================================
// 1. DESESTRUCTURACIÓN DE ARREGLOS ([])
// ==========================================
// Los arreglos no tienen nombres de claves: sus elementos se ubican por POSICIÓN (0, 1, 2...).
// Tú eliges el nombre de cada variable y JavaScript asigna según el orden de izquierda a derecha.
const etiquetas = ["js", "vue", "vite"];

const [primera, segunda] = etiquetas;
console.log("Primera etiqueta (índice 0):", primera); // 'js'
console.log("Segunda etiqueta (índice 1):", segunda); // 'vue'

// Si quieres saltar un elemento, dejas un espacio vacío con una coma:
const [, segundoElemento] = etiquetas;
console.log("Saltando el primero, el segundo es:", segundoElemento); // 'vue'

// ==========================================
// 2. DESESTRUCTURACIÓN DE OBJETOS ({})
// ==========================================
// Los objetos sí tienen pares clave: valor.
// Al desestructurar, el nombre de la variable DEBE coincidir con la clave del objeto.
const servicio = {
  id: 1,
  titulo: "Soporte Técnico",
  precio: 45,
};

// 'titulo' y 'precio' coinciden exactamente con las claves de `servicio`
const { titulo, precio } = servicio;
console.log(`Servicio: ${titulo} - Precio: $${precio}`);

// Si quieres sacar una clave pero guardarla con otro nombre de variable, usas dos puntos (:)
// Sintaxis: const { claveOriginal: nuevoNombreVariable } = objeto;
const { titulo: nombreServicio } = servicio;
console.log("Renombrado a nombreServicio:", nombreServicio); // 'Soporte Técnico'