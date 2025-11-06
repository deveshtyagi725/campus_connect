// Placeholder function for login submission with Role-Based Redirection and Verification
function handleLogin(event) {
    event.preventDefault();
    const userID = document.getElementById('user-id').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (userID === '' || password === '') {
        alert('Please enter both your ID and password.');
        return;
    }

    // --- 1. SIMULATED REGISTRATION CHECK ---
    const registeredID = localStorage.getItem('registeredUserID');
    const registeredPassword = localStorage.getItem('registeredPassword');
    
    if (userID === registeredID) {
        
        // --- 2. PASSWORD CHECK ---
        if (password === registeredPassword) {
            
            // --- SUCCESSFUL LOGIN ---
            
            const userIDUpper = userID.toUpperCase();
            const isStudent = userIDUpper.startsWith('S-');
            
            // Determine Dashboard based on prefix
            // Student goes to student-dashboard.html
            // Faculty goes to faculty-dashboard.html
            const dashboardPage = isStudent ? 'digital.html' : 'faculty-dashboard.html';
            
            // Store User ID for Dashboard Personalization
            localStorage.setItem('userID', userID);
            
            // Alert using the actual USER ID
            alert(`Login successful! Redirecting user ID: ${userID} to the dashboard.`);

            // 3. Redirect to the appropriate dashboard
            window.location.href = dashboardPage; 
            
        } else {
            // Password mismatch
            alert('Login failed. Incorrect password.');
        }

    } else {
        // --- REGISTRATION REQUIRED POPUP ---
        alert('Account not found. Please register first, you do not have an account.');
    }
}

// Functionality to toggle the mobile menu (This should ideally be in a shared 'script.js' file)
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