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

const blogAmend = async (event) => {
    event.preventDefault();
    console.log("hhh")
    const blogid = event.target.id
    const blogBody  = document.querySelector('#blog-body').value.trim();
    const blogTitle = document.querySelector('#blog-title').innerHTML.trim();
    console.log(blogTitle)
    console.log(blogBody)
    if (blogid){
        const response = await fetch(`/api/blog/${blogid}`, {
            method: 'PUT',
            body: JSON.stringify({ title: blogTitle, body: blogBody }),
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

const blogDelete = async (event) => {
    event.preventDefault();
    const blogid = event.target.id
    console.log(blogid)
    if (blogid){
        const response = await fetch(`/api/blog/${blogid}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace(`/dashboard`);
        } else {
            alert('Something went wrong');
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', newComment);
document.querySelector('.update-button').addEventListener('click', blogAmend);
document.querySelector('.delete-button').addEventListener('click', blogDelete);
