<?php
    include("db_connect.php");

    $id = htmlspecialchars($_POST['prodID']);
    
    //suppression du produit de la base de données 
    $stmt = $conn->prepare(" DELETE FROM product WHERE prodID = ? ");
    $stmt->bind_param("d" , $id);
    if ( $stmt->execute()) {
        echo "succes";
    } else {
        echo "Erreur" . $stmt->error ; 
    }
    $stmt->close();
    $conn->close();
?>