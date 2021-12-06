
function autoInicioCliente(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://129.146.198.67:8080/api/cookware/all",
			//"http://localhost:8080/api/cookware/all",
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
		myTable+="<td>"+respuesta[i].reference+"</td>";
		myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].category+"</td>";
        myTable+="<td>"+respuesta[i].materiales+"</td>";
		myTable+="<td>"+respuesta[i].dimensiones+"</td>";
		myTable+="<td>"+respuesta[i].description+"</td>";
		myTable+="<td>"+respuesta[i].availability+"</td>";
		myTable+="<td>"+respuesta[i].price+"</td>";
		myTable+="<td>"+respuesta[i].quantity+"</td>";
		myTable+="<td>"+respuesta[i].photography+"</td>";
        myTable+="<td> <button class='btn btn-outline-success btn-min-width mr-1 mb-1 btn-sm' onclick=' actualizar("+respuesta[i].reference+")'>Actualizar</button>";
        myTable+="<td> <button class='btn btn-outline-success btn-min-width mr-1 mb-1 btn-sm' onclick='borrar("+respuesta[i].reference+")'>Borrar</button>";
        myTable+="</tr>";
		
    }
    myTable+="</table>";
    $("#resultado").html(myTable);
}

function guardar(){
    let var2 = {
        reference: $("#referencePro").val(),
		brand: $("#brandPro").val(),
		category: $("#categoryPro").val(),
		materiales: $("#materialesPro").val(),
		dimensiones: $("#dimensionesPro").val(),
		description: $("#descriptionPro").val(),
		availability: $("#availabilityPro").val(),
		price: $("#pricePro").val(),
		quantity: $("#quantityPro").val(),
		photography: $("#photographyPro").val(),
		
        };
      	
		console.log(var2);
        $.ajax({
		url:"http://129.146.198.67:8080/api/cookware/new",
			//"http://localhost:8080/api/cookware/new",
         type:'POST',
        contentType: "application/json",
        dataType: 'JSON',
        data: JSON.stringify(var2),
       
        success:function(response) {
           console.log("Se guardo correctamente");
			alert("Producto se guardo correctamente!");
			window.location.reload()
    
        },
		error: function(jqXHR, textStatus, errorThrown) {
             window.location.reload() 
            alert("Producto no se guardo !");
			
    
    
        }
        });

}


function actualizar(referencePro){
	if ($("#brandPro").val().length == 0 || $("#categoryPro").val().length == 0 
    || $("#materialesPro").val().length == 0 ||  $("#dimensionesPro").val().length== 0  || $("#descriptionPro").val().length==0
    || $("#availabilityPro").val().length==0 ||   $("#pricePro").val().length==0
	 || $("#quantityPro").val().length==0 ||   $("#photographyPro").val().length==0)
	{
        alert("Todos los campos deben estar llenos")
    } else {
	
    let myData={
		reference:referencePro,
		brand: $("#brandPro").val(),
		category: $("#categoryPro").val(),
		materiales: $("#materialesPro").val(),
		dimensiones: $("#dimensionesPro").val(),
		description: $("#descriptionPro").val(),
		availability: $("#availabilityPro").val(),
		price: $("#pricePro").val(),
		quantity: $("#quantityPro").val(),
		photography: $("#photographyPro").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.146.198.67:8080/api/cookware/update",
		    //"http://localhost:8080/api/cookware/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
			$("#referencePro").val("");
            $("#brandPro").val("");
            $("#categoryPro").val("");
            $("#materialesPro").val
			$("#dimensionesPro").val("");
			$("#descriptionPro").val("");
			$("#availabilityPro").val("");
			$("#pricePro").val("");
			$("#quantityPro").val("");
			$("#photographyPro").val("");
			autoInicioCliente();
            alert("se ha Actualizado correctamente el Producto!")
        },
		error: function(jqXHR, textStatus, errorThrown) {
			alert("No se Actualizo el Producto!")
            
      },
		
    });

}
}

function borrar(reference){
    let myData={
        reference:reference
    };
    let dataToSend=JSON.stringify(myData);
	console.log(dataToSend);
    $.ajax({
        url:"http://129.146.198.67:8080/api/cookware/"+reference,
		    //"http://localhost:8080/api/cookware/"+reference,
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
            alert("No se Elimino!")
        }
    });
	

}