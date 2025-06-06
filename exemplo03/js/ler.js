function ler() {
    const produto = document.getElementById('produto').value.trim();
    const preco = document.getElementById('preco').value.trim();
    const validade = document.getElementById('validade').value;

    document.getElementById('produto').value = "";
    document.getElementById('preco').value = "";
    document.getElementById('validade').value = "";

    if (produto && preco && validade)
      return { produto, preco, validade };
    
    return null;
}

export default ler;