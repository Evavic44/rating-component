const rating = document.querySelectorAll(".count");
const rateValue = document.getElementById("rate");
const quote = document.querySelector(".text h1");
const message = document.querySelector(".text p");
const submitBtn = document.getElementById("submit");
const backBtn = document.getElementById("back");
const thankYouMenu = document.getElementById("rated");
const ratingsMenu = document.getElementById("initial");

rating.forEach(function (e) {
  let currentRating = e.textContent;
  e.addEventListener("click", function () {
    console.log(`You just rated ${currentRating}`);
    rateValue.textContent = currentRating;
  });
});

submitBtn.addEventListener("click", () => {
  // Prevent users from proceeding without rating
  if (Number(rateValue.textContent) === 0) {
    console.log(
      "Don't try to play smart. Pick a rating from 1 to 5 before you can see the next screen, thank you 😏"
    );
    quote.textContent = "Leave a rating first 🤡";
    message.textContent =
      "If you're seeing this page, it means you've been trying to play smart lately and I commend you for that. However, you need to pick a rating first.";
  } else {
    ratingsMenu.classList.add("display");
    thankYouMenu.classList.remove("display");
  }
});

// Return to initial menu
backBtn.addEventListener("click", () => {
  quote.textContent = "How did we do?";
  ratingsMenu.classList.remove("display");
  thankYouMenu.classList.add("display");
});
