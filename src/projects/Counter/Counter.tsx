import './index.scss';
import {useState} from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0)

  const onClickIncrement = () => {
    setCount(count + 1)
  }
  const onClickDecrement = () => {
    setCount(count - 1)
  }
   return (
     <div className="App">
       <div>
         <h2>Счетчик:</h2>
         <h1>{count}</h1>
         <button className="minus" onClick={onClickDecrement}  disabled={count === 0}>- Минус</button>
         <button className="plus" onClick={onClickIncrement}>Плюс +</button>
       </div>
     </div>
   );
}
