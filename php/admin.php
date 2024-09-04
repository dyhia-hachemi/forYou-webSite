<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../css/body.css">
    <link rel="stylesheet" href="../css/admin.css">
    <link rel="stylesheet" href="../css/logo.css">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/panier.css">
    <title>ForYou | Admin </title>
</head>
<body>
    <header id="head">
        <div class="navbar">
            <div class="logo">
                <p class="logo">For<span class="highlight">You</span><span id="sp">.</span></p>
            </div>
            <nav>                    
                <ul>
                    <li><a href="#panier">Articles</a></li>
                    <li><a href="product.html">Produits</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="product-add">
        <div class="container">
            <h2>Ajouter un nouveau produit:</h2>
            <form action="#" enctype="multipart/form-data" method="post" class="add-form" id="add-form">
                <label for="product-name">Nom du produit:</label>
                <input type="text" name="prodName" placeholder="nom du produit " required>
                <label for="product-description">Description Du Produit:</label>
                <textarea name="product-description" id="product-description" placeholder="Description du produit"></textarea>
                <label for="product-price">Prix du produit:</label>
                <input type="text" name="product-price" placeholder="Prix du produit" required >
                <label for="product-image">Image du produit:</label>
                <input type="file" accept="image/*">
                <button type="submit" class="btn btn2">Valider</button>
            </form>
        </div>
    </section>
    <section id="panier">
        <h1>Les élements Ajoutés :</h1>
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
            <tbody></tbody>
            <?php 
                include ("db_connect.php");
                //reccuperer tous le produits de la base de données
                $result = $conn->query ("SELECT * FROM product");

                if($result->num_rows > 0 ){
                    while ($row = $result->fetch_assoc()){
                        $img = str_replace("../" , "" , $row['img'] );
                        echo "<tr data-id='" .$row['prodID'] ."'>
                                <td><img src='" .$img ."' alt='Image du produit'></td>
                                <td>" .$row['prodName'] ."</td>
                                <td>" .$row['prodDesc'] ."</td>
                                <td>" .$row['prodPrice'] ."$</td>
                                <td>
                                    <input type='number' class='quantity' value='1' min='1'>
                                </td>
                                <td>
                                    <button class='update-btn'>Mettre à jour</button>
                                    <button class='delete-btn'>Supprimer</button>
                                </td>
                            </tr>";
                    }
                } else {
                    echo "<tr>
                            <td collspan='6'>Aucun produit trouvé </td>
                        <tr>
                        ";
                }
                $conn->close();
            ?>
        </table>
    </section>
    <script src="../js/admin.js"></script>
</body>
</html>