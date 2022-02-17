let precioInicial= prompt("Introducir el precio inicial (ejemplo 1560)");
let descuento = prompt("Introducir el descuento, sin incluir el '%' (ejemplo 18 o 10)");
let precioFinal = parseFloat(precioInicial)*(1-parseFloat(descuento)/100);
alert(`El precio final es de ${precioFinal} pesos`);
console.log(`El precio final es de ${precioFinal} pesos`);