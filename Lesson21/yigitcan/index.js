const container = document.querySelector(".container");
const main = document.querySelector("main");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    renderInfo(data);
  });

function getRandomPost(posts) {
  const randomized = Math.floor(Math.random() * posts.length);
  return posts[randomized];
}

function createPostCard(posts) {
  const article = document.createElement("article");
  const heading = document.createElement("h2");
  const body = document.createElement("p");
  const button = document.createElement("button");

  container.appendChild(article);
  article.append(heading, body, button);
  article.classList.add("post-card");
  button.classList.add("btn");

  const randomPost = getRandomPost(posts);
  heading.textContent = randomPost.title.toUpperCase();
  body.textContent = randomPost.body;
  button.textContent = "Reveal More";

  button.addEventListener("click", () => {
    const randomPost2 = getRandomPost(posts);
    heading.textContent = randomPost2.title.toUpperCase();
    body.textContent = randomPost2.body;
    button.textContent = "Reveal More";
  });
}

function removePostCards(posts) {
  const cards = container.querySelectorAll(".post-card");
  cards[cards.length - 1].remove();
}

function renderInfo(posts) {
  const btnGrp = document.createElement("div");
  const addMore = document.createElement("button");
  main.prepend(btnGrp);
  btnGrp.classList.add("button-group");
  btnGrp.appendChild(addMore);
  addMore.classList.add("btn");
  addMore.textContent = "Add More";
  addMore.classList.add("hidden");

  const removePost = document.createElement("button");
  btnGrp.appendChild(removePost);
  removePost.classList.add("btn", "hidden");
  removePost.textContent = "Remove Post";

  const button2 = document.createElement("button");
  container.appendChild(button2);
  button2.textContent = "REVEAL";
  button2.classList.add("btn", "btn-big");

  button2.addEventListener("click", () => {
    createPostCard(posts);
    button2.classList.add("hidden");
    addMore.classList.remove("hidden");
    removePost.classList.remove("hidden");
  });

  addMore.addEventListener("click", () => {
    const limit = container.querySelectorAll(".post-card").length;
    if (limit < 9) {
      createPostCard(posts);
    } else {
      alert("Maximum 9 Post is Allowed");
    }
  });

  removePost.addEventListener("click", () => {
    removePostCards();
  });
}
