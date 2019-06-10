firebase.initializeApp({
    apiKey: 'AIzaSyA7syp6Hye-lEH_tkeYlqQJ0-075umw0jg',
    authDomain: 'eva2-2e24e.firebaseapp.com',
    projectId: 'eva2-2e24e'
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

        }).then(function (docRef) {
            alert("Datos enviados con exito, intentaremos tener el libro que deseas lo mas pronto posible!!!");
        })
            .catch(function (error) {
                alert("Error al enviar datos !!!");
            });
    }

}

function modificarDatos(id, nom_libro, autor_libro, año_libro, editorial_libro, tematica_libro, correo_libro) {



    var boton = document.getElementById("boton");
    boton.innerHTML = "Guardar";
    document.getElementById("nom_lib").value = nom_libro;
    document.getElementById("autor").value = autor_libro;
    document.getElementById("año").value = año_libro;
    document.getElementById("editorial").value = editorial_libro;
    document.getElementById("tematica").value = tematica_libro;
    document.getElementById("email").value = correo_libro;

    boton.onclick = function () {

        var washingtonRef = db.collection("libros").doc(id);

        var nom_libro = document.getElementById("nom_lib").value;
        var autor_libro = document.getElementById("autor").value;
        var año_libro = document.getElementById("año").value;
        var editorial_libro = document.getElementById("editorial").value;
        var tematica_libro = document.getElementById("tematica").value;
        var correo_libro = document.getElementById("email").value;


        return washingtonRef.update({
            nom_libro: nom_libro,
            escritor: autor_libro,
            año: año_libro,
            editorial: editorial_libro,
            tematica: tematica_libro,
            correo_user: correo_libro
        })
            .then(function () {
                alert("Datos actualizados con exito.");
            })
            .catch(function (error) {
                alert("Error al actualizar los datos.");
            });
    }



}
function eliminarDatos(id) {


    db.collection("libros").doc(id).delete().then(function () {
        alert("Datos eliminados con éxito.");
    }).catch(function (error) {
        alert("Error al eliminar datos.");
        console.log(error);
    })

}


var tabla = document.getElementById('tabla');
db.collection("libros").onSnapshot((querySnapshot) => {
    tabla.innerHTML = "";
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().nom_libro}`);
        tabla.innerHTML += `
        <tr>
        <td>${doc.id}</td>
        <td>${doc.data().nom_libro}</td>
        <td>${doc.data().tematica}</td>
        <td>${doc.data().escritor}</td>
        <td>${doc.data().editorial}</td>
        <td>${doc.data().año}</td>
        <td>${doc.data().correo_user}</td>
        <td><button style='width:85px' type="button" class="waves-effect waves-light 
        btn" onclick="modificarDatos('${doc.id}','${doc.data().nom_libro}','${doc.data().escritor}','${doc.data().año}','${doc.data().editorial}','${doc.data().tematica}','${doc.data().correo_user}')">Mod</button></td>
        <td><button style='width:85px' type="button" class="waves-effect waves-light 
        btn" onclick="eliminarDatos('${doc.id}')">Lis</button></td>
        </tr>`;

    });
});