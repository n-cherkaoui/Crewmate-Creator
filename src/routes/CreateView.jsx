import React from 'react';
import './CreateView.css'
import { supabase } from '../client'

const createView = () => {
  const createView = async (post) => {
    post.preventDefault();

    // Insert the post into the database
    await supabase
      .from('Posts')
      .insert({title: post.target.name.value, author: post.target.speed.value, description: post.target.color.value})
      .select()

    // Redirect to the home page
    window.location = "/";
  };

  return (
    <div>
      <form onSubmit={createView}>
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
        />
        <br />

        <label for="speed">Speed</label>
        <input
          type="text"
          id="speed"
        />
        <br />

        <label for="color">color</label>
        <input
          type="text"
          id="color"
        />
        <br />

        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
};

export default createView;