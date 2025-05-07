import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

function Blogs() {
  let data = [
    {title: "Programming", content: "In our days programming is game changing due to its miracles"},
    {title: "Reactjs", content: "Reactjs is popular javascript library for building user interfaces"},
    {title: "Computer science", content: "If you want a lot of money or changing the world, you should study computer science"},
    {title: "Tailwind", content: "Tailwind is a utility-first CSS framework for creating custom designs"},
    {title: "CSS", content: "CSS is a style sheet language used for describing the presentation of a document written in HTML or XML"},
    {title: "Programmer", content: "Programmer is a person who writes computer programs"},
    {title: "Software engineer", content: "Software engineer is a person who applies the principles of software engineering to the design, development, maintenance, testing, and evaluation of software and systems"}
  ]
  return (
    <>
        <Navbar />
        <h1 className="ml-20 mt-5 font-semibold text-2xl">Blogs</h1>
        <div id="cards" className="flex flex-wrap ml-20 mt-10 gap-4">
        {/* <Card title="Programming" content="In our days programming is game changing due to its miracles"/> */}
        {
          data.map((item, index) => {
            return (
              <Card key={index} title={item.title} content={item.content}/>
            )
          })
        }
        </div>
    </>
  )
}

export default Blogs