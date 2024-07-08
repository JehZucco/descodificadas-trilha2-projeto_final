document.getElementById('button-contato').onclick = function(){
    alert("Site fictício feito com propósitos educacionais. Mensagem NÃO enviada!")
}

function mostraDropdown() {
    document.getElementById("dropdown-caixa").classList.toggle("show");
}

function escondeDropdown(){
    var dropdown = document.getElementById("dropdown-caixa");
    dropdown.classList.remove('show');
}