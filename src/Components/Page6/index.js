import { useNavigate } from "react-router-dom"

const Page6 =()=>{
    const myScore=localStorage.getItem('brainScore')
    const navigate=useNavigate()
    const page6ToPage7=(num)=>{
        navigate('/page7')
        localStorage.setItem('brainScore',parseInt(myScore)+num)
    }
    return (
        <div className="pageDiv">
        <h1 className="didYou">Did you find your cricketer here?</h1>
       <div className="nameDiv">
            <p className="name">Virat Kohli</p>
            <p className="name">Hardik Pandya</p>
            <p className="name">MS Dhoni</p>
            <p className="name">Rishabh Pant</p>
            <p className="name">Shubman Gill</p>
            </div>
            <div className="rowDiv">
            <div>
                <button className="yesBtn" onClick={()=>page6ToPage7(6)}>Yes</button>
            </div>
            <div>
                <button className="yesBtn" onClick={()=>page6ToPage7(0)}>No</button>
            </div>
            </div>
        </div>
    )
}

export default Page6