

document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('signupForm');
    const message = document.getElementById('message');
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("open");
    });
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            comments: document.getElementById('comments').value,
        };

        if (!formData.firstName || !formData.lastName || !formData.email) {
            showMessage('Please fill in all required fields', 'error');
            return;
        }

    

    try {
        const response = await fetch('http://localhost:3000/submit-form', {
            method: "POST",
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
            showMessage('Thanks for joining our team!! A confirmation email has been sent.', 'success');
            form.reset();
        }
        else {
            showMessage('Error: ' + (result.error || 'submission failed'), 'error');
        }
    }
    catch(error) {
    showMessage("Error, please try again", 'error');
    
}

});

function showMessage(text, type) {
    message.textContent = text;
    message.style.color = type === 'success' ? 'green' : 'red';
} 

});
