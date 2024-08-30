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

//afficher ou masquer mot de passe 
let e = true ; 
function togglePassword(inputId, eyeIcon) {
    const passwordInput = document.getElementById(inputId);
    // si e est vrai changer le type de input de password à tex
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