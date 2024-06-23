const mysql = require("mysql2");

const pool = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sistema_bancario',
    port: 3306
});



pool.connect(function (error) {
  if (error) {
    console.error("Error conectando a la base de datos:", error);
    return;
  }
  console.log("Conectado a la base de datos MySQL.");
});

module.exports = pool;
