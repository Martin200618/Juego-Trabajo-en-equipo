<?php
//Conexion por procedimientos
        $link = mysqli_connect("localhost","root","","setquestprueba");

        if(!$link){
           die ("Conexión fallida: " . mysqli_connect_error());
            echo "Acceso denegado :-(";
        }
?>