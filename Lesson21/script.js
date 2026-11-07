const postsContainer = document.querySelector("#posts");
const statusEl = document.querySelector("#status");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Could not load posts (status ${response.status}).`);
    }
    return response.json();
  })
  .then((posts) => {
    if (!Array.isArray(posts)) {
      throw new Error("The posts response was not a list.");
    }

    const fragment = document.createDocumentFragment();

    posts.forEach((post) => {
      const article = document.createElement("article");
      article.className = "post";

      const title = document.createElement("h2");
      title.textContent = post.title;

      const meta = document.createElement("p");
      meta.className = "post-meta";
      meta.textContent = `Post ${post.id} · User ${post.userId}`;

      const body = document.createElement("p");
      body.className = "post-body";
      body.textContent = post.body;

      article.append(title, meta, body);
      fragment.append(article);
    });

    postsContainer.append(fragment);
    statusEl.textContent = `Showing ${posts.length} posts.`;
  })
  .catch((error) => {
    statusEl.textContent =
      error.message || "Something went wrong while loading posts.";
    statusEl.classList.add("error");
  });
