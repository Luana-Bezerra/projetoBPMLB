import express from 'express';
import router from './routes/routeLivros.js'
import { createTableLivros } from './model/livrosModel.js';

const app = express();
app.use(express.json());
app.use(express.static("frontend"));

app.use(router);

await createTableLivros()

app.use("/livros", router)



app.listen(3000, () => console.log("Api Rodando."))