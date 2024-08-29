 //lors d'un clic
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

