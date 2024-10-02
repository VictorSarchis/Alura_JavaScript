limpar();

function adicionar() {
    let nomeProduto = (document.getElementById('produto').value).split('-')[0];
    let valorUnitario = (document.getElementById('produto').value).split('- R$')[1];
    let quantidadeProduto = (document.getElementById('quantidade').value);
    let valorCarrinho = document.getElementById('valor-total').innerHTML
    let valorCarrinhoInt = parseInt(valorCarrinho.substring(2));
    let listaProdutos =  document.getElementById('lista-produtos').innerHTML


    if (quantidadeProduto == ""){
        alert("Selecione uma quantidade válida!")
    } else {
    valorTotal = valorUnitario*quantidadeProduto
    listaProdutos = listaProdutos + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
    </section>`;
    valorCarrinhoInt = valorCarrinhoInt + valorTotal
    document.getElementById('lista-produtos').innerHTML = listaProdutos
    document.getElementById('valor-total').innerHTML = `R$${valorCarrinhoInt}`
    } 
}

function limpar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0,00';
}