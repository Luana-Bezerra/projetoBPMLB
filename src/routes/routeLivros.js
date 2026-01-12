import { Router } from "express";
import { 
    listarLivros, 
    detalhesLivro,
    importarLivros,
    listarLivrosTelaInicial
} from "../controller/controllerLivros.js";   
const router = Router();

router.get("/", listarLivros);// lista todos os exemplares do bd
router.get("/detalhes", detalhesLivro);// funcionou , pega informações delivros especificos "http://localhost:3000/livros/detalhes?titulo=O Mundo de Sofia"
router.post("/importar-livros", importarLivros);// funcionou 
router.get("/tela-inicial", listarLivrosTelaInicial);// me da todos os livros destaqus e lançamentos


export default router;