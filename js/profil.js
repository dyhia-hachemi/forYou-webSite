$("#edit-btn").click(function(){
    $("#profil").hide();
    $("#profil-edit").show();
});

function saveChanges() {
    const newName = document.getElementById('new-name').value;
    const newEmail = document.getElementById('new-email').value;
    const newPassword = document.getElementById('new-password').value;
    const newAvatar = document.getElementById('new-avatar').files[0];

    // Validation simple
    if (!newEmail.includes("@")) {
        alert("Veuillez entrer un email valide.");
        return;
    }

    // Appliquer les changements sur la page
    if (newName) document.getElementById('user-name').textContent = newName;
    if (newEmail) document.getElementById('user-email').textContent = newEmail;

    if (newAvatar) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('avatar-img').src = e.target.result; // Assurez-vous que cet élément existe
        };
        reader.readAsDataURL(newAvatar);
    }

    alert("Modifications enregistrées avec succès !");
    $("#profil-edit").hide();
    $("#profil").show();
}


/*
$(".save-btn").click(function(){
    console.log("bien ");
    //$("#profil").toggleClass("active desactive");
    //les elements avec .active seront visibles
    $ ("#profil-edit").hide();
     //les elements avec .desactive seront cachés
    $("#profil").show();
})*/
