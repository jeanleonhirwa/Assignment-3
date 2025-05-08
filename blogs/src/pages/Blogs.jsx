import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { useEffect } from 'react'
import axios from 'axios'

function Blogs() {
    // const [blogs, setBlogs] = useState([])
    const [blogs, setBlogs] = React.useState([])

  useEffect(() => {
    axios.get('http://localhost:3001')
    .then(result => setBlogs(result.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
        <Navbar />
        <h1 className="ml-20 mt-5 font-semibold text-2xl">Blogs</h1>
        <div id="cards" className="flex flex-wrap ml-20 mt-10 gap-4">
        
        {
          blogs.map((blog, index) => {
            return (
              <Card key={index} title={blog.title} content={blog.content} id={blog._id} />
            )
          })
        }
        </div>
    </>
  )
}

export default Blogs