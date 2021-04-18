function remplir_jour() {
  let i = 1;
  while (i <= 31) {
    let chaine = document.createElement("OPTION");
    chaine.setAttribute("value", i);
    let t = document.createTextNode(i);
    chaine.appendChild(t);
    document.getElementById("day").appendChild(chaine);
    i++;
  }
}

function remplir_mois() {
  const mois = [
    "JAN",
    "FEV",
    "MAR",
    "AVR",
    "MAI",
    "JUIN",
    "JUIL",
    "AOU",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  for (let i = 0; i < mois.length; i++) {
    let chaine = document.createElement("option");
    chaine.setAttribute("value", i + 1);
    let t = document.createTextNode(mois[i]);
    chaine.appendChild(t);
    document.getElementById("month").appendChild(chaine);
  }
}

function remplir_annee() {
  const debut = 1900;
  const fin = new Date().getFullYear();
  for (let i = debut; i <= fin; i++) {
    let chaine = document.createElement("OPTION");
    chaine.setAttribute("value", i);
    let t = document.createTextNode(i);
    chaine.appendChild(t);
    document.getElementById("year").appendChild(chaine);
  }
}

function check(id, n) {
  let input = document.getElementById(id);
  let value = input.value;
  let er = document.getElementById("erreur_" + id);
  if (value.length < n) {
    er.style.display = "block";
    er.style.color = "red";
    //er.style.width = '1px';
    input.classList.remove("valid");
    input.classList.add("invalid");
    er.innerHTML = "Incorrect : au moins " + n + " caracteres";
  } else {
    er.style.display = "none";
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}

function check_mail() {
  let input = document.getElementById("email");
  let value = input.value;
  let re = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
  let is_email = re.test(value);

  var er = document.getElementById("erreur_email");
  if (!is_email) {
    document.getElementById("erreur_email").style.display = "block";
    input.classList.remove("valid");
    input.classList.add("invalid");
    document.getElementById("erreur_email").innerHTML =
      "Incorrect : Addresse incorrecte";
  } else {
    er.style.display = "none";
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}

function check_pwd() {
  let password = document.getElementById("code");
  let inputPass = document.getElementById("erreur_code");

  if (password.value.length < 8) {
    inputPass.innerHTML = "au moins 8 caracteres ";

    password.classList.remove("valid");
    password.classList.add("invalid");
  } else {
    inputPass.innerHTML = " ";

    password.classList.add("valid");
    password.classList.remove("invalid");
  }
}
function checkConf() {
  let confPassword = document.getElementById("code1");
  let password = document.getElementById("code");
  let inputConf = document.getElementById("erreur_code1");
  if (confPassword.value != password.value || confPassword.value.length < 8) {
    inputConf.innerHTML = "les codes ne correspond pas   ";
    confPassword.classList.remove("valid");
    confPassword.classList.add("invalid");
  } else {
    inputConf.innerHTML = "";
    confPassword.classList.add("valid");
    confPassword.classList.remove("invalid");
  }
}

remplir_jour();
remplir_mois();
remplir_annee();
window.addEventListener("DOMContentLoaded", function () {
  let name = document.getElementById("nom");
  let fname = document.getElementById("prenom");
  let pseudo = document.getElementById("pseudo");
  let prof = document.getElementById("proffesion");
  let email = document.getElementById("email");
  let Password = document.getElementById("code");
  let confPassword = document.getElementById("code1");

  name.addEventListener("change", function () {
    check("nom", 4);
  });
  fname.addEventListener("change", function () {
    check("prenom", 4);
  });
  pseudo.addEventListener("change", function () {
    check("pseudo", 4);
  });
  prof.addEventListener("change", function () {
    check("proffesion", 4);
  });
  email.addEventListener("change", function () {
    check_mail();
  });
  Password.addEventListener("change", function () {
    check_pwd();
  });

  confPassword.addEventListener("change", function () {
    checkConf();
  });

  document.getElementById("form").addEventListener("submit", validation);
});
function validation(event) {
  check("nom", 4);
  check("prenom", 4);
  check("pseudo", 4);
  check_mail();
  check_pwd();
  let invalid = document.querySelectorAll(".invalid");
  if (!invalid.length) {
    alert("form submited successfully");
  } else {
    alert("form submitted no");
    event.preventDefault();
  }
}
