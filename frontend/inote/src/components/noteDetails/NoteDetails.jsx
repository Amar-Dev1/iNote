import 'bootstrap/dist/css/bootstrap.min.css';
import './NoteDetails.css';
import { Container } from 'react-bootstrap';
import { GrFavorite } from 'react-icons/gr';
import { ImCross } from "react-icons/im";
const NoteDetails = (props) => {
    return (
        <div fluid className='details-wrapper'>
            <ImCross className='exit-icon' />
            <div className='note-details d-flex flex-column p-3 rounded'>
                <div className="note-header d-flex justify-content-between my-3">
                    <h3 className="title">{props.noteTitle}</h3>
                    <small className='favorite fs-5'><GrFavorite /></small>
                </div>
                <div className="note-body text-center flex-grow-1 rounded">
                    <p className="intro fs-5 w-80 py-4 px-2">{props.noteIntro}</p>
                </div>
                <div className="note-footer my-3 d-flex justify-content-between">
                    <span className='date'>🔵 {props.noteDate}</span>
                    <div className="operations">
                        <a href="#" className='btn btn-warning mx-1'>Update</a>
                        <a href="#" className='btn btn-danger'>Delete</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteDetails
