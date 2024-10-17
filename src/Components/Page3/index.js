import { useNavigate } from "react-router-dom"

const Page3 =()=>{
    const myScore=localStorage.getItem('brainScore')
    const navigate=useNavigate()
    const page3ToPage4=(num)=>{
        navigate('/page4')
        localStorage.setItem('brainScore',parseInt(myScore)+num)
    }
    return (
        <div className="pageDiv">
            <h1 className="didYou">Selected cricketer in the list?</h1>
            <div className="nameDiv">
            <p className="name">Rohit Sharma</p>
            <p className="name">Kl Rahul</p>
            <p className="name">MS Dhoni</p>
            <p className="name">Surya Kumar</p>
            <p className="name">Shubman Gill</p>
            </div>
            <div className="rowDiv">
           
            <div>
                <button className="yesBtn"  onClick={()=>page3ToPage4(0)}>No</button>
            </div>
            <div>
                <button className="yesBtn" onClick={()=>page3ToPage4(13)}>Yes</button>
            </div>
            </div>
        </div>
    )
}

export default Page3