// ==========================================
// EJERCICIO: Consultar servicios con fetch, async/await y try/catch
// ==========================================
// Enunciado:
// Imagina que quieres traer una lista de publicaciones desde la API pública
// de prueba: "https://jsonplaceholder.typicode.com/posts"
//
// Tu tarea:
// 1. Crea una función flecha asíncrona `obtenerPublicaciones = async (url) => { ... }`.
// 2. Dentro de un bloque `try`, espera la petición con `const respuesta = await fetch(url);`.
// 3. Revisa si `respuesta.ok` es falso; si lo es, lanza un error con:
//    `throw new Error(`Error HTTP: ${respuesta.status}`);`
// 4. Si todo salió bien, convierte la respuesta con `await respuesta.json()` y devuélvela.
// 5. En el bloque `catch (error)`, muestra el mensaje de error con `console.error()`
//    y devuelve un arreglo vacío `[]` para que el programa no se rompa.
// 6. Crea otra función `async` llamada `mostrarTitulos = async () => { ... }` que llame
//    a `obtenerPublicaciones(...)` y use `.slice(0, 5)` y `.map()` para imprimir solo
//    los primeros 5 títulos (`post.title`).

// Escribe tu código aquí abajo:

// Función flecha asíncrona que consulta un endpoint REST y devuelve el JSON
const obtenerPublicaciones = async (url) => {
  try {
    // 1. Espera la respuesta HTTP desde la API
    const respuesta = await fetch(url);

    // 2. Valida que el estado HTTP sea exitoso (por ejemplo, evita tratar un 404 o 500 como datos válidos)
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    // 3. Parsea el cuerpo de la respuesta a un arreglo/objeto de JavaScript
    const publicaciones = await respuesta.json();
    return publicaciones;
  } catch (error) {
    // 4. Captura errores de red o el Error lanzado en `!respuesta.ok` y devuelve [] como respaldo
    console.error("Error al obtener las publicaciones:", error.message);
    return [];
  }
};

// Función asíncrona que consume `obtenerPublicaciones` y muestra los primeros 5 títulos
const mostrarTitulos = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts/999999";
  const publicaciones = await obtenerPublicaciones(url);

  const primerosCincoTitulos = publicaciones
    .slice(0, 5)
    .map((post) => post.title);

  console.log("Primeros 5 títulos:", primerosCincoTitulos);
};

mostrarTitulos();