import logo from './logo.svg';
import './App.css';
import Counter from './Pages/Counter';
import Stats from './Pages/Stats';
import { useState } from 'react';

const initialState = [
  { id: 1, count: 0 },
  { id: 2, count: 0 },
  { id: 3, count: 0 },
]

function App() {

  const [state, setState] = useState(initialState);

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0)
  }

  console.log(state)

  const increment = (id) => {
    console.log("hi")

    const updateCounter = state.map(c => {

      if (c.id === id) {
        return {
          ...c,
          count: c.count + 1,
        }
      }

      return { ...c }

    });
    setState(updateCounter)

  }


  const decrement = (id) => {
    const updateCounter = state.map(c => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count - 1,
        }
      };

      return { ...c };

    });
    setState(updateCounter)
  }


  return (
    <div className="App">
      {state.map(count => <Counter
        count={count.count}
        key={count?.id}
        id={count?.id}
        increment={increment}
        decrement={decrement}
      ></Counter>)}

      <Stats count={totalCount()}></Stats>

    </div>
  );
}

export default App;
