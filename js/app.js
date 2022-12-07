
function agregar_ciudad(NuevaCiudad){
    var NuevaCiudad = document.getElementById("agregar-ciudad").value;

    if(NuevaCiudad == true){
        alert("ciudad agregada!!");
    }
}

function redirect(NuevaCiudad){
    window.location.replace("http://127.0.0.1:5500/")
}