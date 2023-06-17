import React, { useState } from 'react'

const Button = ({time , setTime ,timeon,setTimeon}) => {


    const handleStartStop = () => {
        setTimeon(!timeon)
    }

    const handleReset = () => {
        setTime(0)
        setTimeon(false)
    }
  return (

    <div>
      <button onClick={handleStartStop}>{timeon ? 'Stop' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Button
