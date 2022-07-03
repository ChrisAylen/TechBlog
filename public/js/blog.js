const newBlog = async (event) => {
    const title = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-body').value.trim();
    console.log(title, content);

    if (title && content) {
        event.preventDefault();
        const response = await fetch('/api/blog', {
            method: 'POST',
            body: JSON.stringify({ title: title, body: content }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Something went wrong');
        }
    }
}

document.querySelector('.blog-form').addEventListener('submit', newBlog);