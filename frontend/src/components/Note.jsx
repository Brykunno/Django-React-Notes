import React from "react";
import "../styles/Note.css"
import LoadingIndicator from "./LoadingIndicator";
import { useState } from "react";

function Note ({note,onDelete}){

    
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")
    return <div className="note-container">
        <p className="note-title">{note.title}</p>
        <p className="note-content">{note.content}</p>
        <p className="note-title">{formattedDate}</p>
       
        <button className="delete-button" onClick={() => onDelete(note.id)}>Delete note</button>
    </div>

}

export default Note