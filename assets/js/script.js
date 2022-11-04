const btns = document.querySelectorAll(".tab-btn");
const sobre = document.querySelector(".sobre");
const articles = document.querySelectorAll(".content");

sobre.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        //remove active de todos os botões
        btns.forEach(function (btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        // esconde todos os articles 
        articles.forEach(function(article){
            article.classList.remove("active")
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});

let count = 1;
document.getElementById("radio1").checked = true;


setInterval (function(){
    nextImage();
}, 3000)

function nextImage() {
    count ++;
    if(count>4){
       count = 1; 
    }

document.getElementById("radio"+count).checked = true;


}