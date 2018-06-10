
var db = firebase.firestore();
function agregarDatos(){
  var nombre = document.getElementById("txt_nombre").value;
  var apellido = document.getElementById("txt_apellido").value;
  var edad = document.getElementById("txt_edad").value;

  db.collection("usuarios").doc().set({
    name: nombre,
    lastname: apellido,
    age: edad
  })
  .then(function(){
    console.log("Documento ok");
  })
  .catch(function (error) {
      console.error("Error: ",error);
  });
}