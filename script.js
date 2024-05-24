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
