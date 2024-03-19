import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increament,decreament,reset } from './Features/Counter/CounterSlice';

function App() {
    
  const count = useSelector((state)=>state.counter.value);
  const dispatch=useDispatch()


  return (
  
      <>
     {/* <Count></Count> */}
     <h1 className="text-black bg-green-400 pb-3 m-10 rounded-xl">My Counter</h1>
     <h2 className="text-yellow-400 text-4xl text-center bg-red-900 pb-3 m-3 rounded-xl">Counter:{count}</h2>
     <button className="text-blue-400 bg-red-900 pb-3 m-3 rounded-xl " onClick={()=>dispatch(increament())} >Increase</button>
     <br />
     <button className='text-blue-400 bg-red-900 pb-3 m-3 rounded-xl' onClick={()=>dispatch(decreament())}  >Decrease</button>
     <br />
     <button className='text-blue-400 bg-red-900 pb-3 m-3 rounded-xl' onClick={()=>dispatch(reset())} >Reset</button>
     
    </>
    
  )
}

export default App
