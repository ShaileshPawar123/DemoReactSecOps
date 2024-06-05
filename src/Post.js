import React, { useState } from 'react'

function Post() {
//useState hook
const [post,setPost] = useState({});

    const loadPOst = ()=> {
        fetch('https://jsonplaceholder.typicode.com/posts/3')
                .then(response => response.json())
                .then(res => {
                    const data = res;
                    setPost(data)
        });
    }

    return (
    <div>
        Post Me Hello Me aalo {post?
        <div>
            <p>ID : {post.id}</p>
        </div>:null}
        <button onClick={loadPOst}>Get Post</button>
    </div>
  )
}

export default Post
