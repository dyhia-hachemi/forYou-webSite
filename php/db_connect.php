<?php
    $servernme = "localhost";
    $username = "root";
    $password = "";
    $dbname = "for you";
    //connexion
    $conn = new mysqli ($servernme ,$username,$password ,$dbname );
    if ( $conn -> connect_error){
        die ("echec de la connexion :" .$conn -> connect_error);
    }
    echo "connexion réussie <br>";
?>    