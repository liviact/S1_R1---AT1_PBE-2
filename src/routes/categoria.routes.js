
import { Router } from "express";
import categoriaController from "../controllers/categoria.controller.js";


const categoriaRoutes = Router();

categoriaRoutes.post('/categorias',categoriaController.criarNovaCategoria);
categoriaRoutes.get('/categorias',categoriaController.listarCategorias);
categoriaRoutes.get('/categorias',categoriaController.buscarCPorId);
categoriaRoutes.put('/categorias/:id',categoriaController.atualizarCategoria);
categoriaRoutes.delete('/categorias/:id',categoriaController.deletarCategoria);

export default categoriaRoutes;