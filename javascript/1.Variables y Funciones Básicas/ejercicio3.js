/*Crea practica_c.js. Declara const perfilUsuario = { rol: "Visitante", verificado: false }; 
y una función flecha verificarUsuario = (usuario) => { ... } que ponga usuario.verificado = true y 
retorne "Usuario verificado (" + usuario.rol + ")". Dentro de un bloque if (true), declara let notaInterna = "Revisar permisos";
e imprímela ahí mismo. Fuera del if, ejecuta verificarUsuario(perfilUsuario), muestra perfilUsuario actualizado en consola y 
comprueba qué ocurre si intentas acceder a notaInterna fuera del bloque.*/

const  perfilUsuario = {rol:'Visitante', verificado:false};

const estadoUsuario = (usuario) =>{
    if (usuario.verificado === true){
        return `El usuario: ${usuario.rol}, Esta verificado`;
    }
    return `El usuario: ${usuario.rol}, No esta verificado`;
    }   

console.log(estadoUsuario(perfilUsuario))

const verificarUsuario = (usuario) =>{
    usuario.verificado = true;
    return `El usuario: ${usuario.rol}, Ha sido verificado`;
}

console.log(verificarUsuario(perfilUsuario))
console.log(estadoUsuario(perfilUsuario))