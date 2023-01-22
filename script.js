// DOM
const numberOfNotifications = document.querySelector(".card-header__title-number");
const markBtn = document.querySelector(".card-header__mark");
const postContainer = document.querySelector(".posts-container");
const posts = document.querySelectorAll(".post");
const readBtns = document.querySelectorAll(".post__unread-btn");
const circleIcons = document.querySelectorAll(".circle-icon");

// Mark as read button
const markAllAsRead = () => {
  numberOfNotifications.textContent = "0";
  circleIcons.forEach((icon) => (icon.style.display = "none"));
  readBtns.forEach((btn) => (btn.style.display = "block"));
  posts.forEach((post) => post.classList.remove("post--unread"));
};

markBtn.addEventListener("click", markAllAsRead);

// Mark as unread buttons
const makeUnread = (post, circle, message) => {
  document.querySelector(post).classList.add("post--unread");
  document.querySelector(circle).style.display = "block";
  document.querySelector(message).style.display = "none";
  numberOfNotifications.textContent++;
};

const markAsUnread = (e) => {
  if (e.srcElement.className.includes("unread-1")) {
    makeUnread(".post-1", ".circle-icon-1", ".unread-1");
  }
  if (e.srcElement.className.includes("unread-2")) {
    makeUnread(".post-2", ".circle-icon-2", ".unread-2");
  }
  if (e.srcElement.className.includes("unread-3")) {
    makeUnread(".post-3", ".circle-icon-3", ".unread-3");
  }
  if (e.srcElement.className.includes("unread-4")) {
    makeUnread(".post-4", ".circle-icon-4", ".unread-4");
  }
  if (e.srcElement.className.includes("unread-5")) {
    makeUnread(".post-5", ".circle-icon-5", ".unread-5");
  }
  if (e.srcElement.className.includes("unread-6")) {
    makeUnread(".post-6", ".circle-icon-6", ".unread-6");
  }
  if (e.srcElement.className.includes("unread-7")) {
    makeUnread(".post-7", ".circle-icon-7", ".unread-7");
  }
};

// EVENT DELEGATION
postContainer.addEventListener("click", markAsUnread);
