window.addEventListener("load", main) // executa quando a página carregar

function main() {

    const botaoEnviar = document.querySelector(".btn-enviar")

    if (botaoEnviar) {
        botaoEnviar.addEventListener("click", enviarMensagem)
    }
}

function enviarMensagem() {

    const nome = document.getElementById("nome").value.trim()
    const email = document.getElementById("email").value.trim()
    const numero = document.getElementById("numero").value.trim()
    const mensagem = document.getElementById("mensagem").value.trim()

    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha os campos obrigatórios.")
        return
    }

    console.log("Contato enviado:")
    console.log("Nome:", nome)
    console.log("Email:", email)
    console.log("Número:", numero)
    console.log("Mensagem:", mensagem)

    alert("Mensagem enviada com sucesso!")

    // limpa os campos
    document.getElementById("nome").value = ""
    document.getElementById("email").value = ""
    document.getElementById("numero").value = ""
    document.getElementById("mensagem").value = ""
}
