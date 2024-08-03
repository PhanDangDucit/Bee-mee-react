import getConnectionMysql from "../configs/mysql.config";



export class MysqlQuery {
    async findAll(table) {
        const client = await getConnectionMysql();
        try {
            const [results] = await client.query(
                `SELECT * FROM ${table}`
            );
            console.log("results::", results);
            return results;
        } catch (err) {
            console.log(err);
        }
    }
}