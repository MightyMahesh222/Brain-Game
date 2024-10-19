import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
import Page4 from './Components/Page4'
import Page5 from './Components/Page5'
import Page6 from './Components/Page6'
import Page7 from './Components/Page7'
import LastPage from './Components/LastPage'




function App() {
  return (
    <div className='app'>
       <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path="/page1" element={<Page1/>}/>
          <Route exact path='/page2' element={<Page2/>}/>
          <Route exact path='/page3' element={<Page3/>}/>
          <Route exact path='/page4' element={<Page4/>}/>
          <Route exact path='/page5' element={<Page5/>}/>
          <Route exact path='/page6' element={<Page6/>}/>
          <Route exact path='/page7' element={<Page7/>}/>        
          <Route exact path='/last' element={<LastPage/>}/>
          </Routes>
       </BrowserRouter>
       </div>
  );
}

export default App;
