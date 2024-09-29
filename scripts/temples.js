// Get Date
let currentYear = document.querySelector("#currentYear");
let dateLastModif = document.querySelector("#lastModified");
const currentDate = new Date();
let oLastModif = new Date(document.lastModified);
const getLastModYear = oLastModif.getFullYear();
const getLastModMonth = oLastModif.getMonth() + 1;
const getLastModDate = oLastModif.getDate();
const getLastModHour = oLastModif.getHours();
const getLastModMinute = oLastModif.getMinutes();
const getLastModSecond = oLastModif.getSeconds();

currentYear.innerHTML = `<span>${currentDate.getFullYear()}</span>`;
dateLastModif.innerHTML = `<span>Last Modified: ${getLastModDate}/${getLastModMonth}/${getLastModYear} ${getLastModHour}:${getLastModMinute}:${getLastModSecond}</span>`

// Responsiveness
const navItems = document.querySelector(".navigation");
const hamburger = document.querySelector(".material-symbols-outlined");

hamburger.addEventListener("click", () => {
    navItems.classList.toggle("show");
    hamburger.classList.toggle("show");
});
