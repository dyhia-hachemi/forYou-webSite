// **Partie 1 : Récupération des éléments du DOM**

// Sélectionne le formulaire d'ajout de produit
const productForm = document.querySelector('#product-add form');

// Sélectionne le corps du tableau où les produits du panier seront affichés
const cartItemsContainer = document.querySelector('#panier tbody');

// Sélectionne l'élément HTML où le total du panier sera affiché
const cartTotalElement = document.getElementById('cart-total');

// **Partie 2 : Écouteur d'événement pour la soumission du formulaire**

// Lorsque le formulaire est soumis...
productForm.addEventListener('submit', (event) => {
  // Empêche le comportement par défaut du formulaire (rafraîchissement de la page)
  event.preventDefault();

  // Récupère les informations du produit à partir du formulaire
  const productName = document.querySelector('#product-add [name="prodName"]').value;
  const productDescription = document.querySelector('#product-description').value;
  const productPrice = parseFloat(document.querySelector('#product-add [name="product-price"]').value);
  const productImage = document.querySelector('#product-add [type="file"]').files[0];

  // Crée une nouvelle ligne (<tr>) dans le tableau du panier
  const cartItem = document.createElement('tr');

  // Ajoute le contenu de la ligne (nom, description, prix, image, quantité, bouton supprimer)
  cartItem.innerHTML = `
    <td><img src="${URL.createObjectURL(productImage)}" alt="${productName}"></td>
    <td class="product-name">${productName}</td>
    <td class="product-description">${productDescription}</td>
    <td class="price">${productPrice.toFixed(2)} DA</td>
    <td><input type="number" class="quantity" min="1" value="1"></td>
    <td><button class="remove-item">Supprimer</button></td>
  `;
/*
  <td>
  <button class="quantity" data-index="${index}" data-action="decrease">-</button>
  <span>${item.quantity}</span>
  <button class="quantity" data-index="${index}" data-action="increase">+</button>
</td>*/
  // Ajoute la nouvelle ligne au tableau du panier
  cartItemsContainer.appendChild(cartItem);

  // Réinitialise le formulaire pour une nouvelle saisie
  productForm.reset();

  // Met à jour le total du panier
  updateCartTotal();
});

// **Partie 3 : Fonction pour mettre à jour le total du panier**

// Calcule le total de tous les produits dans le panier
function updateCartTotal() {
  let totalPrice = 0;

  // Sélectionne toutes les lignes de produits dans le tableau
  const cartItems = document.querySelectorAll('#panier tbody tr');

  // Parcourt chaque ligne de produit
  cartItems.forEach(item => {
    // Récupère le prix et la quantité du produit
    const priceElement = item.querySelector('.price');
    const quantityElement = item.querySelector('.quantity');
    const price = parseFloat(priceElement.textContent);
    const quantity = parseInt(quantityElement.value);

    // Ajoute le prix total de ce produit au total général
    totalPrice += price * quantity;
  });

  // Affiche le total mis à jour dans l'élément HTML correspondant
  cartTotalElement.textContent = `${totalPrice.toFixed(2)} DA`;
}

// **Partie 4 : Écouteur d'événement pour supprimer un produit du panier**

// Lorsque l'on clique sur un bouton "Supprimer"...
cartItemsContainer.addEventListener('click', (event) => {
  // Si la cible du clic est un bouton "Supprimer"
  if (event.target.classList.contains('remove-item')) {
    // Supprime la ligne entière du produit
    event.target.parentElement.parentElement.remove();

    // Met à jour le total du panier
    updateCartTotal();
  }
});


/*
// Récupérer les éléments du DOM
const addBtns = document.querySelectorAll("#addBtn");
const panier = document.querySelector(".nbr");
const cartItemsContainer = document.querySelector(".cart-items");
let cartItems = [];

// Écouteur d'événement pour les boutons "Ajouter au panier"
addBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Récupérer les informations du produit
        const prod = btn.closest(".prod");
        const prodName = prod.querySelector(".product-name").textContent;
        const prodPrice = parseFloat(prod.querySelector(".product-price").textContent.trim());
        const imgSrc = prod.querySelector(".product-image img").src;

        // Créer un objet produit
        const product = {
            name: prodName,
            price: prodPrice,
            image: imgSrc,
            quantity: 1
        };

        // Vérifier si le produit existe déjà dans le panier
        const existingProduct = cartItems.find(item => item.name === product.name);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cartItems.push(product);
        }

        // Mettre à jour le nombre total d'articles et afficher le panier
        updateCart();
    });
});

// Fonction pour mettre à jour le panier
function updateCart() {
    panier.textContent = `(${cartItems.length})`;

    cartItemsContainer.innerHTML = "";

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = "<tr><td colspan='6'> Votre panier est vide.</td></tr>";
        return;
    }

    cartItems.forEach((item, index) => {
        const itemElement = document.createElement("tr");
        itemElement.innerHTML = `
            <td><img src="${item.image}"></td>
            <td>${item.name}</td>
            <td>${item.price} $</td>
            <td>
                <button class="quantity-btn" data-index="${index}" data-action="decrease">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" data-index="${index}" data-action="increase">+</button>
            </td>
            <td><button class="delete-btn" data-index="${index}">Supprimer</button></td>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    // Écouteur d'événement pour les boutons de quantité et de suppression
    cartItemsContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("quantity-btn")) {
            const index = event.target.dataset.index;
            const action = event.target.dataset.action;
            if (action === "increase") {
                cartItems[index].quantity++;
            } else if (action === "decrease" && cartItems[index].quantity > 1) {
                cartItems[index].quantity--;
            }
            updateCart();
        } else if (event.target.classList.contains("delete-btn")) {
            const index = event.target.dataset.index;
            cartItems.splice(index, 1);
            updateCart();
        }
    });
}

// Initialiser le panier au chargement de la page
updateCart();

*/ 