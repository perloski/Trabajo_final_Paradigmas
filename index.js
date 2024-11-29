
//otras funciones que utilizo
const leerEntrada = (mensaje) => prompt(mensaje);

const esperarTecla = () => {
  console.log("Presiona cualquier tecla para continuar...");
  prompt("");
};

const listarTareasTexto = (tareas) =>
  tareas
    .map(
      (tarea, index) =>
        `[${index + 1}] ${tarea.titulo} - ${tarea.estado === 1 ? "Pendiente" : "Completada"}`
    )
    .join("\n");

//Menu principal (paradigma estructurado)
const prompt = require("prompt-sync")();
const Tarea = require("./tarea");
const ManageTareas = require("./manageTareas");
const validarFecha = require("./fecha");

const controlador = new ManageTareas();




(async function menuPrincipal() {
  let opcion;
  do {
    console.clear();
    console.log("=== LISTA DE TAREAS ===");
    console.log("[1] Ver tareas");
    console.log("[2] Agregar tarea");
    console.log("[3] Buscar tarea");
    console.log("[0] Salir");
    opcion = leerEntrada("> ");

    switch (opcion) {
      case "1":
        console.clear();
        const tareas = controlador.listarTareas();
        console.log(listarTareasTexto(tareas));
        esperarTecla();
        break;

      case "2":
        console.clear();
        const titulo = leerEntrada("Título: ");
        const descripcion = leerEntrada("Descripción (opcional): ");
        const estado = parseInt(leerEntrada("Estado (1: Pendiente, 2: En curso, 3: Terminada): "), 10);
        const dificultad = parseInt(leerEntrada("Dificultad (1-3): "), 10);
        const vencimiento = leerEntrada("Fecha de vencimiento (DD/MM/YYYY): ");

        if (vencimiento && !validarFecha(vencimiento)) {
          console.log("Fecha no válida. Intente de nuevo.");
          esperarTecla();
          break;
        }

        const tarea = new Tarea(titulo, descripcion, estado, dificultad, vencimiento);
        controlador.agregarTarea(tarea);
        esperarTecla();
        break;

      case "3":
        console.clear();
        const buscarTitulo = leerEntrada("Título de la tarea a buscar: ");
        const tareaEncontrada = controlador.buscarTareaPorTitulo(buscarTitulo);
        console.log(tareaEncontrada ? tareaEncontrada : "Tarea no encontrada.");
        esperarTecla();
        break;

      case "0":
        console.log("Saliendo...");
        break;

      default:
        console.log("Opción no válida. Intente de nuevo.");
        esperarTecla();
    }
  } while (opcion !== "0");
})();
