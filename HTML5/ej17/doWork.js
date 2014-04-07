function calculaPrimos(numero, marca) {
    var primo;

    if (numero == 0 || numero == 1) {
        arrayPrimos[totalPrimos] = numero;
        totalPrimos++;
    } else {

        for (var j = 2; j < numero; j++) {
            primo = true;
            if (numero % j == 0) {
                console.log("NUMERO NO PRIMO " + numero);
                primo = false;
                break;
            }
        }

        if (primo) {
            console.log("NUMERO PRIMO " + numero);
            return numero;

        } else {
            return marca;
        }

    }


}



this.addEventListener('message', function(e) {
    var data = e.data;
    switch (data.cmd) {
        case 'calcula':

            var marca = data.marca || "";

            var num = parseInt(data.msg);
            str = "1";
            for (var n = 2; n < num; n++) {
                str = str + ' ' + calculaPrimos(n, marca);
            }



            this.postMessage('NUMEROS PRIMOS: ' + str);
            break;

        default:
            this.postMessage('Unknown command: ' + data.msg);
    };
}, false);