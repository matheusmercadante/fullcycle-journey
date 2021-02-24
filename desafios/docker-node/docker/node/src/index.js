import express from 'express'
import { uniqueNamesGenerator, names } from 'unique-names-generator'


import { selectUser, insertUser, deleteUser } from './db.js'

const app = express()
const port = 3000

// routes
app.get('/', async (req, res) => {
    // generate random name
    const randomName = uniqueNamesGenerator({ dictionaries: [names] });

    await insertUser({ nome: randomName });

    const user = await selectUser(randomName);

    setTimeout(async () => {
        await deleteUser(user.id)
    }, 3000)

    res.send(`
        <h1>Hello, this is my full cycle journey</h1>

        <div>
            <h2>User: ${user.name} added!</h2>
            <h4><i>and it will be removed in 3s</i></h4>
        </div>
    `)    
})

app.listen(port, () => {
    console.log('Running on', port)
})