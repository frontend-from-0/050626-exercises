const container = document.querySelector(".container");
const main = document.querySelector("main");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return response.json();
  })
  .then((posts) => {
    renderInfo(posts);
  })
  .catch((error) => {
    console.error(error);
  });

function getRandomPost(posts) {
  const randomized = Math.floor(Math.random() * posts.length);
  return posts[randomized];
}

function createPostCard(posts) {
  const article = document.createElement("article");
  const heading = document.createElement("h2");
  const body = document.createElement("p");

  article.classList.add("post-card");
  article.append(heading, body);
  container.appendChild(article);

  const randomPost = getRandomPost(posts);
  heading.textContent = randomPost.title.toUpperCase();
  body.textContent = randomPost.body;
}

function removePostCards() {
  const cards = container.querySelectorAll(".post-card");

  if (cards.length === 0) {
    return;
  }

  cards[cards.length - 1].remove();
}

function renderInfo(posts) {
  const buttonGroup = document.createElement("div");
  const addMoreButton = document.createElement("button");
  const removePostButton = document.createElement("button");
  const maxPosts = 9;

  buttonGroup.classList.add("button-group");
  addMoreButton.classList.add("btn");
  addMoreButton.textContent = "Add More";
  removePostButton.classList.add("btn");
  removePostButton.textContent = "Remove Post";
  buttonGroup.append(addMoreButton, removePostButton);
  main.prepend(buttonGroup);

  createPostCard(posts);

  function updateButtonStates() {
    const postCount = container.querySelectorAll(".post-card").length;
    addMoreButton.disabled = postCount >= maxPosts;
    removePostButton.disabled = postCount === 0;
  }

  addMoreButton.addEventListener("click", () => {
    const postCount = container.querySelectorAll(".post-card").length;

    if (postCount < maxPosts) {
      createPostCard(posts);
      updateButtonStates();
    }
  });

  removePostButton.addEventListener("click", () => {
    removePostCards();
    updateButtonStates();
  });

  updateButtonStates();
}
