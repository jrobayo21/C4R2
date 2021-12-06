function limpiarErrores(){
    var error = document.getElementsByTagName('span');
    for(var i=0; i<error.length; i++){
        error[i].innerText="";
    }
}
var correo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var patronNumeros = /[0-9]/;

/*---------------------------------------
            Login
----------------------------------------*/
function validarLogin(form){
    limpiarErrores();
    // validar campios vacios
    if(form.usuario.value.trim().length==0){
        document.getElementById('errorUser').innerText='* Campo obligatorio';
        form.usuario.focus();
        return false;
    }else if(!correo.test(form.usuario.value)){
        document.getElementById('errorUser').innerText="* Email no valido";
        formulario.email.focus;
        return false;
    }
    if(form.contrasena.value.trim().length == 0){
        document.getElementById('errorPass').innerText='* Campo obligatorio';
        formulario.contrasena.focus();
        return false;
    }
}
jQuery(document).on("submit", "#login", function(event){
    event.preventDefault();
    let user = $($("#login")[0].usuario).val();
    let pass =$($("#login")[0].contrasena).val();
    console.log(user);
    console.log(pass);
    $.ajax({
        url: "http://129.146.198.67:8080/api/user/"+user+"/"+pass,
		//"http://localhost:8080/api/user/"+user+"/"+pass,
		 	
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            if(!respuesta.error){
                if(respuesta.name!="NO DEFINIDO"){
                    console.log("entro")
                    location.href='FormUser.html';
                }else{
                    $(".error").html("<span>No existe el usuario</span>").slideDown('slow');
                    setTimeout(function(){
                        $(".error").slideUp("slow");
                    },3000)
                }
            }
        }
    })
})
