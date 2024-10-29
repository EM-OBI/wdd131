// localStorage
const reviewCountDisplay = document.querySelector(".reviews");

let submissions = Number(window.localStorage.getItem("submissions-count")) || 1;

  reviewCountDisplay.textContent = `${submissions}`;

document.addEventListener("DOMContentLoaded", () => {
    submissions++;

    localStorage.setItem("submissions-count", submissions);
});