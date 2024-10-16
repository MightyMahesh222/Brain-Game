import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import './index.css'

const LastPage =()=>{
    const finalScore=localStorage.getItem('brainScore')
    const [answer,setAnswer]=useState('')
    const [err,setErr]=useState(false)
    const navigate=useNavigate()
    const playAgain=()=>{
        navigate('/')
        localStorage.removeItem('brainScore')
    }

    useEffect(()=>{
        switch(finalScore){
            case '44':
                setAnswer('Virat Kohli')
                break
            case '27':
                setAnswer('Rohit Sharma')
                break
            case '42':
                setAnswer('Kl Rahul')
                break
            case '35':
                setAnswer('Hardik Pandya')
                break
            case '49':
                setAnswer('Ms Dhoni')
                break
            case '18':
                setAnswer('Rishabh Pant')
                break
            case '39':
                setAnswer('Jasprit Bumrah')
                break
            case '25':
                setAnswer('SKY')
                break
            case '32':
                setAnswer('Shubman Gill')
                break
            default:
                setAnswer('Use glasses for better vision')
                setErr(true)
                break
        }
    })
    return (
        <div className="pageDiv">
        <h1 className="didYou">Here is your result</h1>
          <p className="isError"> {err? "Something went wrong" : "Your selected cricketer is"}</p>
            <p className="answer">{answer}</p>
            <div>
                <button className="yesBtn" onClick={playAgain}>Play Again</button>
            </div>
        </div>
    )
}

export default LastPage