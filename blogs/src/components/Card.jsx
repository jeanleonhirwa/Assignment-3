import React from "react";
import axios from "axios";

const handleDelete = (id) => {
  axios.delete('http://localhost:3001/deleteBlog'+id)
  .then(res => {console.log(res)
    window.location.reload()
  })
  .catch(err => console.log(err))

}

function Card({title, content, id}) {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="p-4">
        <h5 className="mb-2 text-slate-800 text-xl font-semibold">
          {title}
        </h5>
        <p className="text-slate-600 leading-normal font-light">
          {content}
        </p>

        <button
          className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        onClick={(e) => handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
Card.defaultProps = {
    title: "Title(Not yet defined)",
    content: "Content(Not yet defined)",
}

export default Card;
