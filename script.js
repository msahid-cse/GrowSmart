function showDashboard(role) {
    let userDashboard = document.getElementById("user-dashboard");
    let adminDashboard = document.getElementById("admin-dashboard");

    if (role === 'user') {
        userDashboard.style.display = "block";
        adminDashboard.style.display = "none";
    } else if (role === 'admin') {
        adminDashboard.style.display = "block";
        userDashboard.style.display = "none";
    }
}
