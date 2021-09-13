function media() {
    var notaUm = parseFloat(document.getElementById("valorUm").value);
    var notaDois = parseFloat(document.getElementById("valorDois").value);
    var media = (notaUm + notaDois) / 2;
    if (media >= 6) {
        return document.getElementById("aprovado").innerHTML = (media) + " Aluno aprovado!";
    } else (media < 6)
    return document.getElementById("reprovado").innerHTML = (media) + " Aluno reprovado!";
}
