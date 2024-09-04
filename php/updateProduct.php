<?php
include("db_connect.php");

// Assurez-vous que les erreurs sont visibles pour le débogage
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$id = $_POST['prodID'];
$quantity = $_POST['quantity'];

// Journalisez les valeurs reçues pour le débogage
error_log("ID: " . $id);
error_log("Quantity: " . $quantity);

$stmt = $conn->prepare("UPDATE product SET qte = ? WHERE prodID = ?");
$stmt->bind_param("ii", $quantity, $id);

if ($stmt->execute()) {
    echo "success";
} else {
    echo "Erreur : " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
