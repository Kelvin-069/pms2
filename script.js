document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const appointmentBtn = document.getElementById('appointmentBtn');
    const output = document.getElementById('output');
    
    // Toggle sections
    loginBtn.addEventListener('click', () => toggleSection('loginSection'));
    registerBtn.addEventListener('click', () => toggleSection('registerSection'));
    appointmentBtn.addEventListener('click', () => toggleSection('appointmentSection'));
    
    function toggleSection(sectionId) {
        document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden'));
        document.getElementById(sectionId).classList.remove('hidden');
    }
    
    // Login form
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username && password) {
            output.textContent = `Logged in as ${username}. Welcome to the dashboard!`;
            toggleSection('dashboard');
        } else {
            alert('Please fill in all fields.');
        }
    });
    
    // Register form
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        if (name && dob && phone && email) {
            output.textContent = `Patient ${name} registered successfully!`;
            toggleSection('dashboard');
        } else {
            alert('Please fill in all fields.');
        }
    });
    
    // Appointment form
    document.getElementById('appointmentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const patientId = document.getElementById('patientId').value;
        const doctor = document.getElementById('doctor').value;
        const dateTime = document.getElementById('dateTime').value;
        if (patientId && doctor && dateTime) {
            output.textContent = `Appointment booked for Patient ID ${patientId} with ${doctor} on ${dateTime}.`;
            toggleSection('dashboard');
        } else {
            alert('Please fill in all fields.');
        }
    });
});
