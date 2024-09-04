<?php

    session_start();
    include('db_connect.php');

    $email = htmlspecialchars($_POST["userEmail"]);
    $pwd = htmlspecialchars($_POST["pwd"]);

    $stmt = $conn->prepare("SELECT userID, userName,passwordd FROM user WHERE email= ? " ) ;
    $stmt->bind_param("s",$email);
    $stmt->execute();
    $stmt->store_result();//stocker les resultats dans la memeoire locale de php

    if ($stmt->num_rows > 0 ){
        //lier les colonnes de résultat aux variables php
        $stmt->bind_result($userID, $userName, $hashedPwd);
        //reccuperer les resultats en remplissant les variables php avec les valeurs 
        $stmt->fetch();
        if (password_verify($pwd ,$hashedPwd)){
            $_SESSION["userID"] = $userID;
            $_SESSION["userName"] = $userNAme;
            $_SESSION["email"] = $email;
            echo "success";
        } else {
            echo "Mot de passe incorrect.";
        }
    } else {
        echo "Aucun compte ne correspond à cet email.";
    }
    $stmt->close();
    $conn->close();   

?>