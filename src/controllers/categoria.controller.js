import categoriaModel from "../models/categoria.model.js";
const categoriaController = {

  
  criarNovaCategoria: async (req, res) => {
    try {
      const { descricaoCategoria } = req.body;

      if (!descricaoCategoria) {
        return res.status(400).json({
          message: "a descrição da categoria é obrigatória!"
        });
      }

      const idCategoria = await categoriaModel.insert(descricaoCategoria);

      res.status(201).json({
        message: "categoria cadastrada com sucesso!",
        idCategoria
      });

    } catch (error) {
      console.error("erro ao criar categoria:", error);
      res.status(500).json({
        message: "erro ao cadastrar categoria"
      });
    }
  },

 
  listarCategorias: async (req, res) => {
    try {
      const categoria = await categoriaModel.selectAll();
      res.status(200).json(categoria);
    } catch (error) {
      console.error("erro ao listar categorias:", error);
      res.status(500).json({
        message: "erro ao listar categorias"
      });
    }
  },

 
  buscarCPorId: async (req, res) => {
    try {
      const { id } = req.params;

      const categoria = await categoriaModel.buscarCPorId(id);

      if (!categoria) {
        return res.status(404).json({
          message: "categoria não encontrada"
        });
      }

      res.status(200).json(categoria);

    } catch (error) {
      console.error("erro ao buscar categoria:", error);
      res.status(500).json({
        message: "erro ao buscar categoria"
      });
    }
  },

  
  atualizarCategoria: async (req, res) => {
    try {
      const { id } = req.params;
      const { descricaoCategoria } = req.body;

      const atualizado = await categoriaModel.update(
        id,
        descricaoCategoria
      );

      if (atualizado === 0) {
        return res.status(404).json({
          message: "categoria não encontrada"
        });
      }

      res.status(200).json({
        message: "categoria atualizada com sucesso"
      });

    } catch (error) {
      console.error("erro ao atualizar categoria:", error);
      res.status(500).json({
        message: "erro ao atualizar categoria"
      });
    }
  },

  deletarCategoria: async (req, res) => {
    try {
      const { id } = req.params;

      const excluida = await categoriaModel.delete(id);

      if (excluida === 0) {
        return res.status(404).json({
          message: "categoria não encontrada"
        });
      }

      res.status(200).json({
        message: "categoria excluída com sucesso"
      });

    } catch (error) {
      console.error("erro ao excluir categoria:", error);
      res.status(500).json({
        message: "erro ao excluir categoria"
      });
    }
  }
};

export default categoriaController;



