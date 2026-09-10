const db = require('../config/db');

const Cliente = {
    createNewClient: async (nome, cpf) =>{
        try{

            const [result] = await db.execute('INSERT INTO Cliente (nome, cpf) VALUES(?, ?)', [nome,]

            )
        }
    }
}