<?php
include("db_connect.php");

// Assurez-vous que les erreurs sont visibles pour le débogage
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$id = $_POST['prodID'];

// Suppression du produit de la base de données 
$stmt = $conn->prepare("DELETE FROM product WHERE prodID = ?");
$stmt->bind_param("i", $id); // Utilisez "i" pour INTEGER

if ($stmt->execute()) {
    echo "success";
} else {
    echo "Erreur : " . $stmt->error; 
}

$stmt->close();
$conn->close();
?>
