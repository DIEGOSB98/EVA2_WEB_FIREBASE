firebase.initializeApp({
    apiKey: "AIzaSyBTGMQXY1qvq9Cj9i2cZdJBB0Iju8fQG6Q",
    authDomain: "eva2-e3377.firebaseapp.com",
    projectId: 'eva2-e3377'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function agregarArtista() {


    var artista=document.getElementById("boton_artista").value;
    var voto=1;
    db.collection("artistas").add({
        first: artista,
        last: voto,

    })
        .then(function (docRef) {
            alert("Datos enviados con exito !!!");
        })
        .catch(function (error) {
            alert("Error al enviar datos !!!");
        });

}