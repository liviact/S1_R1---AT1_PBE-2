import pool from "../config/db.js";

const categoriaModel = {
    insert: async (descricao) => {
        const sql = 'INSERT INTO categoria (descricao_categoria) VALUES (?);';
        const values = [descricao];
        const [rows] = await pool.execute(sql, values);
        return rows;

    },
    selectAll: async () => {
        const sql = "SELECT * FROM categoria;";
        const [rows] = await pool.execute(sql);
        return rows;

    }, update: async (id, descricao) => {
        const sql = 'UPDATE categoria SET descricao_categoria=? WHERE id_categoria=?;';
        const values = [descricao,id];
        const [rows] = await pool.execute(sql, values);
        return rows;
    }, 
    delete: async (id) => {
        
        const sql = 'DELETE FROM categoria WHERE id_categoria=?;';
        const values = [id];
        const [rows] = await pool.execute(sql, values);
        return rows;
    }


   

}

export default categoriaModel;