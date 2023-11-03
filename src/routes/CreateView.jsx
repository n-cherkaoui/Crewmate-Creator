import React from 'react';
import './CreateView.css'
import { supabase } from '../client'
import Customization from '../components/Customization.jsx'

const createView = () => {
  const createView = async (post) => {
    post.preventDefault();

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
      <Customization operation={createView}/>
    </div>
  );
};

export default createView;