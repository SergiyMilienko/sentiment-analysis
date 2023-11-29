import React from 'react'
import './style.css'

const TextBox = () => {
  return (
    <div className='input'>
        <p>Автоматичне визначення <strong>тональності</strong> тексту</p>
        <form>
            <textarea name="" id="" cols="30" rows="10" autoFocus></textarea>
            <button type="submit">Визначити</button>
        </form>
    </div>
  )
}

export default TextBox