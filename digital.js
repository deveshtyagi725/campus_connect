// Placeholder data functions to simulate registration input
function loadUserData() {
    // --- SIMULATION OF DATA RETRIEVAL ---
    const userName = localStorage.getItem('userName') || "Alex R. Sharma";
    const userID = localStorage.getItem('userID') || "S-56789";
    const userEmail = localStorage.getItem('userEmail') || "alex.sharma@campus.edu";
    
    // 1. Update the Header Profile Link
    const profileLink = document.getElementById('user-profile-link');
    if (profileLink) {
        profileLink.innerHTML = `<i class="fas fa-user-circle"></i> ${userName} (${userID})`;
        profileLink.title = `Email: ${userEmail}`;
    }

    // 2. Update the Main Welcome Message
    const welcomeMessage = document.getElementById('welcome-message');
    if (welcomeMessage) {
        const firstName = userName.split(' ')[0];
        welcomeMessage.textContent = `Hello, ${firstName}! Welcome to the Digital Course Hub.`;
    }
}

// --- Standard UI Functions ---

// Toggle sidebar on mobile
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Add active class to clicked sidebar link (for demo)
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function() {
        // Ensure the sidebar closes after clicking a link on mobile
        if (window.innerWidth <= 992) {
            document.getElementById('sidebar').classList.remove('active');
        }
        
        document.querySelectorAll('.sidebar a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});