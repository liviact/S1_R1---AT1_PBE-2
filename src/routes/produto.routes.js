
import { Router } from "express";
import produtoController from "../controllers/produto.controller.js";
import uploadImage from "../middlewares/uploadImage.middleware.js";




 const produtoRoutes = Router();

 produtoRoutes.post('/produtos', uploadImage, produtoController.criarProduto);
 produtoRoutes.get('/produtos',produtoController.listarProdutos);
 produtoRoutes.get('/produtos/:id',produtoController.buscarPPorId);
 produtoRoutes.put('/produtos/:id',produtoController.atualizarProduto);
 produtoRoutes.delete('/produtos/:id',produtoController.excluirProduto);

export default produtoRoutes;