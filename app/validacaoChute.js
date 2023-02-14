function verificaSeOChutePossuiValorValido (chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += "<div>Valor inválido</div>"
        return
    }

    if (numeroForMaiorOuMenorQueOPermitido(numero)) {
        elementoChute.innerHTML += "<div>Valor Inválido: somente entre 1 e 1000 é permitido</div>"
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente"
            class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }

}


function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", e => {
    if (e.target.id == "jogar-novamente") {
        window.location.reload()
    }
})