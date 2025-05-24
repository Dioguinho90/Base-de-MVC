const mysql = require('mysql2');

// Configurar a conexão com o banco de dados
const connection = mysql.createConnection({
    
  
});

// Conectar ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro de conexão: ' + err.stack);
        return;
    }
    
});


module.exports = connection.promise();