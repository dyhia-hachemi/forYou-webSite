<?php
    include("db_connect.php");

    $name = $_POST['prodName'];
    $desc = $_POST['product-description'];
    $price = $_POST['product-price'];

    // Gestion de l'image 
    $image = $_FILES['product-image'];
    $imagePath = "../images/" . basename($image["name"]);

    // Insertion du produit dans la base de données 
    $stmt = $conn->prepare("INSERT INTO product (prodName, prodDesc, prodPrice, img) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssds", $name, $desc, $price, $imagePath);

    if ($stmt->execute()) {
        echo "success";
    } else {
        echo "Erreur : " . $stmt->error; 
    }

    $stmt->close();
    $conn->close();
?>
