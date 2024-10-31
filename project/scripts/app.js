//standard footer
function generateStandardFooter(){
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
}

generateStandardFooter();

const navItems = document.querySelector(".nav-items");
const hamburger = document.querySelector("#hamburger");
const welcomeMessage = document.querySelector(".welcome-message");
const nameForm = document.querySelector(".name-form");
const examDateInput = document.querySelector("#exam-date");
const submitButton = document.querySelector("#submit");
const main = document.querySelector("main");
const logo = document.querySelector("#logo");
const logoImg = document.createElement("img");

let visits = Number(window.localStorage.getItem("visits-count")) || 0;

const storedName = window.localStorage.getItem("personName") || "";
const storedExamDate = window.localStorage.getItem("examDate") || "";

//ensure date isn't in the past
examDateInput.min = new Date().toISOString().split('T')[0];

const calculateDaysLeft = (examDate) => {
    const today = new Date();
    const examDateObj = new Date(examDate);
    const timeDifference = examDateObj - today;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysLeft;
};


const updateWelcomeMessage = () => {
    const personName = window.localStorage.getItem("personName") || document.querySelector("#username").value;
    const storedExamDate = window.localStorage.getItem("examDate");

    let message = `Welcome ${personName.toUpperCase()}!`;

    if (storedExamDate) {
        const daysLeft = calculateDaysLeft(storedExamDate);
        message += ` You have ${daysLeft} day(s) left until your exam.`;
    }

    welcomeMessage.textContent = message;
    nameForm.classList.add("disappear");
};

document.addEventListener("DOMContentLoaded", () => {
    if (visits === 0) {
        nameForm.classList.remove("disappear");
    } else {
        updateWelcomeMessage();
    }
    visits++;
    localStorage.setItem("visits-count", visits);
});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    
    const personName = document.querySelector("#username").value;
    const examDate = examDateInput.value;

    if (personName && examDate) {
        localStorage.setItem("personName", personName);
        localStorage.setItem("examDate", examDate);

        updateWelcomeMessage();  
    } else {
        welcomeMessage.textContent = "Please enter a valid name and date.";
    }
});



// Toggle navigation menu
hamburger.addEventListener("click", () => {
    navItems.classList.toggle("show");
    hamburger.classList.toggle("show");
});



// capture and display title
function generatePagetitle() {
    const pageTitle = document.title;

    document.querySelector(".page-title").textContent = pageTitle.toUpperCase();
}

generatePagetitle();


// accordion
const faqs = [
    {
        question: "Is there a recommended study plan?",
        response: "Yes. Dentistry OTG recommends commencement of fulltime study 3 months before your expected exam date. More details on this is found <a href='nav-footer/study-plan.html'>here↗</a>",
    },
    {
        question: "Is there a native mobile version of dentistry OTG",
        response: "Not yet. But best believe we are actively working on this.",
    },
    {
        question: "I failed my last exam, at what point is it time to give up?",
        response: "There is no time to give up. All you need to do is recognize where you went wrong in your previous attempts and work at improving those areas. Consistency during preparation is also paramount.",
    }
]

function createFaqSection(faqs) {
    if (document.title.toLowerCase() === "home page") {
        let faqHeading = document.createElement("h3");
        faqHeading.setAttribute("id", "faq-heading");
        faqHeading.textContent = `Frequently Asked Questions (FAQs)`;
        let faqSection = document.createElement("div");
        faqSection.appendChild(faqHeading);
        faqSection.setAttribute("id", "faq-section")
        faqs.forEach(faq => {
            let faqButton = document.createElement("button");
            // let faqHeading = document.createElement("h3");
            let individualFaq = document.createElement("div");
            let faqParagraph = document.createElement("p");

            faqButton.setAttribute("class", "accordion");
            individualFaq.setAttribute("class", "panel");
            individualFaq.appendChild(faqParagraph);

            faqButton.textContent = faq.question;
            faqParagraph.innerHTML = faq.response;
            faqParagraph.style.display = "none";

            faqSection.appendChild(faqButton);
            faqSection.appendChild(individualFaq);

            faqButton.addEventListener("click", () => {
                const isVisible = faqParagraph.style.display === "block";
                faqParagraph.style.display = isVisible ? "none" : "block"; 
            });
        })
        main.appendChild(faqSection);
    }
    
}

createFaqSection(faqs);


