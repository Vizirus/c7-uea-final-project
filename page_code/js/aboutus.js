document.addEventListener('DOMContentLoaded', () =>{
    fetch('../json/aboutus.json')
    .then(response => response.json())
    .then(data => 
    {
        //dynamically loading articles
        for (i = 0; i < 3; i++) {
            console.log(data[i]);
            if (i = 0) {
                let article = document.querySelector(".lb_article");

            }
        }
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