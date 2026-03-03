import produtoModel from "../models/produtos.models.js";

const produtoController = {
  criarProduto: async (req, res) => {
    try {
      const { idCategoria, nomeProduto, valorProduto } = req.body;
      const vinculoImagem =  `/uploads/imagens/${req.file.filename}`;

      if (!idCategoria || !nomeProduto || !valorProduto) {
        return res.status(400).json({
          message: "Os campos obrigatórios precisam ser preenchidos!"
        });
      }

      const produto = {
        idCategoria,
        nomeProduto,
        valorProduto,
        vinculoImagem
      };

      const idProduto = await produtoModel.insert(produto);

      return res.status(201).json({
        message: "produto criado com sucesso!",
        idProduto
      });
    } catch (error) {
      console.error("erro ao criar produto:", error);

      return res.status(500).json({
        message: "erro ao criar produto!"
      });
    }
  },

  listarProdutos: async (req, res) => {
    try {
      const produtos = await produtoModel.selectAll();

      return res.status(200).json(produtos);
    } catch (error) {
      console.error("erro ao listar produtos:", error);

      return res.status(500).json({
        message: "erro ao listar produtos"
      });
    }
  },

  buscarPPorId: async (req, res) => {
    try {
      const { id } = req.params;

      const produto = await produtoModel.buscarPPorId(id);

      if (!produto) {
        return res.status(404).json({
          message: "id inválido!"
        });
      }

      return res.status(200).json(produto);
    } catch (error) {
      console.error("erro ao buscar produto:", error);

      return res.status(500).json({
        message: "erro ao buscar produto"
      });
    }
  },

  atualizarProduto: async (req, res) => {
    try {
      const { id } = req.params;
      const { idCategoria, nomeProduto, valorProduto } = req.body;
      const vinculoImagem = req.file ? req.file.filename : null;

      const produto = {
        idCategoria,
        nomeProduto,
        valorProduto,
        vinculoImagem
      };

      const atualizado = await produtoModel.update(id, produto);

      if (atualizado === 0) {
        return res.status(404).json({
          message: "produto não encontrado"
        });
      }

      return res.status(200).json({
        message: "produto atualizado com sucesso"
      });
    } catch (error) {
      console.error("erro ao atualizar produto:", error);

      return res.status(500).json({
        message: "erro ao atualizar produto"
      });
    }
  },

  excluirProduto: async (req, res) => {
    try {
      const { id } = req.params;

      const excluido = await produtoModel.delete(id);

      if (excluido === 0) {
        return res.status(404).json({
          message: "produto não encontrado"
        });
      }

      return res.status(200).json({
        message: "produto excluído com sucesso"
      });
    } catch (error) {
      console.error("erro ao excluir produto:", error);

      return res.status(500).json({
        message: "erro ao excluir produto"
      });
    }
  }
};

export default produtoController;