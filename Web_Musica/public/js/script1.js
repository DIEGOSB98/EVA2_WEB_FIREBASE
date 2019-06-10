firebase.initializeApp({
    apiKey: 'AIzaSyA7syp6Hye-lEH_tkeYlqQJ0-075umw0jg',
    authDomain: 'eva2-2e24e.firebaseapp.com',
    projectId: 'eva2-2e24e'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function eliminarDatos() {

    var id = document.getElementById("id").value;

    if (id == "") {
        alert("Llene todos los campos por favor.");
    } else {
        db.collection("libros").doc(id).delete().then(function () {
            alert("Datos eliminados con éxito.");
        }).catch(function (error) {
            alert("Error al eliminar datos.");
            console.log(error);
        })
    }
}

function enviarDatos() {


    var nom_libro = document.getElementById("nom_lib").value;
    var autor_libro = document.getElementById("autor").value;
    var año_libro = document.getElementById("año").value;
    var editorial_libro = document.getElementById("editorial").value;
    var tematica_libro = document.getElementById("tematica").value;
    var correo_libro = document.getElementById("email").value;

    if (nom_libro == "" || autor_libro == "" || año_libro == "" || editorial_libro == ""
        || tematica_libro == "" || correo_libro == "") {
        alert("Llene todos los campos, Por favor");
    } else {

        db.collection("libros").add({
            nom_libro: nom_libro,
            escritor: autor_libro,
            año: año_libro,
            editorial: editorial_libro,
            tematica: tematica_libro,
            correo_user: correo_libro

        }).then(function (docRef) {
            alert("Datos enviados con exito, intentaremos tener el libro que deseas lo mas pronto posible!!!");
        })
            .catch(function (error) {
                alert("Error al enviar datos !!!");
            });
    }



}