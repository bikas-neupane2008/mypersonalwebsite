document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

function toggleUnits(button) {
    const units = button.nextElementSibling;
    if (units.style.display === "none") {
        units.style.display = "block";
        button.textContent = "See less";
    } else {
        units.style.display = "none";
        button.textContent = "See more";
    }
}

function toggleProject(button) {
    const projectDetails = button.nextElementSibling;
    if (projectDetails.style.display === "none") {
        projectDetails.style.display = "block";
        button.textContent = "See less";
    } else {
        projectDetails.style.display = "none";
        button.textContent = "See more";
    }
}
