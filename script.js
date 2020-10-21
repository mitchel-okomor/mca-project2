function toggleNav(){
    console.log("clicked");
    var el = document.getElementById("toggle-items");
    var btn = document.getElementById("toggle-button");
    if(el.classList.contains("remove-menu")){
        console.log("contained");
        el.classList.remove("remove-menu");
       btn.innerHTML = "X";
    }else{
       el.classList.add("remove-menu");
 btn.innerHTML = `<svg viewBox="5 0 50 100" width="40" height="40">
       <rect y ="21" width="60" height="6"></rect>
       <rect y="40" width="60" height="6"></rect>
       <rect y="60" width="60" height="6"></rect>
     </svg>`;
    }
}