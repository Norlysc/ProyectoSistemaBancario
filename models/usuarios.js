const pool = require("../conexion");
const prestamos = require("./cuentas"); // Importa el modelo de préstamos si no lo has hecho aún
const cooperativa = require("./cooperativas");

class UsuariosModel {
  static async obtenerTodosLosUsuarios() {
    return new Promise((resolve, reject) => {
      pool.query("SELECT * FROM usuarios", (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }

  static async añadirUsuario(usuario) {
    return new Promise((resolve, reject) => {
      const { id, nombre, email } = usuario;
      pool.query(
        "INSERT INTO usuarios (id, nombre, email) VALUES (?, ?, ?)",
        [id, nombre, email],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results);
        }
      );
    });
  }

  static async editarUsuario(id, usuario) {
    return new Promise((resolve, reject) => {
      const { nombre, email } = usuario;
      pool.query(
        "UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?",
        [nombre, email, id],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results);
        }
      );
    });
  }

  static async borrarUsuario(id) {
    return new Promise((resolve, reject) => {
      pool.query(
        "DELETE FROM usuarios WHERE id = ?",
        [id],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results);
        }
      );
    });
  }

  static async obtenerDetallesUsuario(id) {
    return new Promise((resolve, reject) => {
      pool.query(
        "SELECT * FROM usuarios usu, prestamos pres, ahorros aho, cooperativas coop WHERE usu.id = ? AND pres.usuarioId = usu.id and usu.id = aho.usuarioId and aho.fk_coperativa = coop.id",
        [id],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results[0]);
        }
      );
    });
  }
}

module.exports = UsuariosModel;
