<?php
    include("db_connect.php");

    $id = htmlspecialchars($_POST['prodID']);
    $quantity = htmlspecialchars($_POST['quantity']);
    //suppression du produit de la base de données 
    $stmt = $conn->prepare("UPDATE product SET qte = ? WHERE prodID = ? ");
    $stmt->bind_param("ii" ,$quantity, $id);
    if ( $stmt->execute()) {
        echo "succes";
    } else {
        echo "Erreur" . $stmt->error ; 
    }
    $stmt->close();
    $conn->close();
?>