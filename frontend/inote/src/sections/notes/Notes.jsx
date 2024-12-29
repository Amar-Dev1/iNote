import { Col, Container, Row } from 'react-bootstrap';
import './Notes.css';
import Note from '../../components/note/Note';
const Notes = () => {
    return (
        <Container className='notes'>
            <Row className='d-flex justify-content-center align-items-center my-1 py-5'>
                <Col xl="3" lg="4" md="6" sm="12" className='d-flex justify-content-center m-1'>
                    <Note noteTitle="Note 1" noteDate="2025-1-1" noteIntro="this is the first note in 2025" />
                </Col>
                <Col xl="3" lg="4" md="6" sm="12" className='d-flex justify-content-center m-1'>
                    <Note noteTitle="Note 1" noteDate="2025-1-1" noteIntro="ttttttttttttttttttttttttttttthis is the first note in 2025" />
                </Col>
                <Col xl="3" lg="4" md="6" sm="12" className='d-flex justify-content-center m-1'>
                    <Note noteTitle="Note 1" noteDate="2025-1-1" noteIntro="this is the first note in 2025" />
                </Col>
                <Col xl="3" lg="4" md="6" sm="12" className='d-flex justify-content-center m-1'>
                    <Note noteTitle="Note 1" noteDate="2025-1-1" noteIntro="this is the first note in 2025" />
                </Col>
            </Row>
        </Container>
    )
}

export default Notes
