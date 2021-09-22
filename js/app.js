var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var email1 = document.getElementById('email1');
var email2 = document.getElementById('email2');
var telefono = document.getElementById('telefono');
var psw1 = document.getElementById('psw1');
var psw2 = document.getElementById('psw2');
var error = document.getElementById('error');

function validarRegistro(){    
    console.log('Validando formulario...'); /**Permite ver el mensaje en consola */
    var mensajesError= [];
    var valor = true;

    if(nombre.value === null || nombre.value === ""){
        mensajesError.push(" Ingresa tu nombre");
        valor=false;
    }

    if(apellido.value === null || apellido.value === ""){
        mensajesError.push(" Ingresa tu apellido");
        valor=false;
    }

    if(email1.value === null || email1.value === ""){
        mensajesError.push(" Ingresa tu email");
        valor=false;
    }

    if(email2.value === null || email2.value === ""){
        mensajesError.push(" Confirma tu email");
        valor=false;
    }

    if(email2.value !== email1.value){
        mensajesError.push(" Verifica Tu Email");
        valor=false;
    }

    if(telefono.value === null || telefono.value === ""){
        mensajesError.push(" ingresa tu telefono");
        valor=false;
    }

    if(psw1.value === null || psw1.value === ""){
        mensajesError.push(" ingresa tu password");
        valor=false;
    }

    if(psw2.value === null || psw2.value === ""){
        mensajesError.push(" Confirma tu password");
        valor=false;
    }

    if(psw2.value !== psw1.value){
        mensajesError.push(" Verifica Tu Password");
        valor=false;
    }

    mensajesError.join(' , ');    
   
    if(valor === false){
        return  window.alert(mensajesError);
    }else{
        window.alert("Registro Exitoso");   
        location.href = 'https://steep-sunset-seaplane.glitch.me';        
    }    
}

/*return false evita que el formulario se envie por defecto*/