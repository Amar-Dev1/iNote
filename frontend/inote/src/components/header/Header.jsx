import { Container } from 'react-bootstrap';
import './Header.css';
import { FaRegNoteSticky } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { MdAddCircleOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Container fluid className="header py-3 d-flex justify-content-center align-items-center">
            <nav className='bg-dark d-flex justify-content-center p-2'>
                <Link to={"/"} className='text-light mx-3 p-1 d-flex align-items-center'><FaRegNoteSticky className='mx-2' /> All notes</Link>
                <Link to={"favorite"} className='text-light mx-3 p-1 d-flex align-items-center'><GrFavorite className='mx-2' /> favorite</Link>
            </nav>
            <div className='d-flex align-items-center'>
                <Link to={"add-note"} className='add-note bg-dark text-light mx-3 p-2 d-flex align-items-center'><MdAddCircleOutline className='mx-2' />  add note</Link>
            </div>
        </Container>
    )
}

export default Header;