import express from 'express'
import mysql from 'mysql'

const app = express()

const port = 3000

// config mysql
const configDb = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const connection = mysql.createConnection(configDb)

// sql insert
const sql = `INSERT INTO people(name) values('Matheus Mercadante')`
connection.query(sql)
connection.end()

// routes
app.get('/', (req, res) => {
    res.send('<h1>My Journey</h1>')
})

app.listen(port, () => {
    console.log('Rodando na porta', port)
})