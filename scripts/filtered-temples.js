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






//temples array
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Orem Utah",
        location: "Orem, Utah",
        dedicated: "2024, January, 21",
        area: 71998,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/orem-utah-temple/orem-utah-temple-39549-main.jpg"
    },
    {
        templeName: "McAllen Texas",
        location: "McAllen, Texas",
        dedicated: "2023, October, 8",
        area: 27897,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mcallen-texas-temple/mcallen-texas-temple-39905-main.jpg"
    },
    {
        templeName: "Reno Nevada",
        location: "Reno, Nevada",
        dedicated: "2000, April, 23",
        area: 10700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/reno-nevada-temple/reno-nevada-temple-5681-main.jpg"
    },
  ];


//event listeners
const old = document.querySelector(".old");
const newTemples = document.querySelector(".new");
const large = document.querySelector(".large");
const small = document.querySelector(".small");
const home = document.querySelector(".home");

// createTempleCard(temples);
createTempleCard(temples);

old.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0], 10); 
        return year < 1900;
    });
    createTempleCard(oldTemples);
});

newTemples.addEventListener("click", () => {
    const newTemplesFiltered = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0], 10); 
        return year > 2000;
    });
    createTempleCard(newTemplesFiltered);
});

large.addEventListener("click", () => {
    const largeTemples = temples.filter(temple => {
        const size = temple.area; 
        return size > 90000;
    });
    createTempleCard(largeTemples);
});

small.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => {
        const size = temple.area; 
        return size < 10000;
    });
    createTempleCard(smallTemples);
});

home.addEventListener("click", () => {
    createTempleCard(temples);
});


// createTempleCard(temples);

//create section
function createTempleCard(filteredTemples) {
    document.querySelector(".main-content").textContent = "";
    filteredTemples.forEach(temple => {
        let templeCard = document.createElement("section");
        let templeName = document.createElement("h3");
        let templeLocation = document.createElement("p");
        let templeDedication = document.createElement("p");
        let templeSize = document.createElement("p");
        let templeImage = document.createElement("img");
    
        templeName.textContent = temple.templeName;
        templeLocation.innerHTML = `<span class="location">Location</span>: ${temple.location}`;
        templeDedication.innerHTML = `<span class="dedicated">Dediacted</span>: ${temple.dedicated}`;
        templeSize.innerHTML = `<span class="area">Size</span>: ${temple.area}`;
        templeImage.setAttribute("src", temple.imageUrl);
        templeImage.setAttribute("alt", `${temple.templeName} Temple`);
        templeImage.setAttribute("loading", "lazy");

        templeCard.appendChild(templeName);
        templeCard.appendChild(templeLocation);
        templeCard.appendChild(templeDedication);
        templeCard.appendChild(templeSize);
        templeCard.appendChild(templeImage); 

        document.querySelector(".main-content").appendChild(templeCard);
    });
}

