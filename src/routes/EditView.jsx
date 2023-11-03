import { useState } from "react";
import { supabase } from "../client";
import { useParams } from "react-router-dom";
import "./EditView.css";
import Customization from '../components/Customization.jsx'

const EditView = () => {
    const { id } = useParams();

    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
            .from("Posts")
            .update({ title, author, description })
            .eq("id", id);

        window.location = "/";
    };

    return (
        <div>
            <Customization operation={updatePost} />
        </div>
    );
};

export default EditView;