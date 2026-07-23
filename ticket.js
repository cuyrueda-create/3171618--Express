const ticketSoporte = {
  id: "TCK-100",
  prioridad: "Alta",
  usuario: { nombre: "Ana Gomez", email: "ana@sena.edu.co" }, // Sub-objeto
  historial: [{ fecha: "2026-07-01", detalle: "Creado" }]     // Arreglo de objetos
};

// RETO 3: Construye el objeto 'ordenPedido'
const ordenPedido = {
  // TODO: 1. Define propiedades primitivas: id, fecha, estado
  id: "ORD-001",
  fecha: "2026-07-22",
  estado: "Pendiente",
  
  // TODO: 2. Define el sub-objeto 'cliente' con nombre y correo
  cliente: {
    nombre: "Ana Gomez",
    correo: "ana@sena.edu.co"
  },
  
  // TODO: 3. Define el arreglo 'items' con al menos 1 producto 
  // Cada item debe tener: { producto, cantidad, precioUnitario }
  items: [ 
    {
    producto: "Teclado",
    cantidad: 2,
    precioUnitario: 8500
              
    }
  ]
};

console.log("Respuesta API JSON:", JSON.stringify(ordenPedido, null, 2));
