const createBlogPost = (id, title, body, author, createdDate) => {
    const bolgPostContainer= document.createElement('div');
    bolgPostContainer.classList.add('blog-post');
    bolgPostContainer.dataset.postid = id;

    const bolgPostTitle=document.createElement('h2');
    bolgPostTitle.classList.add('blog-post-title');
    bolgPostTitle.textContent = title;
    
    bolgPostContainer.appendChild(bolgPostTitle);

    const bolgPostMeta =document.createElement('p');
    bolgPostMeta.classList.add('blog-post-mata');
    bolgPostMeta.textContent = createdDate + ' by '+ author;

    const blogPostEditButton = document.createElement('a');
    blogPostEditButton.classList.add('btn');
    blogPostEditButton.classList.add('btn-link');
    blogPostEditButton.classList.add('ml-3');
    blogPostEditButton.href = '/' + id +'/edit';
    blogPostEditButton.textContent = 'Edit';

    const blogPostDeletButton = document.createElement('button');
    blogPostDeletButton.classList.add('btn');
    blogPostDeletButton.classList.add('btn-link');
    blogPostDeletButton.classList.add('ml-3');
    blogPostDeletButton.onclick = null;
    blogPostDeletButton.style.color = 'red';
    blogPostDeletButton.textContent = 'Delete';

    bolgPostMeta.appendChild(blogPostEditButton);
    bolgPostMeta.appendChild(blogPostDeletButton);

    bolgPostContainer.appendChild(bolgPostMeta);

    const blogPostContent = document.createElement('p');
    blogPostContent.textContent = body;
    
     bolgPostContainer.appendChild(blogPostContent);

     const blogMainContainer = document.querySelector('.blog-main');
     blogMainContainer.appendChild(bolgPostContainer);

 };
document.addEventListener('DOMContentLoaded', async () => {
    try {
    const response = await fetch('http://localhost:3000/posts');
    const data = await response.json();
    const posts =await data.posts;
    posts.map(post =>{
        createBlogPost(
            post.id,
            post.title,
            post.body,
            post.author,
            post.createdDate
        );
    })
} catch(error){
    console.log(error)
}
    
})
