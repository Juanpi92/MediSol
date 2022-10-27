const $login=document.querySelector(".login");
const $modal=document.querySelector(".modal");

document.addEventListener("click",()=>{
if(event.target.matches(".login")){
$modal.classList.add("show_modal");
} 
if(event.target.matches(".btn-close")){
    $modal.classList.remove("show_modal");
    } 
})