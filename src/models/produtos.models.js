import pool from "../config/db.js";

const produtoModel = {
    insert: async (pProduto) => {
        const sql = 'INSERT INTO produtos (id_categoria, nome_produto , valor_produto , vinculo_imagem) VALUES (?,?,?,?);';
        const values = [pProduto.idCategoria,pProduto.nomeProduto, pProduto.valorProduto, pProduto.vinculoImagem];
        const [rows] = await pool.execute(sql, values);
        return rows;

    },
    selectAll: async () => {
        const sql = "SELECT * FROM produtos;";
        const [rows] = await pool.execute(sql);
        return rows;

    }, update: async (pProduto) => {
        const sql = 'UPDATE produtos SET nome_produto=?, valor_produto=?, vinculo_imagem=? WHERE id_produto=?;';
        const values = [pProduto.nome, pProduto.valor, pProduto.imagem, pProduto.Id];
        const [rows] = await pool.execute(sql, values);
        return rows;
    }, 
    delete: async (pProduto) => {
        const sql = 'DELETE produtos WHERE id_produto=?;';
        const values = [pProduto.Id];
        const [rows] = await pool.execute(sql, values);
        return rows;
    }   

}

export default produtoModel;