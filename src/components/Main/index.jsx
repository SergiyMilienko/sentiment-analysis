import React from 'react'
import './style.css'
import TextBox from '../TextBox'
import Result from '../Result'

const Main = () => {
  return (
    <div className='main'>
        <TextBox/>
        <Result/>
    </div>
  )
}

export default Main