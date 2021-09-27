function calcularMedia (nota1, nota2, nota3) {
    let t = document.getElementById("nota#1");
    nota1 = parseInt(t.value);
    let p = document.getElementById("nota#2");
    nota2 = parseInt (p.value);
    let s = document.getElementById("nota#3");
    nota3 = parseInt(s.value);

    media = (nota1 + nota2 + nota3)/3;
    if (media > 8) {
        resultado.innerHTML = "Excelente";
    }
    else if (media >= 5 && media <=8) {
        resultado.innerHTML = "Aprobado";
    }
    else if (media < 5) {
        resultado.innerHTML = "Suspendido";
    }
}
var resultado = document.getElementById("resultado");
var b = document.getElementById("entrada");
b.addEventListener("click", calcularMedia);