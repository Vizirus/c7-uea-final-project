document.addEventListener('DOMContentLoaded', () => {
    fetch('json/index.json')
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

        // Hero section
        let title = document.getElementById('welcome_title');
        title.innerText = data[1].hero.title;
        let text = document.getElementById('welcome_text');
        text.innerText = data[1].hero.text;

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
    })
    .catch(error => {
        console.error('Error loading page content:', error);
    });
});
