<?php
    include("db_connect.php");

    $name = htmlspecialchars($_POST['product-name']) ;
    $desc = htmlspecialchars($_POST['product-description']) ;
    $price = htmlspecialchars($_POST['product-price']) ;
    //gestion de l'image 
    $image = $_FILES['product-image'];
    $imagePath = "../images/" . basename($image["name"]);

    //insertion du produit dans la base de données 
    $stmt = $conn->prepare("INSERT INTO product (prodName, prodDesc, prodPrice, img) VALUE ( ?,?,?,?)");
    $stmt->bind_param("ssds" , $name,$desc,$price,$imagePath);
    if ( $stmt->execute()) {
        echo "succes";
    } else {
        echo "Erreur" . $stmt->error ; 
    }
    $stmt->close();
    $conn->close();
?>