
let merchList = [
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

for(let i = 0; i<merchList.length; i++) {
    console.log("name: ", merchList[i].name);
}


let merchContainer = document.getElementById("merch");


let merchCard = document.createElement("div");


merchCard.classList.add("merch");


document.addEventListener("DOMContentLoaded", (event) => {
    merchList.forEach(merch => {
        merchCard.innerHTML += `
        <div class="card">
      <form id="my_form${merch.id}">
        <div>
          <h2 id="nombre" name="nombre">${merch.name}</h2>          
          <p id="precio" name="precio">${merch.price}</p>          
          <div>
            <p id="description${merch.id}" class="description">
              ${merch.description}
                <button onclick="comprar(${merch.id})" class="button" value="Comprar">Comprar</button>
            </p>
          </div>
        </div>
      </div>
    `;
    merchContainer.append(merchCard);
    })
})