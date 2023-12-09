import React, {useState} from 'react'
import axios from 'axios';
import './style.css'

const TextBox = ({ onTonalityData }) => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/analyze-tonality', {
        text,
      });
      console.log(response.data);
      onTonalityData(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='input'>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Введіть ваш текст"
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="text"
          cols="30"
          rows="10"
          autoFocus
        ></textarea>
        <button type="submit">Визначити</button>
      </form>
    </div>
  );
};

export default TextBox