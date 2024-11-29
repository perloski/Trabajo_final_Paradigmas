//clase tarea (paradigma orientado a objetos)
class Tarea {
    constructor(titulo, descripcion = "Sin descripción", estado = 1, dificultad = 1, vencimiento = null) {
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.estado = estado; // 1: Pendiente, 2: En curso, 3: Terminada, 4: Cancelada
      this.creacion = new Date().toLocaleDateString("es-ES");
      this.ultimaEdicion = null;
      this.vencimiento = vencimiento;
      this.dificultad = dificultad;
    }
  
    editarAtributo(atributo, valor) {
      if (this[atributo] !== undefined) {
        this[atributo] = valor;
        this.ultimaEdicion = new Date().toLocaleDateString("es-ES");
      } else {
        throw new Error(`El atributo "${atributo}" no existe en la tarea.`);
      }
    }
  }

module.exports = Tarea;