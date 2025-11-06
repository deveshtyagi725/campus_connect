// --- Core Logic for Role Selection ---
function selectRole(role) {
    const form = document.getElementById('registration-form');
    const studentFields = document.getElementById('student-fields');
    const facultyFields = document.getElementById('faculty-fields');
    const formTitle = document.getElementById('form-title');
    
    // Remove 'selected' class from all cards
    document.querySelectorAll('.role-card').forEach(card => card.classList.remove('selected'));
    
    // Add 'selected' class to the clicked card
    document.querySelector(`.role-card[data-role="${role}"]`).classList.add('selected');

    // Show the form
    form.classList.remove('hidden');

    if (role === 'student') {
        studentFields.classList.remove('hidden');
        facultyFields.classList.add('hidden');
        formTitle.textContent = "Register as a Student";
        setRequired(studentFields, true);
        setRequired(facultyFields, false);
    } else if (role === 'faculty') {
        studentFields.classList.add('hidden');
        facultyFields.classList.remove('hidden');
        formTitle.textContent = "Register as Faculty / Staff";
        setRequired(studentFields, false);
        setRequired(facultyFields, true);
    }
}

// --- Helper function to dynamically set 'required' attribute ---
function setRequired(container, isRequired) {
    container.querySelectorAll('input, select').forEach(field => {
        if (isRequired) {
            field.setAttribute('required', 'required');
        } else {
            field.removeAttribute('required');
        }
    });
}

// --- Handle Form Submission (Saves data for Login Check) ---
function handleRegistration(event) {
    event.preventDefault();
    const selectedRole = document.querySelector('.role-card.selected').getAttribute('data-role');
    const fullName = document.getElementById('full-name').value;
    const userEmail = document.getElementById('email').value;
    const password = document.getElementById('password').value; 
    
    // Determine the correct ID field based on the selected role
    const userID = document.getElementById(selectedRole === 'student' ? 'student-id' : 'employee-id').value.trim();

    // *** IMPORTANT: Save credentials to localStorage for login check ***
    localStorage.setItem('registeredUserID', userID);
    localStorage.setItem('registeredPassword', password);
    localStorage.setItem('userName', fullName);
    localStorage.setItem('userEmail', userEmail);
    
    alert(`Registration successful for ${fullName}! Please proceed to login with your ID: ${userID}.`);
    
    // Redirect to login after successful registration to complete the loop
    window.location.href = 'login.html'; 
}

// --- Mobile Menu Toggle (Needs to be defined here or linked via shared script.js) ---
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    const menuToggle = document.querySelector('.menu-toggle i');
    
    if (navLinks.classList.contains('active')) {
        menuToggle.classList.remove('fa-bars');
        menuToggle.classList.add('fa-times');
    } else {
        menuToggle.classList.remove('fa-times');
        menuToggle.classList.add('fa-bars');
    }
}