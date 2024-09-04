$(document).ready(function(){
    //fonction pour ajouter un produit 
    $("#add-form").submit(function(event) {
        event.preventDefault(); //empecher le rechargement de la page
            $.ajax({
            url : "../php/addProduct.php",
            type : "POST",
            data : new FormData(this),//permet de gerer les fichiers (images) contrairement à serialize()
            //donner le controle au nav et empecher jQuery de modifier les données comme l'ajout d'un entete
            contentYype : false,
            processData : false,
            success : function (response) {
                if (response === "success") {
                   alert("Produit ajouté avec succès !");
                   $("#add-form")[0].reset();
                   location.reload();//recharger la page pour afficher le nouveau produit 
                } else {
                    alert (response); //afficher le message d'erreur 
                }
            },   
            error : function (){
                //alert("Erreur lors de la connexion. Veuillez réessayer.");
            }
        });
    });

    //fonction pour mettre à jour un produit 
    $("#product-table").on("click", ".update-btn",function(){
      //if (confirm("Etes-vous sur dr vouloir supprimer"))
      const row = $(this).closest("tr");
      const productID = row.data("id");
      const quantity = row.find(".quantity").val();

      $.ajax({
          url : "../php/updateProduct.php",
          type : "POST",
          data : {id : productID, quantity :quantity },
          contentYype : false,
          processData : false,
          success : function (response) {
              if (response === "success") {
                 alert("Quantité mise à jour avec succès !");
              } else {
                  alert ("Erreur lors de la mise à jour de la quantité"); //afficher le message d'erreur 
              }
          },   
      });
  });
  //fonction pour supprimer un produit 
  $("#product-table").on("click", ".delete-btn",function(){
    if (confirm("Etes-vous sur dr vouloir supprimer ce produit?")){
      const row = $(this).closest("tr");
      const productID = row.data("id");
  
      $.ajax({
          url : "../php/deleteProduct.php",
          type : "POST",
          data : {id : productID },
          success : function (response) {
              if (response === "success") {
                 alert("Produit supprimé avec succès !");
                 row.remove();//supprimer la ligne de la table
              } else {
                  alert ("Erreur lors de la suppression du produit"); //afficher le message d'erreur 
              }
          },   
          error : function() {
            alert (" Erreur lors de la suppression du produit ")
          }
      });
    }
  });
});