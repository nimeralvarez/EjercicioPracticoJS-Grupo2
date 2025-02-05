function factorial(numero){
    if (numero < 0) return "No existe factorial para numeros negativos"
    if (numero === 0 || numero === 1) return 1;
    return numero * factorial(numero - 1);
}

console.log(factorial(6));
