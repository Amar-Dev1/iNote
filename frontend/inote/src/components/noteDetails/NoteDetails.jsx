import React from 'react';
import './NoteDetails.css';
import { GrFavorite } from 'react-icons/gr';
import { ImCross } from 'react-icons/im';

const NoteDetails = ({ title, intro, date, onClose }) => {
    return (
        <div className="details-overlay">
            <div className="note-details rounded d-flex flex-column">
                <ImCross className="exit-icon" onClick={onClose} />
                <div className="note-header d-flex justify-content-between">
                    <h3>{title}</h3>
                    <GrFavorite className="favorite-icon" />
                </div>
                <div className="note-body my-3 bg-light rounded p-2 flex-grow-1">
                    <p className='intro'>{intro}</p>
                </div>
                <div className="note-footer d-flex justify-content-between">
                    <span>📅 {date}</span>
                    <div className="actions">
                        <button className="btn btn-warning mx-1">Update</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoteDetails;