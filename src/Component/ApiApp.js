import React,{useEffect, useState} from 'react'
import axios from 'axios'

const ApiApp = () => {
    const [post, setPost]  = useState([])
    const url = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(()  => {
        axios.get(url).then((response) => {
            setPost(response.data);
          });
    },[])
    console.log("data", post)
  return (
    <div>
        <ul>
        {
            post[0] && post.map(item=>< li>
            {item.title}
            </li>)
        }
        </ul>
    </div>
  )
}

export default ApiApp