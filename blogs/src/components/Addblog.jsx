import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'

function Addblog() {
  const [title, setTitle] = useState()
  const [content, setContent] = useState()

  const Submit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/create", {title, content})
    .then(result => (console.log(result)))
    .catch(err => console.log(err))
  }
  return (
    
<>
<Navbar />
    <h1 className='text-4xl ml-40 mt-5'>CREATE BLOG</h1>
<form class="max-w-sm mx-auto" onSubmit={Submit}>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
    <input type="text" id="title" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Title here" required
    onChange={(e) => setName(e.target.value)} />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
    <textarea type="text" id="password" class="h-60 shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Your blog here" required
    onChange={(e) => setContent(e.target.value)} />
  </div>
  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Post blog</button>
</form>
</>

  )
}

export default Addblog