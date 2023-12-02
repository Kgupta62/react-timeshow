import React,{useState} from 'react';

const App = () => {
  const [time,settime] = useState(new Date().toLocaleTimeString())
  setInterval(() => {
    settime(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <div>{time}</div>
  )
}

export default App