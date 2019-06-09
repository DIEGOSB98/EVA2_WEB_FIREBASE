firebase.initializeApp({
    apiKey: "AIzaSyBTGMQXY1qvq9Cj9i2cZdJBB0Iju8fQG6Q",
    authDomain: "eva2-e3377.firebaseapp.com",
    projectId: 'eva2-e3377'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

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

        })
            .then(function (docRef) {
                alert("Datos enviados con exito, intentaremos tener el libro que deseas lo mas pronto posible!!!");
            })
            .catch(function (error) {
                alert("Error al enviar datos !!!");
            });
    }



}
