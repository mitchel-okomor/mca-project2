function toggleNav(){
    console.log("clicked");
    var el = document.getElementById("toggle-items");
    if(el.classList.contains("remove-menu")){
        el.classList.remove("remove-menu");
    }else{
       el.classList.add("remove-menu");
 
    }
}