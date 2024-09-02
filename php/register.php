<?php
    session_start();
    include('db_connect.php');

    $userName = htmlspecialchars($_POST["userName"]);
    $email = htmlspecialchars($_POST["userEmail"]);
    $pwd = htmlspecialchars($_POST["pwd"]);
    /*$conconfirmPassword = htmlspecialchars($_POST["conconfirmPassword"]);*/
    /* if ($pwd === $conconfirmPassword){}*/
    $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO user(userName, email, passwordd) VALUES (?, ? ,?)");
    $stmt->bind_param("sss" , $userName, $email, $hashedPwd);

    if ($stmt->execute()){
        echo "Inscription réussie! Vous pouvez maintenant vous connecter.";
    } else { 
        echo "Erreur lors de l'inscription. Veillez reéssayer.";
    }
    $stmt->close();
    $conn->close();
?>