const newComment = async (event) => {
    const blogid = event.target.id
    const comment = document.querySelector('#blog-comment').value.trim();

    if (comment) {
        event.preventDefault();
        const response = await fetch(`/api/comment`, {
            method: 'POST',
            body: JSON.stringify({ comment: comment, blog_id: blogid }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace(`/blog/${blogid}`);
        } else {
            alert('Something went wrong');
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', newComment);

