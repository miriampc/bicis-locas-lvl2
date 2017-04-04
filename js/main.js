function validateForm(){
  var name=document.getElementById('name');
  var lastname=document.getElementById('lastname');
  var email=document.getElementById('input-email');
  var password=document.getElementById('input-password');
  var tipobici=document.getElementById('tipobici');

  var mensaje="", id=0 ;
// document.getElementById('name').onblur=validaNombreApellido;
// document.getElementById('lastname').onblur=validaNombreApellido;

function validaNombreApellido(valor){
  if(valor.value.trim()==""){
    removeTooltip();
    if (valor.id=="name") {
      mensaje="Debe ingresar su nombre";
    }else {
      mensaje="Debe ingresar su apellido";
    }
    valor.value="";
    creaTooltip(mensaje,id);
    return false;
  }
  else if(!(/^([A-Za-zÑñá-úÁ-Ú ]+)$/.test(valor.value))){
    removeTooltip();
    mensaje="Este campo solo acepta letras";
    creaTooltip(mensaje,id);
    return false;
  }else if(!(/[^a-zá-ú-0-9\s]+([a-zá-ú ]{2,})/.test(valor.value))){
      removeTooltip();
      mensaje="La primera letra debe ser mayuscula";
      creaTooltip(mensaje,id);
      return false;
  }
  id++;
  removeTooltip();
  return true;
}


function validaEmail(valor){
  valor.focus();
  if(valor.value=="" || valor.value==null){
    removeTooltip();
    mensaje="Debe ingresar su correo electrónico es obligatorio";
    creaTooltip(mensaje,id);
    return false;
  }else if (!/([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi.test(valor.value)) {
    removeTooltip();
    mensaje="Debe ingresar en formato correcto";
    creaTooltip(mensaje,id);
    return false;
  }
  id++;
  validaPassword(password);
}

function validaPassword(valor){
  valor.focus();
  if((valor.value).length<6 || (valor.value).length>30){
    removeTooltip();
    mensaje="La contraseña debe tener mas de 6 y menos de 30 caracteres";
    creaTooltip(mensaje,id);
    return false;
  }else if (valor.value=="098754" || valor.value=="123456" || valor.value=="password") {
    removeTooltip();
    mensaje="La contraseña debe ser diferente de 123456, 098754 y password";
    creaTooltip(mensaje,id);
    return false;
  }
  id++;
  validaSeleccion(tipobici);
}

function validaSeleccion(valor){
  valor.focus();
  if(valor.value==0){
    removeTooltip();
    mensaje="Debe seleccionar una opcion";
    creaTooltip(mensaje,id);
    alert("Complete correctamente los campos obligatorios del formulario!");
    return false;
  }
  alert("Gracias sus datos fueron registrados!");
  document.getElementById('name').value="";
  document.getElementById('lastname').value="";
  document.getElementById('input-email').value="";
  document.getElementById('input-password').value="";
  document.getElementById('tipobici').value=0;
  name.focus();
}

var divBox=document.getElementsByClassName('input-box');
function creaTooltip(msj,id){
    var spanTool=document.createElement('span');
    spanTool.setAttribute("class",'tool')
    var p=document.createElement('p');
    p.innerHTML=msj;
    spanTool.appendChild(p);
    divBox[id].appendChild(spanTool);
}
function removeTooltip(){
   var tool=document.getElementsByClassName('tool');
   for (var i = 0; i < tool.length; i++) {
     tool[i].style.display="none";
   }
}
var texto="";
var arrayTexto=valor.value.split(" ");
for(var i=0;i<arrayTexto.length;i++){
  arrayTexto[i]=arrayTexto[i].charAt(0).toUpperCase()+arrayTexto[i].substring(1).toLowerCase()+" ";
  texto+=arrayTexto[i];
}
//Validacion de Formulario
  if(validaNombreApellido(name)){
    if(validaNombreApellido(lastname)){
      validaEmail(email);
    }
    return false;
  }
}
