import './Header.css';
import { MdAddCircleOutline } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
const Header = () => {
    return (
        <div className="header my-5 d-flex justify-content-center">
            <nav className='bg-dark d-flex justify-content-center p-2 rounded'>
                <a href="#" className='text-light mx-3 fs-4 p-2 rounded'><MdAddCircleOutline /> add note</a>
                <a href="#" className='text-light mx-3 fs-4 p-2 rounded'><GrFavorite /> favorites</a>
            </nav>
        </div>

    )
}

export default Header;