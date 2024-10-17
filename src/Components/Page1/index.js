import { useNavigate } from "react-router-dom"
import './index.css'

const Page1 =()=>{
    const navigate=useNavigate()
    const page1ToPage2=(num)=>{   
        navigate('/page2')
        localStorage.setItem('brainScore',num)
    }
   
    return (
        <div className="pageDiv">
            <h1 className="didYou">Selected cricketer in the list?</h1>
            <div className="nameDiv">
            <p className="name">Virat Kohli</p>
            <p  className="name">Rohit Sharma</p>
            
          
            <p className="name">MS Dhoni</p>
         
            <p className="name">Jasprit Bumrah</p>
         
            <p className="name">Shubman Gill</p>
            </div>
            <div className="rowDiv">
            <div>
                <button className="yesBtn" onClick={()=>{page1ToPage2(0)}}>No</button>
            </div>
            <div>
                <button className="yesBtn" onClick={()=>{page1ToPage2(8)}}>Yes</button>
            </div>
            </div>
        </div>
    )
}

export default Page1