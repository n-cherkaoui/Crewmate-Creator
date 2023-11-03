import React from 'react';
import './CreateView.css'
import { supabase } from '../client'
import Customization from '../components/Customization.jsx'

const createView = () => {
  const submitButton = <button type="submit">Create Crewmate</button>

  const createView = async (post) => {
    post.preventDefault();
    console.log(post.target.name.value)

    // Insert the post into the database
    await supabase
      .from('Crewmates')
      .insert({name: post.target.name.value, speed: post.target.speed.value, color: post.target.color.value})
      .select()

    // Redirect to the home page
    window.location = "/";
  };

  return (
    <div>
      <h1>Create a new crewmate!</h1>
      <img src="../src/assets/images/crewmates.png"></img>
      <Customization operation={createView} submitElement={submitButton}/>
    </div>
  );
};

export default createView;