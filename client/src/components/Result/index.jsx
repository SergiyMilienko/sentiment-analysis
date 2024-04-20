import React from 'react'
import './style.css'

const Result = ({ tonality, subjectivityLevel }) => {
  const renderTonalityContent = () => {
    if (tonality === 'positive') {
      return (
        <>
          <p>Тональність тексту:</p>
          <img src="/static/img/happy.svg" alt="Happy" />
        </>
      );
    } else if (tonality === 'negative') {
      return (
        <>
          <p>Тональність тексту:</p>
          <img src="/static/img/sad.svg" alt="Sad" />
        </>
      );
    } else {
      return (
        <>
          <p>Тональність тексту:</p>
          <img src="/static/img/neutral.svg" alt="Happy" />
        </>
      );
    }
  };

  return (
    <div className='result'>
      <div className="tonality">
        {renderTonalityContent()}
      </div>
    </div>
  );
};

export default Result