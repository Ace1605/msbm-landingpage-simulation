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
    text: "Keep your learning schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
  },
  {
    image: "/img/role.jpg",
    title: "Role selection",
    type: "peach",
    text: "Keep your learning schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
  },
  {
    image: "/img/courselist.jpg",
    title: "Course list",
    type: "green",
    text: "Keep your learning schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
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
            <div class="flex align-items-center p-2">
              <img class="img-fluid rounded-4 mx-auto my-auto" src="${
                x.image
              }" alt="card_image"/>
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
      return "mt-3 w-fit text-white font-semibold px-4 mx-auto py-2 text-center inline-block bg-altgrey rounded-pill";
    case "green":
      return "mt-3 w-fit text-white font-semibold px-4 mx-auto py-2 text-center inline-block bg-success rounded-pill";
    case "peach":
      return "mt-3 w-fit text-white font-semibold px-4 mx-auto py-2 text-center inline-block bg-peach rounded-pill";
    default:
      return "mt-3 w-fit font-semibold px-4 py-2 text-center mx-auto text-white inline-block bg-primary rounded-pill";
  }
};

renderCards();

const tooltips = document.querySelectorAll(".tt");
tooltips.forEach((t) => {
  new bootstrap.tooltip(t);
});
