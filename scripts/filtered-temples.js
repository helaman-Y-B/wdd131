const nav = document.querySelector("nav");

nav.addEventListener("click", function () {
    const listItems = document.querySelectorAll("li");

    listItems.forEach(item => {

        if (item.style.display === "") {
            item.style.display = "block";
        } else if (item.style.display === "block") {
            item.style.display = "";
        }

    });
})

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
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
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
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
];

const div = document.querySelector("#temples-display");

temples.forEach(temple => {

    // Creates elements
    const pic = document.createElement("figure");
    const img = document.createElement("img");
    const cap = document.createElement("figcaption");
    const title = document.createElement("h2");

    // Creates attributes for the elements
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", "TempleImg");
    title.innerText = `${temple.templeName}`
    cap.innerHTML = `The temple is located in ${temple.location}<br>Dedicated in ${temple.dedicated}<br>The are of the temple is ${temple.area} Square Feet`;

    // Append elements
    div.appendChild(pic);
    pic.appendChild(title);
    pic.appendChild(img);
    pic.appendChild(cap);
})

// Filters command:

const filterOptions = document.querySelectorAll("li");

filterOptions.forEach(option => {
  option.addEventListener("click", (event) => {
    event.preventDefault();
    div.innerHTML = "";
    if(option.innerText == "Home") {
      allTemples();
    } else if(option.innerText == "Old") {
      oldTemples();
    } else if(option.innerText == "New") {
      newTemples();
    } else if(option.innerText == "Large") {
      largeTemples();
    } else if(option.innerText == "Small") {
      smallTemples();
    }
  })
});


// Filters:

function oldTemples() {
  
  temples.forEach(temple => {
    const year = temple.dedicated.split(",");
    const yearInt = parseInt(year[0]);
    if(yearInt <= 1900) {
      const mainH = document.querySelector("h1");

      // Creates elements
      const pic = document.createElement("figure");
      const img = document.createElement("img");
      const cap = document.createElement("figcaption");
      const title = document.createElement("h2");

      // Creates attributes for the elements
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", "TempleImg");
      title.innerText = `${temple.templeName}`
      cap.innerHTML = `The temple is located in ${temple.location}<br>Dedicated in ${temple.dedicated}<br>The are of the temple is ${temple.area} Square Feet`;
      mainH.innerText = "Old temples"

      // Append elements
      div.appendChild(pic);
      pic.appendChild(title);
      pic.appendChild(img);
      pic.appendChild(cap);
    }
  });
}

function newTemples() {
  
  temples.forEach(temple => {
    const year = temple.dedicated.split(",");
    const yearInt = parseInt(year[0]);
    if(yearInt >= 2000) {
      const mainH = document.querySelector("h1");

      // Creates elements
      const pic = document.createElement("figure");
      const img = document.createElement("img");
      const cap = document.createElement("figcaption");
      const title = document.createElement("h2");

      // Creates attributes for the elements
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", "TempleImg");
      title.innerText = `${temple.templeName}`
      cap.innerHTML = `The temple is located in ${temple.location}<br>Dedicated in ${temple.dedicated}<br>The are of the temple is ${temple.area} Square Feet`;
      mainH.innerText = "New temples"

      // Append elements
      div.appendChild(pic);
      pic.appendChild(title);
      pic.appendChild(img);
      pic.appendChild(cap);
    }
  });
}

function largeTemples() {
  
  temples.forEach(temple => {
    if(temple.area >= 90000) {
      const mainH = document.querySelector("h1");

      // Creates elements
      const pic = document.createElement("figure");
      const img = document.createElement("img");
      const cap = document.createElement("figcaption");
      const title = document.createElement("h2");

      // Creates attributes for the elements
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", "TempleImg");
      title.innerText = `${temple.templeName}`
      cap.innerHTML = `The temple is located in ${temple.location}<br>Dedicated in ${temple.dedicated}<br>The are of the temple is ${temple.area} Square Feet`;
      mainH.innerText = "Large temples"

      // Append elements
      div.appendChild(pic);
      pic.appendChild(title);
      pic.appendChild(img);
      pic.appendChild(cap);
    }
  });
}

function smallTemples() {
  
  temples.forEach(temple => {
    if(temple.area <= 10000) {
      const mainH = document.querySelector("h1");

      // Creates elements
      const pic = document.createElement("figure");
      const img = document.createElement("img");
      const cap = document.createElement("figcaption");
      const title = document.createElement("h2");

      // Creates attributes for the elements
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", "TempleImg");
      title.innerText = `${temple.templeName}`
      cap.innerHTML = `The temple is located in ${temple.location}<br>Dedicated in ${temple.dedicated}<br>The are of the temple is ${temple.area} Square Feet`;
      mainH.innerText = "Small temples"

      // Append elements
      div.appendChild(pic);
      pic.appendChild(title);
      pic.appendChild(img);
      pic.appendChild(cap);
    }
  });
}

function allTemples() {
  
  temples.forEach(temple => {
    const mainH = document.querySelector("h1");

    // Creates elements
    const pic = document.createElement("figure");
    const img = document.createElement("img");
    const cap = document.createElement("figcaption");
    const title = document.createElement("h2");

    // Creates attributes for the elements
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", "TempleImg");
    title.innerText = `${temple.templeName}`
    cap.innerHTML = `The temple is located in ${temple.location}<br>Dedicated in ${temple.dedicated}<br>The are of the temple is ${temple.area} Square Feet`;
    mainH.innerText = "All temples"

    // Append elements
    div.appendChild(pic);
    pic.appendChild(title);
    pic.appendChild(img);
    pic.appendChild(cap);
  })
}