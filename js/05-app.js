const producto = 'monitor 20 pulgadas';

console.log(producto.replace('pulgadas', '" '));
console.log(producto.slice(0,3));
console.log(producto.slice(2,1)); //no imprimer nada

//alternatica a slice,(diferencia es    ue substring aunque se ponga un numero mayor al inicio,substring lo modifica)
console.log(producto.substring(0,10))
console.log(producto.substring(2,1));
console.log(producto.charAt(4))