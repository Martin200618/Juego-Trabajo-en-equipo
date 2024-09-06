<?php
	
	#abre la conexión a la base de datos
	include('conexion.php');
			
	#Para validar que los campos no esten vacios a la hora de enviar o consultar
	if (!empty($_POST["validar"])){
		#Valida los datos que se almacenaron en los input usuario y contrasena
		if (empty($_POST["user_logi_inve"]) and empty($_POST["cont_logi_inve"])) {
			#Si los input estan vacios sale una alerta con formato Boostrap
			echo '<script type="text/javascript">
				alert("INPUT VACIOS");
				window.location.assign("./Login_Falla.html");
				</script>';

			
		} else {
			#Recibe los datos de los input
			$user_logi_inve= $_POST['user_logi_inve'];
			$cont_logi_inve= $_POST['cont_logi_inve'];
			#Valida por medio de la query
			$sql=$link->query( "SELECT * FROM usuarios WHERE usuario='$user_logi_inve' AND contrasena='$cont_logi_inve' ");

			#Esto es para confirmar si los datos estan en la base de datos
			if ($datos=$sql->fetch_object()) {
				#abre una ubicación predeterminada, pagina, pagina web, url
				echo "<script> location.href=\"./modos.html\" </script>";
			} else {
				#Esto es por si algun dato esta mal
				echo '<script type="text/javascript">
				alert("Datos Incorrectos");
				window.location.assign("./iniciar_sesion.html");
				</script>';
			}
			
		}
		
	}


?>