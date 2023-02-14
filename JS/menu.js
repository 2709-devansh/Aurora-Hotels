nav = document.getElementById("mnav");
open_btn = document.getElementById("obtn");
close_btn = document.getElementById("cbtn");

function openNav() {
  if(window.innerHeight>"300px"){
    nav.style.height = "calc(100vh - 7rem)";
  }else{
    nav.style.height = "calc(100vh - 5rem)"
  }
  open_btn.style.display = "none";
  close_btn.style.display = "block";
}

function closeNav() {
  nav.style.height = "0vh";
  open_btn.style.display = "block";
  close_btn.style.display = "none";
}
