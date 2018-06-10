var db = firebase.firestore();

const ver_datos = document.querySelector("#ver_datos");

db.collection("usuarios").onSnapshot(function (querySnapshot) {

    querySnapshot.docChanges().forEach(function (change) {

        ver_datos.innerHTML += "<h3>"+
        change.doc.data().name + " - "+
        change.doc.data().lastname + " - "+
        change.doc.data().age + "</h3>"
    });
    
});