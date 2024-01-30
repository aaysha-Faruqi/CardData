const form = document.getElementById('userInfoForm');
const userDataContainer = document.getElementById('userData');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const village = document.getElementById('village').value;
    const city = document.getElementById('city').value;

    // Create user object
    const user = {
        name,
        phone,
        village,
        city
    };

    // Store user data in local storage
    localStorage.setItem('userData', JSON.stringify(user));

    // Display user data
    displayUserData(user);
});

// Function to display user data
function displayUserData(user) {
    userDataContainer.innerHTML = `
        <h2>User Information</h2>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Phone Number:</strong> ${user.phone}</p>
        <p><strong>Village:</strong> ${user.village}</p>
        <p><strong>City:</strong> ${user.city}</p>
    `;
}

// Check for saved user data on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedUserData = JSON.parse(localStorage.getItem('userData'));
    if (savedUserData) {
        displayUserData(savedUserData);
    }
});

// Theme selector
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const container = document.querySelector('.container');

    themeToggle.addEventListener('change', function() {
        container.classList.toggle('dark-theme');
    });
});
