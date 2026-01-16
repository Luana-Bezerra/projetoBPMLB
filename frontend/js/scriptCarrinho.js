window.addEventListener("load", main);

async function main() {
    const container = document.getElementById("lista-carrinho");

    const resp = await fetch("/carrinho");
    const itens = await resp.json();

    container.innerHTML = "";

    itens.forEach(livro => {
        const item = document.createElement("div");
        item.classList.add("lista-item");

        item.innerHTML = `
        <div class="coluna-selecao">
            <input type="checkbox" checked>
        </div>

        <div class="coluna-capa">
            <img src="${livro.imagem_url}" alt="Capa ${livro.titulo}">
        </div>

        <div class="coluna-info">
            <p><strong>Título:</strong> ${livro.titulo}</p>
            <p><strong>Autor:</strong> ${livro.autor}</p>
            <p><strong>Ano/Editora:</strong> ${livro.ano_editora}</p>
            <p><strong>Gênero:</strong> ${livro.genero}</p>
        </div>

        <div class="coluna-acao">
            <button class="botao-remover" data-id="${livro.id}">Remover</button>
        </div>
        `;

        container.appendChild(item);
    });

    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("botao-remover")) {
            e.target.closest(".lista-item").remove();
        }
    });
}