import { Col, Container, Row } from 'react-bootstrap';
import './Notes.css';
import Note from '../../components/note/Note';
import axios from 'axios';
import { useState, useEffect } from 'react';
const Notes = () => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/notes/');
                setNotes(response.data)
            }
            catch {
                console.log('error');
            }
        }
        fetchData();

    }, [])

    // Function to format date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <Container className='notes'>
            <Row className='d-flex justify-content-center align-items-center my-1 py-5'>
                {
                    notes.map((note) => {
                        return (
                            <Col key={note.id} xl="3" lg="4" md="6" sm="12" className='d-flex justify-content-center m-1'>
                                <Note noteTitle={note.title} noteDate={formatDate(note.created_at)} noteIntro={note.content} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default Notes;