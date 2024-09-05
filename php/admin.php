<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/body.css">
    <link rel="stylesheet" href="../css/admin.css">
    <link rel="stylesheet" href="../css/logo.css">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/panier.css">
    <link rel="stylesheet" href="../css/admin-responsive.css">
    <title>ForYou | Admin</title>
    <script src="https://kit.fontawesome.com/a6c1691723.js" crossorigin="anonymous"></script>
    <script src="../jquery-3.7.1.js"></script>
</head>

<body>
    <header id="head">
        <div class="navbar">
            <div class="logo">
                <p class="logo">For<span class="highlight">You</span><span id="sp">.</span></p>
            </div>
            <nav class="main-nav">
                <ul>
                    <li><a href="#panier">Articles</a></li>
                    <li><a href="../html/product.html">Produits</a></li>
                </ul>
                <div class="icon-container">
                    <p class="icon open"><i class="fas fa-bars"></i></p>
                </div>
            </nav>
            <nav id="sidemenu">
                <div class="icon-container">
                    <p class="icon close"><i class="fas fa-times"></i></p>
                </div>
                <ul>
                    <li><a href="#panier">Articles</a></li>
                    <li><a href="../html/product.html">Produits</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="product-add">
        <div class="container">
            <h2>Ajouter un nouveau produit:</h2>
            <form action="#" enctype="multipart/form-data" method="post" class="add-form" id="add-form">
                <label for="product-name">Nom du produit:</label>
                <input type="text" name="prodName" placeholder="Nom du produit" required>

                <label for="product-description">Description Du Produit:</label>
                <textarea name="product-description" id="product-description" placeholder="Description du produit"></textarea>

                <label for="product-price">Prix du produit:</label>
                <input type="text" name="product-price" placeholder="Prix du produit" required>

                <label for="product-image">Image du produit:</label>
                <input type="file" name="product-image" accept="image/*">

                <button type="submit" class="btn btn2">Valider</button>
            </form>
        </div>
    </section>

    <section id="panier">
        <h1>Les éléments ajoutés :</h1>
        <table id="product-table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                    <th>Action</th>
                </tr> 
            </thead>
            <tbody>
            <?php 
    include("db_connect.php");

    // Récupérer tous les produits de la base de données
    $result = $conn->query("SELECT * FROM product");

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            // Utiliser le chemin tel qu'il est stocké dans la base de données
            $img = $row['img'];
            
            echo "<tr data-id='" .$row['prodID'] ."'>
                    <td><img src='" .$img ."' alt='" .$row['prodName'] ."'></td>
                    <td>" .$row['prodName'] ."</td>
                    <td>" .$row['prodDesc'] ."</td>
                    <td>" .$row['prodPrice'] ."DA</td>
                    <td><input type='number' class='quantity' value='1' min='1'></td>
                    <td>
                        <button class='update-btn'>Mettre à jour</button>
                        <button class='delete-btn'>Supprimer</button>
                    </td>
                </tr>";
        }
    } else {
        echo "<tr>
                <td colspan='6'>Aucun produit trouvé</td>
            </tr>";
    }

    $conn->close();
?>
            </tbody>
        </table>
    </section>

    <script src="../js/admin.js"></script>
    <script src="../js/responsive.js"></script>
</body>

</html>
