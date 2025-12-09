const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu");



document.addEventListener('DOMContentLoaded', async function() {
    await loadGoalContent();
});

async function loadGoalContent() {
    try {
        let content = null;
        try{
            const contentResponse = await fetch('form-content.json');
            content = await contentResponse.json();
            console.log('navigation content loaded:', content);
    
        }
        catch (contentError){
            console.warn('could not load navigation', contentError)
        }
        if (content && content.nav) {
            let img = document.getElementById('header_icon');
            if (img && content.nav.header_icon){
                img.src = content.nav.header_icon;
                img.alt = 'header icon';
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

        const response = await fetch('data/goal-gender-equality.json');
        const goal = await response.json();

        const article = document.getElementById('goal-content');
        
        const descriptionBox = document.createElement('div');
        descriptionBox.className = 'description-box';
        
        const description = document.createElement('p');
        description.className = 'goal-description';
        description.textContent = goal.description;
        descriptionBox.appendChild(description);

        const descImage = document.createElement('img');
        descImage.src = 'page_code/materials/goals/equality.png';
        descImage.alt = 'Gender Equality';
        descImage.className = 'desc-image';
        descriptionBox.appendChild(descImage);

        article.appendChild(descriptionBox);

        const spaceDiv = document.createElement('div');
        spaceDiv.className = 'space-divider';
        article.appendChild(spaceDiv);



        const factsSection = document.createElement('section');
        factsSection.className = 'key-facts';

        const factsTitle = document.createElement('h2');
        factsTitle.textContent = 'Key Facts';

        const factsList = document.createElement('ul');

        goal.keyFacts.forEach(fact => {
            const li = document.createElement('li');
            li.textContent = fact;
            factsList.appendChild(li);
        });

        factsSection.appendChild(factsTitle);
        factsSection.appendChild(factsList);
        article.appendChild(factsSection);

        if (content && content.footer) {
            let link = document.getElementById('nc');
            if (link && content.footer.nc) {
                link.textContent = content.footer.nc.text;
                link.href = content.footer.nc.link;
                link.target = "_blank";
            }

            let un = document.getElementById('un');
            if (un && content.footer.un) {
                un.textContent = content.footer.un.text;
                un.href = content.footer.un.link;
                un.target = "_blank";
            }

            let em = document.getElementById('em');
            if (em && content.footer.em) {
                em.textContent = content.footer.em.text;
                em.href = content.footer.em.link;
            
            }
    }}

        catch (error) {
            console.error('Error loading page', error);
            const article = document.getElementById('goal-content');
            article.innerHTML = '<p>Error loading page. try again later.</p>';
        }
    
}