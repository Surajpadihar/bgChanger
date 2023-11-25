 
import { useState } from 'react'
import './App.css'

function App() {
  
  const [color,setcolor] = useState("");

   function bgChanger(){
    const str = "ABCDEF0123456789";
    
    const len = str.length;

    let c ="#";

    for(let i=0;i<6;i++){
      c+=(str[Math.floor(Math.random()*len)])
    }
    // console.log(c);
    setcolor(c);
    // console.log(color);
   }
    
  return (
   <div className='h-screen md:h-screen' style={{backgroundColor : `${color}`}}>
    <div className='flex justify-center items-center'>
      <button className='m-2 bg-red-600 rounded-lg px-7 py-2' onClick={()=>bgChanger()}>Bg changer</button>
      
    </div>
   </div>
  )
}

export default App
