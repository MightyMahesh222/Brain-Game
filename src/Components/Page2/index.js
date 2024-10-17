import { useNavigate } from "react-router-dom"

const Page2 =()=>{
    const myScore=localStorage.getItem('brainScore')
    const navigate=useNavigate()
    const page2ToPage3=(num)=>{
        navigate('/page3')
        localStorage.setItem('brainScore',parseInt(myScore)+num)
    }
    return (
        <div className="pageDiv">
            <h1 className="didYou">Selected cricketer in the list?</h1>
            <div className="nameDiv">
            <p className="name">Virat Kohli</p>
            <p className="name">Kl Rahul</p>
            <p className="name">Hardik Pandya</p>
            <p className="name">Rishabh Pant</p>
            <p className="name">Surya Kumar</p>
            </div>
            <div className="rowDiv">
            
            <div>
                <button className="yesBtn"  onClick={()=>page2ToPage3(0)}>No</button>
            </div>
            <div>
                <button className="yesBtn" onClick={()=>page2ToPage3(3)}>Yes</button>
            </div>
            </div>
        </div>
    )
}

export default Page2