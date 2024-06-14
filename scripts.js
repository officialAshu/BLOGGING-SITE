document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');
    const blogPosts = document.getElementById('blog-posts');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = postTitle.value.trim();
        const content = postContent.value.trim();

        if (title && content) {
            addPost(title, content);
            postTitle.value = '';
            postContent.value = '';
        }
    });

    function addPost(title, content) {
        const post = document.createElement('div');
        post.classList.add('post');

        const postTitle = document.createElement('h3');
        postTitle.textContent = title;

        const postContent = document.createElement('p');
        postContent.textContent = content;

        post.appendChild(postTitle);
        post.appendChild(postContent);

        blogPosts.appendChild(post);
    }
});
