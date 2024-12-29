import React from 'react';
import './Note.css';
import { GrFavorite } from 'react-icons/gr';
const Note = (props) => {
    return (
        <div className='note rounded bg-dark text-light p-3 w-100 d-flex flex-column'>
            <div className="note-header d-flex justify-content-between">
                <h3 className="title">{props.noteTitle}</h3>
                <small className='favorite fs-5'><GrFavorite /></small>
            </div>
            <div className="note-body my-3 rounded d-flex align-items-center ">
                <p className="intro fs-5 w-80 py-4 px-2">{props.noteIntro}</p>
            </div>
            <div className="note-footer d-flex justify-content-between align-items-center">
                <span className='date'>🔵 {props.noteDate}</span>
            <a href="#" className='btn btn-primary px-4 fw-bold'>View</a>
            </div>
        </div>
    )
}

export default Note;