import { useState } from "react";
import { supabase } from "../client";
import { useParams } from "react-router-dom";
import "./EditView.css";
import Customization from '../components/Customization.jsx'

const EditView = () => {
    const { id } = useParams();
    const submitButton = <input type="submit" value="Submit" />

    const updateCrewmate = async (crewmate) => {
        crewmate.preventDefault();

        await supabase
            .from("Crewmates")
            .update({name: crewmate.target.name.value, speed: crewmate.target.speed.value, color: crewmate.target.color.value})
            .eq("id", id);

        window.location = "/";
    };

    const crewmate = async (crewmate) => {
        crewmate.preventDefault();

        await supabase
            .from("Crewmates")
            .update({name: crewmate.target.name.value, speed: crewmate.target.speed.value, color: crewmate.target.color.value})
            .eq("id", id);

        window.location = "/";
    };

    return (
        <div>
            <Customization operation={updateCrewmate} submitElement={submitButton}/>
        </div>
    );
};

export default EditView;