/*Crea practica_b.js. Declara let presupuestoGastado = 0; y const presupuestoMaximo = 1000;. Escribe una función flecha 
estadoPresupuesto que reciba gastado y devuelva "Dentro del presupuesto" si es menor o igual a presupuestoMaximo, 
o "Presupuesto excedido" si lo supera. Suma 450 y luego 600 a presupuestoGastado, mostrando el estado después de cada suma.*/

let presupuestoGastado = 0;
const presupuestoMaximo  = 1000;

const estadoPresupuesto = (presupuestoGastado) => {
    if (presupuestoGastado <= presupuestoMaximo) {
        return "Dentro del presupuesto";
    }
    return "Fuera del presupuesto";
}

presupuestoGastado += 450;
console.log(`Presupuesto Gastado:${presupuestoGastado} -> Estado:${estadoPresupuesto(presupuestoGastado)}`);

presupuestoGastado += 600;
console.log(`Presupuesto Gastado:${presupuestoGastado} -> Estado:${estadoPresupuesto(presupuestoGastado)}`);