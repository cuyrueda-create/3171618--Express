const productos = [
  { id: 101, nombre: "Laptop Asus", categoria: "Tecnología", precio: 2500000, stock: 5 },
  { id: 102, nombre: "Teclado Mecánico", categoria: "Accesorios", precio: 300000, stock: 0 },
  { id: 103, nombre: "Monitor LG 24", categoria: "Tecnología", precio: 850000, stock: 12 },
  { id: 104, nombre: "Mouse Ergonómico", categoria: "Accesorios", precio: 150000, stock: 8 }
];

// TODO 1. Filter: productos con stock > 0 Y categoria "Tecnología"
const disponiblestecnologia = productos.filter(p => p.stock > 0 && p.categoria === "Tecnología");

// TODO 2. Find: producto con ID exacto 102
const producto102 = productos.find(p => p.id === 102);

// TODO 3. Map: Nombres de todos los productos en MAYÚSCULAS (.toUpperCase())
const nombresMayusculas = productos.map(p => p.nombre.toUpperCase());

console.log("1. Disponibles Tecnología:", disponiblestecnologia);
console.log("2. Producto 102:", producto102);
console.log("3. Nombres en Mayúsculas:", nombresMayusculas);
