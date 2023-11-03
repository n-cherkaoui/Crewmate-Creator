import { useState, useEffect } from 'react';
import './Gallery.css'
import { supabase } from '../client'
import Card from "../components/Card";

const Gallery = () => {
  const [crewmates, setCrewmates] = useState([])

  useEffect(() => {
    const fetchCrewmates = async () => {
      // event.preventDefault();

      const { data } = await supabase
        .from("Crewmates")
        .select()
        .order("created_at", { ascending: true });
      setCrewmates(data);
    };

    fetchCrewmates()
  }, []);

  return (
    <div className="gallery">
      {crewmates ? (crewmates.map((crewmate) => (
        <Card name={crewmate.name} speed={crewmate.speed} color={crewmate.color}></Card>
      ))) : null}
    </div>
  );
};

export default Gallery;