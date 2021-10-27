let carrito = [];

function mostrarCarrito(carrito) {
    // Le paso como parametro el carrito por que puede ser el
    // carrito completo o filtrado
    if (carrito.length > 0) {
        let ul = document.getElementById('list');
        // Primero tengo que borra todos los elementos de la lista
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        // ahora con el ul vacio agrego todo el array carrito
        for (let i = 0; i < carrito.length; i++) {
            const element = carrito[i];
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(element));
            li.setAttribute('class', 'list-group-item');            
            li.setAttribute('id', i);            
            ul.appendChild(li);
        }        
    }
}

function agregarProducto() {
    let producto = document.getElementById('producto').value;
    if (producto !== '') {
        carrito.push(producto);
        mostrarCarrito(carrito);
    }
}

function borrarProducto() {
    let producto = document.getElementById('producto').value;
    if (producto !== '') {
        let i = carrito.indexOf(producto);
        if (i!==-1) {
            carrito.splice(i, 1);
            mostrarCarrito(carrito);
        }
    }
}

function filtrarProductos() {
    let producto = document.getElementById('producto').value;
    if (producto !== '') {
        let filtro = carrito.filter(element => element.includes(producto));
        mostrarCarrito(filtro);
    } else {
        mostrarCarrito(carrito);
    }
}