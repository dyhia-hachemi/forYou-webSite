const addBtns = document.querySelectorAll("#addBtn");
const panier = document.querySelector(".nbr");
var listProd = [];

addBtns.forEach((btn) => {
    btn.addEventListener ("click" , () => {
        console.log("b1");
        //reccupere le nombre actuel d'articles dans le panier 
        let currentCount = parseInt(panier.textContent.match(/\d+/)[0]);
        console.log("b2");
        currentCount++ ; 
        //mettre à jour le nbr articles dans panier 
        panier.innerHTML = "(" + currentCount + ")";
    })
});

/*
document.addEventListener("DOMContentLoaded", function(){
    const cartItemContainer = document.querySelector(".cart-items");
    //const panier = document.querySelectorAll(".nbr");
    const cartItems = [];
    function updateCart (){
        const total = cartItems.reduce((total, item) => total + item.quantity , 0);
        panier.innerHTML = "(" + total + ")";
    }
});*/