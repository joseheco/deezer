import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import SongCard from './SongCard';

const Home = () => {
  const mySongs = useSelector((state) => state.songs)
  return (
    <Container>
      {
        mySongs.map((song) => (
          <SongCard
            key={song.id}
            title={song.title}
            artist={song.artist}
            cover={song.cover}
          />
        ))
      }
    </Container>
  );
};

export default Home;
