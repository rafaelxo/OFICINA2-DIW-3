/*
  Exportação padrão (default):
  function ler() {
    // ...
  }
  export default ler;

  A função é exportada como exportação padrão (default export).
  Pode ser importada com qualquer nome:
  import qualquerNome from './ler.js';

  Só pode haver uma exportação default por arquivo.
*/

function ler() {
    const produto = document.getElementById('produto').value.trim();
    const preco = document.getElementById('preco').value.trim();
    const validade = document.getElementById('validade').value.trim();

    document.getElementById('produto').value = "";
    document.getElementById('preco').value = "";
    document.getElementById('validade').value = "";

    if (produto && preco && validade)
      return { produto, preco, validade };
    
    return null;
}

export default ler;

