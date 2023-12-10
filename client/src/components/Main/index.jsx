import React, { useState } from 'react';
import './style.css';
import TextBox from '../TextBox';
import Result from '../Result';

const Main = () => {
  const [tonality, setTonality] = useState(null);
  const [subjectivityLevel, setSubjectivityLevel] = useState(null);

  const handleTonalityData = (data) => {
    console.log('Tonality:', data.tonality);
    console.log('Subjectivity Level:', data.subjectivityLevel);
    setTonality(data.tonality);
    setSubjectivityLevel(data.subjectivityLevel || 0);
  };

  return (
    <div className='main'>
      <TextBox onTonalityData={handleTonalityData} />
      {tonality !== null && (
        <div className={`result-container ${tonality !== null ? 'visible' : ''}`}>
          <Result tonality={tonality} subjectivityLevel={subjectivityLevel} />
        </div>
      )}
      
    </div>
  );
};

export default Main;
