$(document).ready(function() {
    // Fonction pour ajouter un produit 
    $("#add-form").submit(function(event) {
        event.preventDefault(); // Empêcher le rechargement de la page

        $.ajax({
            url: "../php/addProduct.php",
            type: "POST",
            data: new FormData(this), // Gérer les fichiers (images)
            contentType: false, // Ne pas modifier le type de contenu
            processData: false, // Ne pas traiter les données
            success: function(response) {
                if (response.trim() === "success") {
                    alert("Produit ajouté avec succès !");
                    $("#add-form")[0].reset();
                    } else {
                    alert(response); // Afficher le message d'erreur 
                }
            },
            error: function() {
                alert("Erreur lors de la connexion. Veuillez réessayer.");
            }
        });
    });

    // Fonction pour mettre à jour un produit 
    $("#product-table").on("click", ".update-btn", function() {
        const row = $(this).closest("tr");
        const productID = row.data("id");
        const quantity = row.find(".quantity").val();

        console.log("Product ID:", productID); // Vérifiez ces valeurs dans la console
        console.log("Quantity:", quantity);
        
        
        $.ajax({
            url: "../php/updateProduct.php",
            type: "POST",
            data: { prodID: productID, quantity: quantity },
            success: function(response) {
                console.log(response); // Affichez la réponse du serveur
                    if (response.trim() === "success") {
                        alert("Produit mis à jour avec succès !");
                        // Mettre à jour la quantité dans le tableau
                        row.find(".quantity").val(quantity);
                    } else {
                        alert("Erreur : " + response);
                    }
            },
            error: function(xhr, status, error) {
                console.log("AJAX Error:", status, error); // Affichez les erreurs AJAX dans la console
                alert("Erreur lors de la mise à jour du produit.");
            }
        });
    });

    // Fonction pour supprimer un produit 
    $("#product-table").on("click", ".delete-btn", function() {
        if (confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) {
            const row = $(this).closest("tr");
            const productID = row.data("id");

            $.ajax({
                url: "../php/deleteProduct.php",
                type: "POST",
                data: { prodID: productID },
                success: function(response) {
                    console.log("Response from server:", response); // Affichez la réponse du serveur
                    if (response.trim() === "success") {
                            row.remove(); // Retirer la ligne du tableau
                            alert("Produit supprimé avec succès !");
                        } else {
                            alert("Erreur : " + response);
                        }
                    },
                error: function() {
                    alert("Erreur lors de la suppression du produit.");
                }
            });
        }
    });
    
});
