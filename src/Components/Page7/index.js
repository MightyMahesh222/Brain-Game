import { useNavigate } from "react-router-dom"

const Page7 =()=>{
    const myScore=localStorage.getItem('brainScore')
    const navigate=useNavigate()
    const page7ToLast=(num)=>{
        navigate('/last')
        localStorage.setItem('brainScore',parseInt(myScore)+num)
    }
    return (
        <div className="pageDiv">
        <h1 className="didYou">Did you find your cricketer here?</h1>
       <div className="nameDiv">
            <p className="name">Rohit Sharma</p>
            <p className="name">Kl Rahul</p>
            <p className="name">Hardik Pandya</p>
            <p className="name">Rishabh Pant</p>
            <p className="name">Jasprit Bumrah</p>
            <p className="name">Surya Kumar</p>
            </div>
            <div className="rowDiv">
            <div>
                <button className="yesBtn" onClick={()=>page7ToLast(4)}>Yes</button>
            </div>
            <div>
                <button className="yesBtn" onClick={()=>page7ToLast(0)}>No</button>
            </div>
            </div>
        </div>
    )
}

export default Page7