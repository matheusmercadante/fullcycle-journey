import mysql from 'mysql2/promise'

// config mysql
// const configDb = {
//     host: 'db',
//     user: 'root',
//     password: 'root',
//     database: 'nodedb'
// }
// const connection = mysql.createConnection(configDb)

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const connection = await mysql.createConnection("mysql://root:root@db/nodedb");
    console.log("Conectou no MySQL!");
    
    global.connection = connection;

    return connection;
}

// sql select
export async function selectUser(randomName){
    const conn = await connect();

    const [rows] = await conn.query(`SELECT * FROM people WHERE people.name = '${randomName}'`);

    return rows[0];
}

// sql insert
export async function insertUser(user){
    const conn = await connect();
    
    const sql = 'INSERT INTO people(name) VALUES (?);';
    
    const values = [user.nome];

    return await conn.query(sql, values);
}
// sql delete
export async function deleteUser(id){
    const conn = await connect();

    const sql = 'DELETE FROM people where id=?;';
    
    console.log('removed')

    return await conn.query(sql, [id]);
}