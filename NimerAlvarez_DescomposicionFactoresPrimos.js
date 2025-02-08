
const readline= require("readline");

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


interfazCaptura.question("Ingresa un número entero: ",function (numero){
    let divisor=2;
    let resultado=numero + " = ";
    while(numero > 1){
        while(numero % divisor == 0){
            resultado += divisor;
            numero=numero/divisor;
            if(numero>1){
                resultado +=" X ";
            }
        }
        divisor++;
    }
    console.log(resultado);
    interfazCaptura.close();
});