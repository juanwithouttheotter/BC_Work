import React from "react";
import {ADD_POST} from "../../utils/actions";
import {useStoreContext} from "../../utils/GlobalState";

const CreatePostForm = () => {
  const [_, dispatch] = useStoreContext();
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
      <h1>Create a blog post</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required placeholder="Title" />
        <textarea className="form-control mb-5" required placeholder="Body" />
        <input className="form-control mb-5" placeholder="Screen name" />
        <button className="btn btn-success mt-3 mb-5" type="submit" onClick={()=> dispatch({type: ADD_POST})}>
          Save Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;
