function compare(){


len1 = document.getElementById("pass1").value;
len2 = document.getElementById("pass2").value;

if(len1.length < 8 || len2.length < 8){


  insertText("Passwords Must Be At Least 8 Characters" )

}

else{

if (document.getElementById("pass1").value===document.getElementById("pass2").value){


insertText("Password Has Been Set" )

}

else{

insertText("Passwords Do Not Match")
}


}
}

function insertText(x){

var h = document.getElementById("h2");
h.insertAdjacentHTML("afterend", x)

}
