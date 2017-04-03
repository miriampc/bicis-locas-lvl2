function validateForm(){
  var name=document.getElementById('name').value;
  var lastname=document.getElementById('lastname').value;
  var email=document.getElementById('input-email').value;
  var password=document.getElementById('input-password').value;
  var tipobici=document.getElementById('tipobici').value;
  var mensaje="", id=0;

//Funciones de Validación
  function validaNombreApellido(valor){
    if(valor.length==0 || valor==null){
      mensaje="Este campo es obligatorio";
      creaTooltip(mensaje,id);
      return false;
    }else if(!(/^([A-Za-zÑñá-úÁ-Ú ]+)$/.test(valor))){
      mensaje="Este campo solo acepta letras";
      creaTooltip(mensaje,id);
      return false;
    }else if(!(/[^a-zá-ú-0-9\s]+([a-zá-ú ]{2,})/.test(valor))){
      mensaje="La primera letra debe ser mayuscula";
      creaTooltip(mensaje,id);
      return false;
    }
    id++;
    console.log(id);
    return true;
  }

  function validaEmail(valor){
    if(valor.length==0 || valor==null){
      mensaje="Debe ingresar su correo electrónico es obligatorio";
      creaTooltip(mensaje,id);
      return false;
    }
    id++;
    validaPassword(password);
  }
  function validaPassword(valor){
    if(valor.length<6){
      mensaje="Debe ingresar su password, debe tener almenos seis caracteres";
      creaTooltip(mensaje,id);
      return false;
    }else if (valor=="098754" || valor=="123456" || valor=="password") {
      mensaje="El password debe ser diferente de 123456, 098754 y password";
      creaTooltip(mensaje,id);
      return false;
    }
    id++;
    validaSeleccion(tipobici);
  }
  function validaSeleccion(valor){
    if(valor==0){
      mensaje="Debe seleccionar una opcion";
      creaTooltip(mensaje,id);
      return false;
    }
    alert("Gracias todos los datos fueron enviados!");
    document.getElementById('name').value="";
    document.getElementById('lastname').value="";
    document.getElementById('input-email').value="";
    document.getElementById('input-password').value="";
    document.getElementById('tipobici').value=0;
  }
  if(validaNombreApellido(name)){if(validaNombreApellido(lastname)){validaEmail(email)}return false;}

}
var divBox=document.getElementsByClassName('input-box');
function creaTooltip(msj,id){
    var spanTool=document.createElement('span');
    spanTool.id="tooltip"+id;
    var p=document.createElement('p');
    p.innerHTML=msj;
    spanTool.appendChild(p);
    divBox[id].appendChild(spanTool);
}
