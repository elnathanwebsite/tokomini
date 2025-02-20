// Constants
const correctStoreName = "MIKET";
const correctPassword = atob("VE9LT01JTkkgQVJJRkFO"); // TOKOMINI ARIFAN
const redirectPage = "penjual.html";

// Update datetime
function updateDateTime() {
    const now = new Date();
    const formatted = now.toISOString().replace('T', ' ').substring(0, 19);
    document.getElementById('datetime').textContent = formatted;
}

setInterval(updateDateTime, 1000);
updateDateTime();

// Show/Hide loading
function toggleLoading(show) {
    const loading = document.getElementById('loading');
    loading.style.display = show ? 'flex' : 'none';
}

// Show error message
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.classList.add('visible');
    
    setTimeout(() => {
        errorMessage.classList.remove('visible');
    }, 3000);
}

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const storeName = document.getElementById('storeName').value.trim();
    const password = document.getElementById('password').value;

    toggleLoading(true);

    setTimeout(() => {
        if (storeName === correctStoreName && password === correctPassword) {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = redirectPage;
        } else {
            toggleLoading(false);
            showError('Nama toko atau sandi salah!');
        }
    }, 1000);
});

// Check if already logged in
if (localStorage.getItem('isLoggedIn') === 'true') {
    window.location.href = redirectPage;
}
const password = process.env.LOGIN_SECRET;
console.log("Password rahasia:", password);
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

if (token !== "rahasia123") {
    console.log("Akses ditolak!");
    throw new Error("Unauthorized access");
}

console.log("Akses diterima!");
