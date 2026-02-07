function searchFunction() {
    // 1. Déclaration des variables
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("itemList");
    let li = ul.getElementsByTagName('li');

    // 2. Boucle sur tous les éléments de la liste
    for (let i = 0; i < li.length; i++) {
        let textValue = li[i].textContent || li[i].innerText;
        
        // 3. Comparaison : si le texte contient la recherche, on l'affiche
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none"; // Sinon, on le cache
        }
    }
}
