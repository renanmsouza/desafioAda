// Questões Multipla Escolha //
/*

4. E
5. A
6. B

*/

// Questão 1
function converteHoras(horaAmPm) {
    const elementosHora = horaAmPm.split(':');
    const amPm = elementosHora[2].slice(2, 4);
    elementosHora[2] = elementosHora[2].slice(0, 2);

    let horaConvertida = '';
    if (amPm === 'PM') {
        let hora = +elementosHora[0] + 12
        horaConvertida = horaConvertida + String(hora);
    } else {
        horaConvertida = horaConvertida + elementosHora[0];
    }

    horaConvertida = horaConvertida + ':' + elementosHora[1]
        + ':' + elementosHora[2]

    return horaConvertida;
}

// Questão 2
function quantidadePalavras(texto) {
    let totalPalavras = 1;

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        if ((letra >= 'A') && (letra <= 'Z')) {
            totalPalavras++
        }
    }

    return totalPalavras;
}

// Questão 3
function naoRepetidos(numeros) {
    const repetem = {};
    for (const numero of numeros) {
        if (repetem[numero]) {
            repetem[numero]++;
        } else {
            repetem[numero] = 1;
        }
    }
    const solitarios = numeros.filter(numero => repetem[numero] === 1);
    return solitarios;
}