var rollV, nameV, genderV, addressV, telephoneV, namepV; //variaveis que irão receber os dados cadastrados

function readFom() {
  rollV = document.getElementById("roll").value; 
  namepV = document.getElementById("namep").value;
  nameV = document.getElementById("name").value;
  genderV = document.getElementById("gender").value;
  addressV = document.getElementById("address").value;
  telephoneV = document.getElementById("telephone").value;
  console.log(rollV, nameV, addressV, genderV, telephoneV, namepV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      name: nameV,
      namep: namepV,
      gender: genderV,
      address: addressV,
      telephone: telephoneV
    });
  alert("Dados Inseridos");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("namep").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("telephone").value = "";

};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      document.getElementById("roll").value = snap.val().rollNo;
      document.getElementById("name").value = snap.val().name;    
      document.getElementById("namep").value = snap.val().namep;
      document.getElementById("gender").value = snap.val().gender;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("telephone").value = snap.val().telephone;

    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   rollNo: rollV,
      name: nameV,
      namep: namepV,
      gender: genderV,
      address: addressV,
      telephone: telephoneV,
    });
  alert("Dados Atualizados");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("namep").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("telephone").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .remove();
  alert("Dados Excluidos");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("namep").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("telefone").value = "";

};
