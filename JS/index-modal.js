var btn = document.getElementById("modal-button");
var modal = document.getElementById("modal-book");
var span = document.getElementsByClassName("close");

btn.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}