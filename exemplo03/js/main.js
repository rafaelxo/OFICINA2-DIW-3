import { enviar, buscar, atualizar, excluir } from "./api.js";
import lerDadosDoFormulario from "./ler.js";
import imprimirDadosDaLista from "./imprimir.js";

const produto = document.getElementById("produto");
const preco = document.getElementById("preco");
const validade = document.getElementById("validade");
const botao = document.getElementById("botaoEnviar");

let editingId = null;

window.addEventListener('DOMContentLoaded', async () => {
    const vetor = await buscar();
    atualizarLista(vetor);
});

botao.addEventListener("click", (event) => {
    event.preventDefault();
    adicionarOuAtualizar();
});

botao.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adicionarOuAtualizar();
    }
});

async function adicionarOuAtualizar() {
    const dados = lerDadosDoFormulario();
    if (dados) {
        if (editingId) {
            await atualizar(editingId, dados);
        } else {
            await enviar(dados);
        }
        editingId = null;
        botao.textContent = "Enviar";
        let vetor = await buscar();
        atualizarLista(vetor);
    } else {
        alert("Dados não enviados!");
    }
}

function atualizarLista(vetor) {
    const lista = document.getElementById('lista');
    lista.innerHTML = "";

    vetor.forEach(elemento => {
        const li = document.createElement('li');
        li.innerHTML = imprimirDadosDaLista(elemento);
        li.dataset.id = elemento.id;
        
        const botaoEditar = li.querySelector('.editar');
        const botaoExcluir = li.querySelector('.excluir');
        
        botaoEditar.addEventListener('click', () => {
            editingId = elemento.id;
            produto.value = elemento.produto;
            preco.value = elemento.preco;
            validade.value = elemento.validade;
            botao.textContent = "Atualizar";
        });

        botaoExcluir.addEventListener('click', () => {
            excluir(elemento.id);
        });

        lista.appendChild(li);
    });
}

produto.onkeyup = () => {
    var termo = produto.value.toLowerCase();
    filtrar(termo);
};

preco.onkeyup = () => {
    var termo = preco.value.toLowerCase();
    filtrar(termo);
};

validade.onkeyup = () => {
    var termo = validade.value;
    filtrar(termo);
};

function filtrar(termo) {
    var itens = document.getElementsByTagName("li");

    for (var i = 0; i < itens.length; i++) {
        var item = itens[i].innerHTML;

        if (item.toLowerCase().includes(termo))
            itens[i].style.display = "flex";
        else
            itens[i].style.display = "none";
    }
};