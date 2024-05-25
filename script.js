function toggleContactForm() {
    const formContainer = document.getElementById('contact-form-container');
    formContainer.classList.toggle('open');
    
    const contactSection = document.getElementById('contact');
    if (formContainer.classList.contains('open')) {
        contactSection.style.height = 'auto';
    } else {
        contactSection.style.height = '12rem';
    }
}

// Function to filter hostels based on search input
function filterHostels() {
    // Get input element and filter value
    var input = document.getElementById('search-bar');
    var filter = input.value.toUpperCase();
    
    // Get hostel listing cards
    var hostels = document.querySelectorAll('.facility');
    
    // Loop through all hostels
    for (var i = 0; i < hostels.length; i++) {
        var h3 = hostels[i].querySelector('h3');
        var txtValue = h3.textContent || h3.innerText;
        
        // If hostel name matches search input, display; otherwise, hide
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            hostels[i].style.display = "";
        } else {
            hostels[i].style.display = "none";
        }
    }
}

// Event listener for keyup event on search input
document.getElementById('search-bar').addEventListener('keyup', filterHostels);

// index page
document.addEventListener('DOMContentLoaded', function() {
    updateNavBar();

    function updateNavBar() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const userName = localStorage.getItem('userName');

        const navLinks = document.getElementById('nav-links');
        const authLink = document.getElementById('auth-link');

        if (isLoggedIn && userName) {
            // Remove the "Sign Up / Login" link if present
            if (authLink) {
                authLink.remove();
            }

            // Add the profile link
            const profileLink = document.createElement('li');
            profileLink.innerHTML = `<a href="profile.html">${userName}'s Profile</a>`;
            navLinks.appendChild(profileLink);
        } else {
            // If not logged in, ensure the "Sign Up / Login" link is present
            if (!authLink) {
                const newAuthLink = document.createElement('li');
                newAuthLink.id = 'auth-link';
                newAuthLink.innerHTML = '<a href="auth.html" id="auth-button">Sign Up / Login</a>';
                navLinks.appendChild(newAuthLink);
            }
        }
    }
});
