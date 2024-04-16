import React from 'react'
import './styles.css'

function InputField() {
  return (
    <form className='input'>
        <input type='text' placeholder='Enter a Task' className='input_box'></input>
        <button type='submit' className='button_submit'>GO</button>
    </form>
  )
}

export default InputField

