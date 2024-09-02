 // inscription ou connexion
 $ ("span").click(function(){
    $(".login").toggleClass("active desactive");
    //les elements avec .active seront visibles
    $ (".active").show();
    //les elements avec .desactive seront cachés
    $ (".desactive").hide();

    $(".register").toggleClass("desactive active");
    //les elements avec .active seront visibles
    $ (".active").show();
    //les elements avec .desavtive seront cachés
    $ (".desactive").hide();
})
/*******************************************************************/
//afficher ou masquer mot de passe 
let e = true ; 
function togglePassword(inputId, eyeIcon) {
    const passwordInput = document.getElementById(inputId);
    // si e est vrai changer le type de input de password à text
    if(e) {

        passwordInput.setAttribute("type" , "text");
        //changer l'icon
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
        e = false;
    } else { //si le mot de passe est deja affiché
        passwordInput.setAttribute("type" , "password");
        //changer l'icon
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
        e = true;
    }
}
/********************************************************************/
$(".login-form").submit(function (event) {
    event.preventDefault(); //empecher le rechargement de la page
    email = $("#userEmail").val();

    $.ajax({
        url : "../php/login.php",
        type : "POST",
        data : $(this).serialize(),
        success : function (response) {
            if (response === "success") {
                if ( email === "admin@gmail.com"){
                    window.location.href = "admin.html";
                } else {
                    window.location.href = "user.html";
                }
            } else {
                alert (response); //afficher le message d'erreur 
            }
        },   
        error : function (){
            alert("Erreur lors de la connexion. Veuillez réessayer.");
            $(".login-form")[0].reset();
        }
    });
});


/***********************************************************************/
$(".register-form").submit(function (event) {
   // event.preventDefault(); //empecher le rechargement de la page
    var password  = $("#pass-register").val();

    /*
    var confirmPassword = $("#conf-pass-register").val();

    if (password !== confirmPassword) {
        alert ("Les mots de passes ne correspondent pas!");
        $(".register-form")[0].reset();
        return;
    }
    */
    /*Envoi du formulaire d'inscription via AJAX*/
    $.ajax({
        url : "../php/register.php",
        type : "POST",
        data : $(this).serialize(),//transforme les données du formulaire au format d'une requette HTTP
        success : function (response) {
            alert (response); //afficher le message d'erreur 
            $(".register-form")[0].reset();//reinitialiser le formulaire
            $(".register-form").hide();
            $(".login").show(800);//afficher le formulaire de connexion
        },
        error : function (){
            alert("Erreur lors de l'inscription. Veuillez réessayer.");
            $(".register-form")[0].reset();
        }
    });
});
