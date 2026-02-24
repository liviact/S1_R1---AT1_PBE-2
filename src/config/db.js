import mysql from 'mysql2/promise';
import 'dotenv/config';

const pool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    port:process.env.PORT_MYSQL,
    waitForConnections: true, //fila de espera p usuarios
    connectionLimit: 10,
    queueLimit: 0, //limite de pessoas na fila (nesse caso, 0 é indefinido)
});

export default pool;