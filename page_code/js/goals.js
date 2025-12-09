function createArticle(sectionName, data){
    let element = document.querySelector(`.${sectionName}`);
    let heading = document.createElement('h2');
    heading.innerText = data[1].paragraphs[sectionName];
    heading.className = "article_header";
    element.appendChild(heading);
    let img = document.createElement('img');
    img.src = data[1].images[sectionName];
    img.alt = sectionName;
    img.className = "article_icon";
    element.appendChild(img);
    let para = document.createElement('p');
    para.innerText = data[1].articles[sectionName];
    para.className = "article_p";
    element.appendChild(para);
}

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("open");
});

document.addEventListener('DOMContentLoaded', () =>{
    fetch('../json/goals.json')
    .then(response => response.json())
    .then(data => 
    {
        // Menu items
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

        //Main section
        createArticle('climate', data);
        createArticle('education', data);
        createArticle('equality', data);

        // Footer
        let link = document.getElementById('nc');
        link.innerText = data[2].footer.nc.text;
        link.href = data[2].footer.nc.link;
        link.target = "_blank";
        let un = document.getElementById('un');
        un.innerText = data[2].footer.un.text;
        un.href = data[2].footer.un.link;
        un.target = "_blank";
        let em = document.getElementById('em');
        em.innerText = data[2].footer.em.text;
        em.href = data[2].footer.em.link;
        em.target = "_blank";
    });
});