import {useNavigate} from "react-router-dom"
import './index.css'

const Home =()=>{
   const navigate=useNavigate()
    const letsPlay=()=>{
       navigate('./page1')
    }
    return (
        <div className="homeDiv">
            <h1 className="heading">I will read your brain</h1>
            <p className="paragraph">First select a cricketer from below</p>
            <div className="nameDiv">
                <p className="name">Virat Kohli</p>
                <p className="name">Rohit Sharma</p>
                <p className="name">Kl Rahul</p>
                <p className="name">Hardik Pandya</p>
                <p className="name">MS Dhoni</p>
                <p className="name">Rishabh Pant</p>
                <p className="name">Jasprit Bumrah</p>
                <p className="name">Surya Kumar</p>
                <p className="name">Shubman Gill</p>
            </div>
            <div>
                <button className="letsPlayBtn" onClick={letsPlay}>Lets Play</button>
            </div>
        </div>
    )
}

export default Home