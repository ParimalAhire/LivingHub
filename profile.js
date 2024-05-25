document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('profile-name').value;
    const email = document.getElementById('profile-email').value;

    // Update user profile information
    localStorage.setItem('userName', name);
    // Assume user email is updated on the server
    alert('Profile updated successfully!');
});

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    window.location.href = 'index.html';
}
