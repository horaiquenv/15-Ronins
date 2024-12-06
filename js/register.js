document.getElementById("register").addEventListener("submit", function(event){
    event.preventDefault();
    if(registrarse(this)){
        this.onsubmit()
    }
    console.log("pepe");
});

/* limpia los errores actualizando los campos */ 
let clear = () => {
    let clearError = document.getElementsByClassName("error");
    for (let i = 0; i < clearError.length; i++){
        clearError[i].innerHTML = "";
    }
};

let registrarse = (register) => {

    clear();
    /* validacion nombre */
    if (register.name.value === null || register.name.value === "") {
        document.getElementById("nameError").innerText = "Ingresa tu nombre";
        register.name.focus();    
    };
    if(register.name.value.length < 3){
        document.getElementById("nameError").innerText = "El nombre debe tener mas de 2 caracteres";
        register.name.focus();    
    };
    if(register.name.value.length > 10){
        document.getElementById("nameError").innerText = "El nombre debe tener menos de 10 caracteres";
        register.name.focus();    
    };

    /* validacion Derby name */
    if (register.derbyName.value === null || register.derbyName.value === "") {
        document.getElementById("derbyError").innerText = "Ingresa tu Derby Name";
        register.derbyName.focus();    
    };
    if(register.derbyName.value.length < 3){
        document.getElementById("derbyError").innerText = "El Derby Name debe tener mas de 2 caracteres";
        register.derbyName.focus();        
    };
    if(register.derbyName.value.length > 10){
        document.getElementById("derbyError").innerText = "El Derby Name debe tener menos de 10 caracteres";
        register.derbyName.focus();   
    };

    /* validacion numero */
    if(register.number.value.length > 4){
        document.getElementById("numberError").innerText = "El numero no puede tener mas de 4 cifras";
        register.number.focus();
    };

    /* validacion email */
    let expReg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!expReg.test(register.email.value)) {
        document.getElementById("emailError").innerText = "Ingresa una direccion de Email válida";
        register.email.focus();    
    };

    /* validacion contraseña */
    if(register.password.value.length < 8){
        document.getElementById("passwordError").innerText = "La contraseña debe tener al menos 8 caracteres";
        register.password.focus();
    };
    if(!register.password.value.match(/[a-z]/) && !register.password.value.match(/[A-Z]/)){
        document.getElementById("passwordError").innerText = "La contraseña debe tener al menos una letra mayuscula y una letra minuscula";
        register.password.focus();
    };
    if(!register.password.value.match(/\d/)){
        document.getElementById("passwordError").innerText = "La contraseña debe tener al menos un caracter numerico";
        register.password.focus();
    };


}