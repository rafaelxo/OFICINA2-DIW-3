const url = "https://01c72ea2-dc83-4f76-b4e6-f998346028e2-00-1fmk7t8gu8uk4.picard.replit.dev/";
const urlProdutos = url + "produtos";

export async function enviar(dados) {
  try {
    const resposta = await fetch(urlProdutos, {
      method: 'POST',
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(dados),
    });

    if (!resposta.ok) {
      throw new Error('Erro no envio dos dados!');
    }

    return await resposta.json();
  } catch (erro) {
    console.error('Erro ao enviar dados:', erro);
    throw erro;
  }
}

export async function buscar() {
  try {
    const resposta = await fetch(urlProdutos);

    if (!resposta.ok) {
      throw new Error('Erro no envio dos dados!');
    }

    return await resposta.json();
  } catch (erro) {
    console.error('Erro ao ler dados:', erro);
    throw erro;
  }
}

export async function atualizar(id, dados) {
  try {
    const resposta = await fetch(`${urlProdutos}/${id}`, {
      method: 'PUT',
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(dados),
    });

    if (!resposta.ok) {
      throw new Error('Erro ao atualizar os dados!');
    }

    return await resposta.json();
  } catch (erro) {
    console.error('Erro ao atualizar dados:', erro);
    throw erro;
  }
}

export async function excluir(id) {
  try {
    const resposta = await fetch(`${urlProdutos}/${id}`, {
      method: 'DELETE',
    });

    if (!resposta.ok) {
      throw new Error('Erro ao excluir os dados!');
    }

    return await resposta.json();
  } catch (erro) {
    console.error('Erro ao excluir dados:', erro);
    throw erro;
  }
}