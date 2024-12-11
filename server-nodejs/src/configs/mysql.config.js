
import mysql from 'mysql2/promise';

/**
 * Connect mysql2 with create connection
 */
async function getConnectionMysql() {
    try {
        // const conn = await mysql.createConnection({
        //     host: '127.0.0.1',
        //     user: 'root',
        //     password: 'Mysql@23012024@root',
        //     port: 3306,
        //     database: 'type_node',
        //     insecureAuth: true
        // })
        const conn = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'password',
            port: 3360,
            database: 'test',
            insecureAuth: true
        })
        console.log("Connect mysql ok!");
        return conn;
    } catch (error) {
        console.error('Connect database mysql failed', error);
    }
}

export default getConnectionMysql;