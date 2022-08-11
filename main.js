let productos = [
    {id: 1, producto:"campera", precio: 0,stock:0},
    {id:2, producto:"remera",precio:0,stock:0},
    {id:3,producto:"pantalon",precio:0,stock:0},
    {id:4,producto:"zapatilla",precio:0,stock:0},
    {id:4,producto:"medias",precio:0,stock:0},
    {id:4,producto:"guantes",precio:0,stock:0}
]

for (let i = 0; i < productos.length; i++) {
    let entrada = parseInt(prompt("Ingresar el precio de: "+productos[i].producto))
    productos[i].precio=entrada
}

for (let i = 0; i < productos.length; i++) {
    let entrada = parseInt(prompt("Ingresar el stock de: "+productos[i].producto))
    productos[i].stock=entrada
}

let contenedorProductos = document.getElementById("productos")
console.dir(contenedorProductos)



for(const producto of productos){
    let tarjetaProducto=document.createElement('div')
    tarjetaProducto.className="producto"
    tarjetaProducto.innerHTML = `
    <h3>${producto.producto}</h3>
    <h4>$${producto.precio}</h4>
    <p>Quedan ${producto.stock} u </p>
    <div id = "contenedor"></div>
    <button id = "boton">agregar al carrito</button>
    
    `
    
    contenedorProductos.append(tarjetaProducto)
}


let boton = document.getElementById('boton')
let contenedor = document.getElementById('contenedor')
let contador = 0
boton.addEventListener('click',reemplazarNumero)

function reemplazarNumero(){
    contador++
    contenedor.innerHTML = contador
}
console.log(JSON.stringify(productos));
let productosJSON = JSON.stringify(productos)
localStorage.setItem("productos", productosJSON)

// let iva = 1.21

// let precioConIva = console.log(parseInt(prompt("Ingresar el precio del producto para sumarle el iva: "))*iva);