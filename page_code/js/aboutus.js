document.addEventListener('DOMContentLoaded', () =>{
    fetch('../json/aboutus.json')
    .then(response => response.json())
    .then(data => 
    {
        // Menu Items
        const hamburger = document.getElementById("hamburger");
        const navMenu = document.getElementById("nav-menu");

        hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("open");2
        });
        let img = document.getElementById('header_icon');
        img.src = data[0].nav.header_icon;
        let element = document.getElementById('hm');
        element.innerText = data[0].nav.ul.hm;
        element = document.getElementById('gl');
        element.innerText = data[0].nav.ul.gl;
        element = document.getElementById('jt');
        element.innerText = data[0].nav.ul.jt;
        element = document.getElementById('at');
        element.innerText = data[0].nav.ul.at;

        //dynamically loading articles
        const main = document.querySelector("main");

        for (i = 1; i <= 4; i++) {
            console.log("hi :3");
            //Creating element variables
                const article = document.createElement("article");
                let figure = document.createElement("figure");
                const h3 = document.createElement("h3");
                const img = document.createElement("img");
                let para = document.createElement("p");

            //Assigning data to variables
                h3.textContent = data[i].header;
                img.src = data[i].image;
                para.textContent = data[i].paragraph;

            //Appending everything to main
                figure.appendChild(h3);
                figure.appendChild(img);
                figure.appendChild(para);
                article.appendChild(figure);
                main.appendChild(article);

            //adding classes
                if (i == 1) {
                    article.setAttribute("class", "lb_article");
                }
                else if (i == 2) {
                    article.setAttribute("class", "y_article");
                }
                else if (i == 3) {
                    article.setAttribute("class", "b_article");
                    para.setAttribute("class", "b_article_p");
                }
                else if (i == 4) {
                    article.setAttribute("class", "ln_article"); 
                }

        }

        // Footer
        let link = document.getElementById('nc');
        link.innerText = data[5].footer.nc.text;
        link.href = data[5].footer.nc.link;
        link.target = "_blank";
        let un = document.getElementById('un');
        un.innerText = data[5].footer.un.text;
        un.href = data[5].footer.un.link;
        un.target = "_blank";
        let em = document.getElementById('em');
        em.innerText = data[5].footer.em.text;
        em.href = data[5].footer.em.link;
        em.target = "_blank";
    });
});