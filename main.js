let productos = [
    {id: 1, producto:"campera",color:"negro", precio: 0,stock:0},
    {id:2, producto:"remera",color:"blanco",precio:0,stock:0},
    {id:3,producto:"pantalon",color:"rojo",precio:0,stock:0},
    {id:4,producto:"zapatilla",color:"azul",precio:0,stock:0}
]

for (let i = 0; i < productos.length; i++) {
    let entrada = parseInt(prompt("Ingresar el precio de: "+productos[i].producto))
    productos[i].precio=entrada
}

for (let i = 0; i < productos.length; i++) {
    let entrada = parseInt(prompt("Ingresar el stock de: "+productos[i].producto))
    productos[i].stock=entrada
}

console.log(productos);

let nombres = productos.map((nombre) => nombre.producto)

console.log(nombres);

let resultado = productos.filter((producto) => producto.stock > 0)

console.log(resultado);

let iva = 1.21

let precioConIva = console.log(parseInt(prompt("Ingresar el precio del producto para sumarle el iva: "))*iva);