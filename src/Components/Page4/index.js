import { useNavigate } from "react-router-dom"

const Page4 =()=>{
    const myScore=localStorage.getItem('brainScore')
    const navigate=useNavigate()
    const page4ToPage5=(num)=>{
        navigate('/page5')
        localStorage.setItem('brainScore',parseInt(myScore)+num)
    }
    return (
        <div className="pageDiv">
        <h1 className="didYou">Did you find your cricketer here?</h1>
       <div className="nameDiv">
            <p className="name">Virat Kohli</p>
            <p className="name">Kl Rahul</p>
            <p className="name">Hardik Pandya</p>
            <p className="name">MS Dhoni</p>
            <p className="name">Jasprit Bumrah</p>
            </div>
           <div className="rowDiv">
            <div>
                <button className="yesBtn" onClick={()=>page4ToPage5(22)}>Yes</button>
            </div>
            <div>
                <button  className="yesBtn" onClick={()=>page4ToPage5(0)}>No</button>
            </div>
            </div>
        </div>
    )
}

export default Page4