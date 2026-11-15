const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const postsContainer = document.getElementById('posts');
const statusMessage = document.getElementById('status');

function createPostCard(post) {
  const card = document.createElement('article');
  card.className = 'post-card';

  const title = document.createElement('h2');
  title.className = 'post-title';
  title.textContent = post.title;

  const body = document.createElement('p');
  body.className = 'post-body';
  body.textContent = post.body;

  const author = document.createElement('p');
  author.className = 'post-author';
  author.textContent = `Author ID: ${post.userId}`;

  card.append(title, body, author);
  return card;
}

fetch(POSTS_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return response.json();
  })
  .then((posts) => {
    posts.forEach((post) => {
      postsContainer.appendChild(createPostCard(post));
    });
    statusMessage.textContent = `${posts.length} posts loaded.`;
  })
  .catch((error) => {
    console.error(error);
    statusMessage.textContent =
      'Posts could not be loaded. Please try again later.';
  });
