function searchFunction() {
    
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("itemList");
    let li = ul.getElementsByTagName('li');

 
    for (let i = 0; i < li.length; i++) {
        let textValue = li[i].textContent || li[i].innerText;
        
       
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none"; 
        }
    }
}
