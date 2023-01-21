// DOM
const numberOfNotifications = document.querySelector(".card-header__title-number");
const markBtn = document.querySelector(".card-header__mark");
const posts = document.querySelector(".posts-container");
const readBtn = document.querySelectorAll(".post__unread-btn");

// Mark as read button
markBtn.addEventListener("click", () => {
  numberOfNotifications.textContent = "0";
});

readBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);
    if (e.srcElement.className.includes("unread-1")) {
      document.querySelector(".post-first").classList.toggle("post--unread");
    }
  });
});
