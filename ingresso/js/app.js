let id = ''
function comprar() {
    let quantidadeCompra = document.getElementById('qtd').value;
    let tipoIngressoCompra = document.getElementById('tipo-ingresso').value;

    if (quantidadeCompra == '' || quantidadeCompra <= 0) {
        alert('Insira uma quantidade válida!')
    } else if (tipoIngressoCompra == 'inferior') {
        id = 'qtd-inferior';
    } else if (tipoIngressoCompra == 'superior') {
        id = 'qtd-superior';
    } else if (tipoIngressoCompra == 'pista'){
        id = 'qtd-pista';
    }

    let quantidadeMaxima = parseInt(document.getElementById(id).innerHTML);

    if (quantidadeCompra > quantidadeMaxima){
        alert('Quantidade de compra excede a quantidade de ingressos disponíveis!');
    } else {
        quantidadeMaxima = quantidadeMaxima - quantidadeCompra;
        document.getElementById(id).textContent = quantidadeMaxima;
    }
   
}