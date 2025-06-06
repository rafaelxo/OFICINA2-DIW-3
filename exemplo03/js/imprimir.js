function imprimir(json) {
    return `<div class="id">ID: ${json.id}</div> 
            <div class="nome">Produto: ${json.produto}</div> 
            <div class="nascimento">Preço: ${json.preco}</div>
            <div class="data">Data de validade: ${json.validade}</div>
            <div id="botoes">
                <button class="editar">Editar</button>
                <button class="excluir">Excluir</button>
            </div>`;
}

export default imprimir;