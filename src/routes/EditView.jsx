import { useState } from "react";
import { supabase } from "../client";
import { useParams } from "react-router-dom";
import "./EditView.css";

const EditPost = () => {
  const { id } = useParams();

  const updatePost = async (event) => {
    event.preventDefault();

    await supabase
      .from("Posts")
      .update({ title, author, description })
      .eq("id", id);

    window.location = "/";
  };

//   const deletePost = async (event) => {
//     event.preventDefault();
//     await supabase.from("Posts").delete().eq("id", id);

//     await supabase
//     .from('Posts')
//     .delete()
//     .eq('id', id); 

//     window.location = "/";
//   };

  return (
    <div>
      <form>
        <label for="title">Title</label> <br />
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleTitleChange}
        />
        <br />
        <br />
        <label for="author">Author</label>
        <br />
        <input
          type="text"
          id="author"
          name="author"
          onChange={handleAuthorChange}
        />
        <br />
        <br />
        <label for="description">Description</label>
        <br />
        <textarea
          rows="5"
          cols="50"
          id="description"
          onChange={handleDescriptionChange}
        ></textarea>
        <br />
        <input type="submit" value="Submit" onClick={updatePost} />
        <button className="deleteButton" onClick={deletePost}>Delete</button>
      </form>
    </div>
  );
};

export default EditPost;
