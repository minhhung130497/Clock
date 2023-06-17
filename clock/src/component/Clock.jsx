import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Button from './Button'
import Note from './Note'

const Clock = () => {
    const [time, setTime] = useState(0)
    const [timeon, setTimeon] = useState(false)
    const intervalRef = useRef()

    // clear interval
    useEffect(() => {
        return () => clearInterval(intervalRef.current)
    }, [])

    useEffect(() => {
        if (timeon) {
            intervalRef.current = setInterval(() => {
                setTime(pre => pre + 100)
            }, 10)
           
        } else {
            clearInterval(intervalRef.current)
        }
    }, [timeon])

    const formatTime = time => {
        const minu = Math.floor(time / 60000)
        const secon = Math.floor((time % 60000) / 1000)
        const milisecon = Math.floor((time % 1000) / 10).toString().padStart(2,'0')
        return `${minu}:${secon.toString().padStart(2, '0')}.${milisecon}`
    }
    return (
        <div>
            <h1 >Stopwatch</h1>
            <div className="clock"><p>{formatTime(time)}</p></div>
            <Button  time={time}  setTime={setTime} timeon={timeon} setTimeon={setTimeon}/>
            <Note/>
        </div>
    )
}

export default Clock
