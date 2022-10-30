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

