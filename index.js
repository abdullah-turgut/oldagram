const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.jpg',
    post: 'images/post-vangogh.jpg',
    comment: 'just took a few mushrooms lol',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.jpg',
    post: 'images/post-courbet.jpg',
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.jpg',
    post: 'images/post-ducreux.jpg',
    comment:
      'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
];

const main = document.querySelector('main');

function renderPost(arr) {
  let html = '';
  arr.forEach((el, index) => {
    html = `
    <section class="post-content" id="post-${index}">
        <div class="user-info">
        <img src="${el.avatar}" alt="" class="user-image" />
        <div class="user-alt-info">
            <div class="user-name">${el.name}</div>
            <div class="user-location">${el.location}</div>
        </div>
        </div>
        <img src="${el.post}" alt="" class="post-image" />
        <div class="post-body">
        <div class="post-icons">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-regular fa-paper-plane"></i>
        </div>
        <p class="post-likes">${el.likes} likes</p>
        <p class="caption">
            <span class="commentor">${el.username}</span> ${el.comment}
        </p>
        </div>
    </section>`;

    main.insertAdjacentHTML('beforeend', html);
  });
}

renderPost(posts);

const likeIcon = document.querySelectorAll('.fa-heart');
const postImage = document.querySelectorAll('.post-image');
const likeCount = document.querySelectorAll('.post-likes');

function likePost(el, i) {
  el.classList.toggle('fa-solid');
  el.classList.contains('fa-solid')
    ? (likeCount[i].textContent = `${posts[i].likes + 1} likes`)
    : (likeCount[i].textContent = `${posts[i].likes} likes`);
}

likeIcon.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    likePost(icon, index);
  });
});

postImage.forEach((img, index) => {
  img.addEventListener('dblclick', () => {
    likePost(likeIcon[index], index);
  });
});
