import React from 'react';
import { Card } from 'react-bootstrap';

const SongCard = ({ id, title, artist, cover }) => (
  <Card key={id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={cover} />
    <Card.Body>
      <Card.Title>{artist}</Card.Title>
      <Card.Text>{title}</Card.Text>
    </Card.Body>
  </Card>
);

export default SongCard;