import { useState } from "react";
import { supabase } from "../client";
import { useParams } from "react-router-dom";
import "./EditView.css";
import Customization from '../components/Customization.jsx'

const EditView = () => {
    const { id } = useParams();

    const updateCrewmate = async (crewmate) => {
        crewmate.preventDefault();
        await supabase
            .from("Crewmates")
            .update({name: crewmate.target.name.value, speed: crewmate.target.speed.value, color: crewmate.target.color.value})
            .eq("id", id);

        window.location = "/";
    };

    const deleteCrewmate = async (crewmate) => {
        crewmate.preventDefault();
    
        await supabase
        .from('Crewmates')
        .delete()
        .eq('id', id); 
    
        window.location = "/";
    };

    const submitButton = <div className="buttons"><button type="submit">Update Crewmate</button><button onClick={deleteCrewmate}>Delete Crewmate</button></div>;

    return (
        <div>
            <Customization operation={updateCrewmate} operation2={deleteCrewmate} submitElement={submitButton}/>
        </div>
    );
};

export default EditView;