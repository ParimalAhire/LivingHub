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
    var input = document.getElementById('search-bar');
    var filter = input.value.toUpperCase();
    var hostels = document.querySelectorAll('.facility');

    for (var i = 0; i < hostels.length; i++) {
        var h3 = hostels[i].querySelector('h3');
        var txtValue = h3.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            hostels[i].style.display = "";
        } else {
            hostels[i].style.display = "none";
        }
    }
}

// Event listener for keyup event on search input
document.getElementById('search-bar').addEventListener('keyup', filterHostels);

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
    var input = document.getElementById('search-bar');
    var filter = input.value.toUpperCase();
    var hostels = document.querySelectorAll('.facility');

    for (var i = 0; i < hostels.length; i++) {
        var h3 = hostels[i].querySelector('h3');
        var txtValue = h3.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            hostels[i].style.display = "";
        } else {
            hostels[i].style.display = "none";
        }
    }
}

// Event listener for keyup event on search input
document.getElementById('search-bar').addEventListener('keyup', filterHostels);

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function navigateToMessDetails(messName) {
    window.location.href = `messdetails.html?mess=${messName}`;
}


function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function navigateToMessDetails(messName) {
    window.location.href = `messdetails.html?mess=${messName}`;
}

document.addEventListener('DOMContentLoaded', function() {
    updateNavBar();

    function updateNavBar() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const userName = localStorage.getItem('userName');

        const navLinks = document.getElementById('nav-links');
        
        // Clear only authentication-related links
        const authLink = document.getElementById('auth-link');
        const profileLink = document.getElementById('profile-link');
        const logoutLink = document.getElementById('logout-link');
        if (authLink) authLink.remove();
        if (profileLink) profileLink.remove();
        if (logoutLink) logoutLink.remove();

        if (isLoggedIn && userName) {
            // Add Profile Link
            const profileLi = document.createElement('li');
            profileLi.id = 'profile-link';
            profileLi.innerHTML = `<a href="profile.html">Profile</a>`;
            navLinks.appendChild(profileLi);

            // Add Logout Link
            const logoutLi = document.createElement('li');
            logoutLi.id = 'logout-link';
            logoutLi.innerHTML = `<a href="#" id="logout-button">Logout</a>`;
            navLinks.appendChild(logoutLi);

            // Add Event Listener to Logout Button
            document.getElementById('logout-button').addEventListener('click', function(event) {
                event.preventDefault();
                logout();
            });
        } else {
            // Add Auth Link (Sign Up / Login)
            const authLi = document.createElement('li');
            authLi.id = 'auth-link';
            authLi.innerHTML = '<a href="auth.html" id="auth-button">Sign Up / Login</a>';
            navLinks.appendChild(authLi);
        }
    }

    function logout() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userName');
        updateNavBar();
        window.location.href = 'index.html';
    }

    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const user = predefinedUsers.find(user => user.email === email && user.password === password);

        if (user) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', user.name);
            updateNavBar(); // Update the navigation bar
            window.location.href = 'index.html';
        } else {
            alert('Invalid login credentials');
        }
    });

    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        // Simulate user registration by adding to predefined users
        predefinedUsers.push({ name, email, password });

        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', name);
        updateNavBar(); // Update the navigation bar
        window.location.href = 'index.html';
    });
});