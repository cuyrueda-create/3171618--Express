/**
 * PROGRAMA DE FORMACIÓN: Análisis y Desarrollo de Software (ADSO)
 * FICHA: 228118 | GUÍA DE APRENDIZAJE N° 2
 * ENTREGABLE: backend_logic.js
 * APRENDIZ: Nombre del Aprendiz
 */

// 1. Colección Base (Mínimo 6 registros)
const registrosBase = [
  { id: 101, titulo: "Módulo Autenticación JWT", estado: "Completado", prioridad: "Alta" },
  { id: 102, titulo: "Conexión a Base de Datos PostgreSQL", estado: "Pendiente", prioridad: "Alta" },
  { id: 103, titulo: "Documentación de endpoints OpenAPI", estado: "En Proceso", prioridad: "Media" },
  { id: 104, titulo: "Módulo Autenticación JWT", estado: "Completado", prioridad: "Alta" },
  { id: 105, titulo: "Conexión a Base de Datos PostgreSQL", estado: "Pendiente", prioridad: "Alta" },
  { id: 106, titulo: "Documentación de endpoints OpenAPI", estado: "En Proceso", prioridad: "Media" },
  { id: 107, titulo: "Implementación de API REST", estado: "Pendiente", prioridad: "Alta" },
  { id: 108, titulo: "Pruebas Unitarias", estado: "En Proceso", prioridad: "Media" },
  { id: 109, titulo: "Despliegue en Servidor", estado: "Completado", prioridad: "Baja" }
];

// 2. Funciones Flecha de Analítica Backend
// TODO: Implementa tus funciones con .filter(), .find() y .map()
const obtenerPendientes = (lista) => lista.filter(item => item.estado === "Pendiente");
const obtenerPendientes2 = (lista) => lista.filter(item => item.estado === "En Proceso");
const obtenerPendientes3 = (lista) => lista.filter(item => item.estado === "Completado");

// find()

const obtenerID = (lista) => lista.find(r => r.id === 108);
const obtenerID2 = (lista) => lista.find(r => r.id === 103);
const obtenerID3 = (lista) => lista.find(r => r.id === 105);

// map()

const obtenerPrioridades = registrosBase.map(r => r.prioridad.toUpperCase());



// 3. Impresión en Consola
console.log("=== SISTEMA DE GESTIÓN BACKEND ===");
console.log("Pendientes:", obtenerPendientes(registrosBase));
console.log("En Proceso:", obtenerPendientes2(registrosBase));
console.log("Completado:", obtenerPendientes3(registrosBase));
console.log("8. obtenerID 108:", obtenerID(registrosBase));
console.log("9. obtenerID 103:", obtenerID2(registrosBase));
console.log("10. obtenerID 105:", obtenerID3(registrosBase));
console.log(obtenerPrioridades);