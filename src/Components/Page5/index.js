import { useNavigate } from "react-router-dom"

const Page5 =()=>{
    const myScore=localStorage.getItem('brainScore')
    const navigate=useNavigate()
    const page5ToPage6=(num)=>{
        navigate('/page6')
        localStorage.setItem('brainScore',parseInt(myScore)+num)
    }
    return (
        <div className="pageDiv">
        <h1 className="didYou">Did you find your cricketer here?</h1>
       <div className="nameDiv">
            <p className="name">Virat Kohli</p>
            <p className="name">Rohit Sharma</p>
            <p className="name">Rishabh Pant</p>
            <p className="name">Jasprit Bumrah</p>
            <p className="name">Surya Kumar</p>
            <p className="name">Shubman Gill</p>
            </div>
            <div className="rowDiv">
            <div>
                <button className="yesBtn" onClick={()=>page5ToPage6(5)}>Yes</button>
            </div>
            <div>
                <button className="yesBtn" onClick={()=>page5ToPage6(0)}>No</button>
            </div>
            </div>
        </div>
    )
}

export default Page5