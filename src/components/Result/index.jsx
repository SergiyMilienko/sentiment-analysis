import React from 'react'
import './style.css'

const Result = () => {
  return (
    <div className='result'>
        <div className="tonality">
            <p>Тональність тексту: </p>
            <img src="./img/happy.svg" alt="" />
        </div>
        <p>Рівень суб'єктивності: <strong className='red'>24%</strong></p>
    </div>
  )
}

export default Result