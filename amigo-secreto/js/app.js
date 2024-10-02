let listaSorteio = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    if (nome.value == ''){
        alert("Digite o nome de um amigo!");
        return;
    }
    if (listaSorteio.includes(nome.value)){
        alert("Nome já adicionado. Digite um nome diferente!");
        return;
    }

    listaSorteio.push(nome.value);

    if (lista.textContent == '') {
        lista.textContent = nome.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nome.value;
    }

    nome.value = '';
}

function sortear() {

    if (listaSorteio.length <= 3){
        alert("Número de amigos insuficiente.");
        return;
    } else{
    embaralhar(listaSorteio);

    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < listaSorteio.length; i++) {
        if (i == listaSorteio.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaSorteio[i] +' --> ' +listaSorteio[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaSorteio[i] +' --> ' +listaSorteio[i + 1] + '<br/>';
        }
    }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    listaSorteio = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}