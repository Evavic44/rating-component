const rating = document.querySelectorAll(".count");
const message = document.querySelector(".rate-result");
const quote = document.querySelector(".text h1");
const submitBtn = document.getElementById("submit");
const thankYouMenu = document.getElementById("rated");
const ratingsMenu = document.getElementById("initial");

let currentRating = 0;

rating[0].addEventListener("click", function () {
  currentRating = Number(rating[0].textContent);
  console.log(`You rated ${currentRating}`);
});
rating[1].addEventListener("click", function () {
  currentRating = Number(rating[1].textContent);
  console.log(`You rated ${currentRating}`);
});
rating[2].addEventListener("click", function () {
  currentRating = Number(rating[2].textContent);
  console.log(`You rated ${currentRating}`);
});
rating[3].addEventListener("click", function () {
  currentRating = Number(rating[3].textContent);
  console.log(`You rated ${currentRating}`);
});
rating[4].addEventListener("click", function () {
  currentRating = Number(rating[4].textContent);
  console.log(`You rated ${currentRating}`);
});

submitBtn.addEventListener("click", function () {
  switch (currentRating) {
    case 1: // currentRating = 1
      console.log("You just rated 1");
      message.textContent = "You selected 1 out of 5";
      break;
    case 2: // currentRating = 2
      console.log("You just rated 2");
      message.textContent = "You selected 2 out of 5";
      break;
    case 3: // currentRating = 3
      console.log("You just rated 3");
      message.textContent = "You selected 3 out of 5";
      break;
    case 4: // currentRating = 4
      console.log("You just rated 4");
      message.textContent = "You selected 4 out of 5";
      break;
    case 5: // currentRating = 5
      console.log("You just rated 5");
      message.textContent = "You selected 5 out of 5";
      break;
  }
  ratingsMenu.classList.add("display");
  thankYouMenu.classList.remove("display");
});

// rating.forEach(function (e) {
//   let currentRating = e.textContent;
//   e.addEventListener("click", function () {
//     console.log(currentRating);
//   });

//   if (rating[0]) {
//     submitBtn.addEventListener("click", function () {
//       console.log("You rated 1");
//     });
//   }
//   console.log(rating[0]);
// });

// Rating eventListeners
