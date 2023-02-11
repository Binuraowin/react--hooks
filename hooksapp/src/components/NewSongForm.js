import React, { useState } from "react";

const NewSongsForm = ({addSong}) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      addSong(title);
      setTitle('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
      <label>Song name:</label>
      <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type='submit' value='add' />
    </form>
     );
}
 
export default NewSongsForm;