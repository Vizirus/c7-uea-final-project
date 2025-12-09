// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");


if (hamburger && navMenu) {
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("open");
});
}





async function loadContent() {
    try {
        const response = await fetch('form-content.json');
        const content = await response.json();

        if (content.nav) {
            let img = document.getElementById('header_icon');
            if (img){
                img.src = content.nav.header_icon;
            }

            let element = document.getElementById('hm');
            if (element) element.textContent = content.nav.ul.hm;

            element = document.getElementById('gl');
            if (element) element.textContent = content.nav.ul.gl;

            element = document.getElementById('jt');
            if (element) element.textContent = content.nav.ul.jt;

            element = document.getElementById('at');
            if (element) element.textContent = content.nav.ul.at;
        }

        //set text

        document.getElementById('page-title').textContent = content.pageTitle;
        document.getElementById('main-title').textContent = content.mainTitle;
        document.getElementById('subtitle').textContent = content.subtitle;
        document.getElementById('form-title').textContent = content.formTitle;

        // set labels

        document.getElementById('firstName-label').textContent = content.formLabels.firstName;
        document.getElementById('lastName-label').textContent = content.formLabels.lastName;
        document.getElementById('email-label').textContent = content.formLabels.email;
        document.getElementById('comments-label').textContent = content.formLabels.comments;
        document.getElementById('submit-button').textContent = content.formLabels.submit;
        document.getElementById('confirmComments').textContent = content.formLabels.requiredNote;

        if (content.footer) {
            let link = document.getElementById('nc')
            if (link) {
                link.textContent = content.footer.nc.text;
                link.href = content.footer.nc.link;
                link.target = "_blank";
            }

            let em = document.getElementById('em');
            if (em) {
                em.textContent = content.footer.em.text;
                em.href = content.footer.em.link;
                em.target ="_blank";
            }
        }
    }
    catch (error) {
        console.error('error loading content:', error);
        
    }
}

document.addEventListener('DOMContentLoaded', loadContent);