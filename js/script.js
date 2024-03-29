var list = ["Features", "Pricing", "Testimonial", "FAQs"];

// Get the list container element
var listContainer = document.getElementById("list-container");

// Loop through the list and create list items
list.forEach(function (item) {
  var listItem = document.createElement("li");
  var anchorTag = document.createElement("a");

  // Set the href attribute for the anchor tag (you can replace '#' with your desired URL)
  anchorTag.href = "#" + item;

  // Set the text content of the anchor tag
  anchorTag.textContent = item;

  // Append the anchor tag to the list item
  listItem.appendChild(anchorTag);
  listItem.classList.add("nav-links");
  listContainer.appendChild(listItem);
});

var benefits = [
  "Cutting-Edge Curriculum",
  "Expert Instructors",
  "Career Guidance",
  "Interactive Learning",
  "Practical Applications",
  "Constant Updates",
  "Lifetime Access",
  "Certification Programs",
  "Global Community",
];

var benefitContainer = document.getElementById("benefits-list");

benefits.forEach(function (item) {
  var benefitItem = document.createElement("li");
  benefitItem.textContent = item;
  benefitItem.classList.add("benefit-tag");
  benefitItem.classList.add("col-md-3");
  benefitContainer.appendChild(benefitItem);
});

const cards = [
  {
    image: "/img/leaderboard.png",
    type: "grey",
    title: "Leaderboards",
    text: "Keep your learning schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
  },
  {
    image: "/img/earn.jpg",
    title: "Rewards",
    type: "blue",
    text: "Dive into courses, earn rewards, and elevate your learning experience with us!",
  },
  {
    image: "/img/role.jpg",
    title: "Role selection",
    type: "peach",
    text: "Learn from industry experts and seasoned professionals who bring real-world experience and insights to your virtual classroom.",
  },
  {
    image: "/img/courselist.jpg",
    title: "Course list",
    type: "green",
    text: "Choose from a wide array of skill-builder courses that focus on specific competencies, allowing you to target areas for improvement and growth in your skill set.",
  },
];

const renderCards = () => {
  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.classList.add("row");

  cards.forEach((x, index) => {
    const cardElement = document.createElement("div");

    cardElement.classList.add("col-lg-6");
    cardElement.innerHTML = `
          <div class="mt-4">
            <div class="flex align-items-center p-2" id="feature_img">
              <img class="img-fluid rounded-4 mx-auto my-auto" src="${
                x.image
              }" alt="feature_image"/>
            </div>
            <p class="${getStyleByType(x.type)}">${x.title}</p>
            <p class="mt-2 fw-medium">${x.text}</p>
          </div>
        `;
    cardsContainer.appendChild(cardElement);
  });
};

const getStyleByType = (type) => {
  switch (type) {
    case "grey":
      return "mt-3 w-fit text-white font-semibold px-4 mx-auto py-2 text-center bg-altgrey rounded-pill";
    case "green":
      return "mt-3 w-fit text-white font-semibold px-4 mx-auto py-2 text-center bg-success rounded-pill";
    case "peach":
      return "mt-3 w-fit text-white font-semibold px-4 mx-auto py-2 text-center bg-peach rounded-pill";
    default:
      return "mt-3 w-fit font-semibold px-4 py-2 text-center mx-auto text-white bg-primary rounded-pill";
  }
};

renderCards();

const tooltips = document.querySelectorAll(".tt");
tooltips.forEach((t) => {
  new bootstrap.Tooltip(t);
});

// image optimization effect
const ImgElement = document.getElementById("hero_img");
let count = 0;
let maxCount = 100;
const loaderSim = () => {
  if (count < maxCount) {
    count++;
    const opacity = count / maxCount;

    ImgElement.style.opacity = opacity;
    ImgElement.style.filter = `blue($(10 - 10 * opacity)px)`;
  } else if (count === maxCount) {
    clearInterval(loaderInterval);
  }
};

const loaderInterval = setInterval(loaderSim, 40);

const ImgFeat = document.getElementById("cards-container");
const loaderSimul = () => {
  if (count < maxCount) {
    count++;
    const opacity = count / maxCount;

    ImgFeat.style.opacity = opacity;
    ImgFeat.style.filter = `blue($(10 - 10 * opacity)px)`;
  } else if (count === maxCount) {
    clearInterval(loadInterval);
  }
};

const loadInterval = setInterval(loaderSimul, 30);
