

/* OBTENER ITEMS DE FORMA MANUAL (HARDCODEADO) */

let merch = [
    {
        "id": 10,
        "name": "Remera Morlocks",
        "price": 20,
        "description": "descripcion de la remera"
    },
    {
        "id": 100,
        "name": "Parche 15 Ronins",
        "price": 5,
        "description": "descripcion de los parches"
    },
    {
        "id": 1000,
        "name": "Stickers",
        "price": 5,
        "description": "descripcion de los stickers"   
    }
];

for(let i = 0; i<merch.length; i++) {
    console.log("name: ", merch[i].name);
}


/*seleciono el elemento donde mostrar*/
let showMerch = document.getElementsByClassName("merch");

/* se crea el div donde muestra*/
let merchCard = document.createElement("div");

/*le asigno la clase al div creado*/
merchCard.classList.add("card_container");

/*funcion que muestra los elementos*/
function insertDOM() {
    merch.forEach(element => {
        merchCard.innerHTML += `
        <div class="card">
        <form onsubmit="addProduct()">
            <div class="card-body">
                <h5 id="name" class="card-title">${merch.name} $></h5>
                <h5 id="name" class="card-title">${merch.name} $></h5>
            `
    })
}

/* CREAR BOTON QUE PERMITA MOSTRAR LA DESCRIPCION */


/* INTEGRAR UN CARRITO DE COMPRAS */
