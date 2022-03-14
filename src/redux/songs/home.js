const LOAD_SONGS = 'LOAD_SONGS';

const initialState = [];

const songsUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks';
// const songDataUrl = 'https://api.deezer.com/chart/0/tracks/:id';
// const albumDataUrl = 'https://api.deezer.com/album/:id';
// const searchUrl = 'https://api.deezer.com/search?q=eminem';

export const getSongs = (payload) => ({
  type: LOAD_SONGS,
  payload,
});

const songs = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SONGS:
      return action.payload;
    default:
      return state;
  }
};

export const loadSongs = () => async (dispatch) => {
  const response = await fetch(songsUrl);
  const songs = await response.json();
  const allSongs = songs.data.map((e) => {
    const currentSong = {
      id: e.id,
      title: e.title,
      artist: e.artist.name,
      cover: e.album.cover_medium,
    };
    return currentSong;
  });
  dispatch(getSongs(allSongs));
};

export default songs;
