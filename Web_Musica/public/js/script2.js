
function validar_datos_administrador(){

    var usuario_administrador=document.getElementById("usuario").value;
    var contraseña_usuario=document.getElementById("contraseña").value;

    if(usuario_administrador=="" || contraseña_usuario==""){
        alert("Llenar los campos es obligatorio.");
    }else if(usuario_administrador=="Diego.Benaldo" && contraseña_usuario=="diego1998"){
        alert("Datos Correctos.");
        location.href='index.html';
    }else{
        alert("Datos incorrectos !!!");
    }
}