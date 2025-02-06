function numerosPrimos(n) {
    let mensaje;
    let divisores = 0;
    
    for (let i = 1; i < n; i++) {
        let reciduo = n % i;
        if (reciduo == 0) {
            divisores++;
        }
    }
    if (divisores == 2) {
        return "El numero" + n + "es primo";

    } else {
        return "El numero" + n + "no es primo";

    }
    
}
console.log(numerosPrimos(10))