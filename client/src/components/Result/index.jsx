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
      <p>Рівень суб'єктивності: <strong className='red'>{subjectivityLevel}%</strong></p>
    </div>
  );
};

export default Result