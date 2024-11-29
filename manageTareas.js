//clase para administrar tareas (paradigma orientado a objetos)
class ManageTareas {
    constructor() {
      this.tareas = [];
    }
  
    agregarTarea(tarea) {
      this.tareas = [...this.tareas, tarea];
      console.log("¡Tarea agregada exitosamente!");
    }
  
    listarTareas(filtro = null) {
      return filtro
        ? this.tareas.filter((tarea) => filtro(tarea))
        : this.tareas;
    }
  
    buscarTareaPorTitulo(titulo) {
      return this.tareas.find((tarea) => tarea.titulo === titulo) || null;
    }
  
    editarTarea(titulo, atributo, valor) {
      const tarea = this.buscarTareaPorTitulo(titulo);
      if (!tarea) throw new Error("Tarea no encontrada.");
      tarea.editarAtributo(atributo, valor);
      console.log("¡Tarea editada exitosamente!");
    }
}

module.exports = ManageTareas;