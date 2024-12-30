import React, { useState } from 'react';
import './Note.css';
import NoteDetails from '../noteDetails/NoteDetails';
import { GrFavorite } from 'react-icons/gr';

const Note = ({ noteTitle, noteIntro, noteDate }) => {
    const [isDetailsVisible, setDetailsVisible] = useState(false);

    const toggleDetails = () => {
        setDetailsVisible(!isDetailsVisible);
    };

    return (
        <>
            <div className="note card bg-dark text-light p-3 w-100">
                <div className="note-header d-flex justify-content-between">
                    <h3 className="title">{noteTitle}</h3>
                    <GrFavorite className="favorite-icon" />
                </div>
                <div className="note-body my-3 rounded flex-grow-1 p-1">
                    <p className="intro">{noteIntro}</p>
                </div>
                <div className="note-footer d-flex justify-content-between align-items-center">
                    <span className="date">📅 {noteDate}</span>
                    <button className="btn btn-primary" onClick={toggleDetails}>
                        View
                    </button>
                </div>
            </div>

            {isDetailsVisible && (
                <NoteDetails
                    title={noteTitle}
                    intro={noteIntro}
                    date={noteDate}
                    onClose={toggleDetails}
                />
            )}
        </>
    );
};

export default Note;
