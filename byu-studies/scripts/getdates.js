const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").textContent = `Last modification: ${document.lastModified}`;