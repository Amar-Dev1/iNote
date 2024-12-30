import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const AddNote = () => {
  const Navigate = useNavigate()
  const [title, setTitle] = useState(null)
  const [content, setContent] = useState(null)
  const [favorite, setFavorite] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newNote = { title, content, is_favorite: favorite }

    try {
      const res = await axios.post('http://127.0.0.1:8000/api/notes/', newNote)
      alert("Note added successfuly ! ✅")
      Navigate('/')

    } catch (error) {
      console.error("error ❗", error)
      alert("Faild to add note ❗")
    }
  }
  return (
    <Container className="py-4">
      <h2>Add New Note</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="note title"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="note content"
            rows={4}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            name="is_favorite"
            value={favorite}
            onChange={(e) => setFavorite(e.target.checked)}
            label="Mark as Favorite"
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Add Note
        </Button>
      </Form>
    </Container>
  );
};

export default AddNote;
