import React from 'react'
import './style.css'

const TextBox = () => {
  return (
    <div className='input'>
        <form>
            <textarea placeholder="Введіть ваш текст" name="" id="" cols="30" rows="10" autoFocus></textarea>
            <button type="submit">Визначити</button>
        </form>
    </div>
  )
}

export default TextBox