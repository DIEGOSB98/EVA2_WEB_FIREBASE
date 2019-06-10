
function validar_datos_administrador() {

    var usuario_administrador = document.getElementById("usuario").value;
    var contraseña_usuario = document.getElementById("contraseña").value;

    if(usuario_administrador=="" || contraseña_usuario==""){
        alert("Por favor llene todos los campos.");
    } else if (usuario_administrador == "Diego.Benaldo" && contraseña_usuario == "diego1998") {
        location.href = 'menu-administrador.html';
    } else {
        alert("Datos incorrectos !!!");
    }
}