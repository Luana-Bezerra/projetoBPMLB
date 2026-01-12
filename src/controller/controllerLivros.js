import fs from "fs";
import path from "path";
import paths from "../utils/paths.js";
import {getAllLivros,
        getLivroPorTitulo,
        insertLivro,
        getLivrosTelaInicial
    }from "../model/livrosModel.js";



export async function importarLivros(req, res) {
    try {
        const caminho = path.join(paths.data, "livros.json");
        const livros = JSON.parse(fs.readFileSync(caminho, "utf-8"));

        for (const livro of livros) {
            await insertLivro(livro);
        }

        res.json({ mensagem: "Livros importados com sucesso" });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
}

export async function detalhesLivro(req, res) {
    const { titulo } = req.query;
    const livro = await getLivroPorTitulo(titulo);
    res.json(livro);
}


export async function listarLivrosTelaInicial(req, res) {
    try {
        const livros = await getLivrosTelaInicial();
        res.json(livros);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
}


export async function listarLivros(req, res) {
    const livros = await getAllLivros();
    res.json(livros);
}

