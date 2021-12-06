
function autoInicioCliente(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://129.146.198.67:8080/api/user/all",
			//"http://localhost:8080/api/user/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
			
        }
    
    });

}


function pintarRespuesta(respuesta){

    let myTable="<table>";
	
    for(i=0;i<respuesta.length;i++){
		
        myTable+="<tr>";
		myTable+="<td>"+respuesta[i].identification+"</td>";
		myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].address+"</td>";
        myTable+="<td>"+respuesta[i].cellPhone+"</td>";
		myTable+="<td>"+respuesta[i].email+"</td>";
		myTable+="<td>"+respuesta[i].password+"</td>";
		myTable+="<td>"+respuesta[i].zone+"</td>";
		myTable+="<td>"+respuesta[i].type+"</td>";
        myTable+="<td> <button class='btn btn-outline-success btn-min-width mr-1 mb-1 btn-sm' onclick=' actualizar("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button class='btn btn-outline-success btn-min-width mr-1 mb-1 btn-sm' onclick='borrar("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
		
    }
    myTable+="</table>";
    $("#resultado").html(myTable);
}

function guardar(){
    let var2 = {
        identification: $("#identificationUser").val(),
		name: $("#nameUser").val(),
		address: $("#addressUser").val(),
		cellPhone: $("#cellPhoneUser").val(),
		email: $("#emailUser").val(),
		password: $("#passwordUser").val(),
		zone: $("#zoneUser").val(),
		type: $("#typeUser").val(),
		
        };
      	
		console.log(var2);
        $.ajax({
		url:"http://129.146.198.67:8080/api/user/new",
			//"http://localhost:8080/api/user/new",
         type:'POST',
        contentType: "application/json",
        dataType: 'JSON',
        data: JSON.stringify(var2),
       
        success:function(response) {
           console.log("Se guardo correctamente");
			alert("Usuario se guardo correctamente");
			window.location.reload()
    
        },
		error: function(jqXHR, textStatus, errorThrown) {
             window.location.reload() 
            alert("Usuario no se guardo correctamente");
			
    
    
        }
        });

}


function actualizar(idUser){
	if ($("#identificationUser").val().length == 0 || $("#nameUser").val().length == 0 || $("#addressUser").val().length == 0 
    || $("#cellphoneUser").val().length == 0 ||  $("#emailUser").val().length== 0  || $("#passwordUser").val().length==0
    || $("#zoneUser").val().length==0 ||   $("#typeUser").val().length==0)  {
        alert("Todos los campos deben estar llenos")
    } else {
	
    let myData={
		id:idUser,
		identification: $("#identificationUser").val(),
		name: $("#nameUser").val(),
		address: $("#addressUser").val(),
		cellPhone: $("#cellPhoneUser").val(),
		email: $("#emailUser").val(),
		password: $("#passwordUser").val(),
		zone: $("#zoneUser").val(),
		type: $("#typeUser").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.146.198.67:8080/api/user/update",
		    //"http://localhost:8080/api/user/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
			$("#id").val("");
            $("#identificationUser").val("");
            $("#nameUser").val("");
            $("#addressUser").val
			$("#cellPhoneUser").val("");
			$("#emailUser").val("");
			$("#passwordUser").val("");
			$("#zoneUser").val("");
			$("#typeUser").val("");
			autoInicioCliente();
            alert("se ha Actualizado correctamente el Usuario!")
        },
		error: function(jqXHR, textStatus, errorThrown) {
			alert("No se Actualizo Correctamente!")
            
      },
		
    });

}
}

function borrar(idUser){
    let myData={
        id:idUser
    };
    let dataToSend=JSON.stringify(myData);
	console.log(dataToSend);
    $.ajax({
        url:"http://129.146.198.67:8080/api/user/"+idUser,
		    //"http://localhost:8080/api/user/"+idUser,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
			console.log(respuesta);
            $("#resultado").empty();
            autoInicioCliente();
            alert("Se ha Eliminado Correctamente!")
        },
		error: function (jqXHR, textStatus, errorThrown) {
            alert("No se Elimino Correctamente!")
        }
    });
	

}