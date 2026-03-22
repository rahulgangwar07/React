import { useState } from 'react'
import { AboutFun } from "./About"

function App() {
  const [count, setCount] = useState(0)

  return (
    <AboutFun/>
    // <>
    //   <section id="center">
    //     <div className="hero">
    //     </div>
    //     <div>
    //       <h1>Get started</h1>
    //     </div>
    //     <button
    //       className="counter"
    //       onClick={() => setCount((count) => count + 1)}
    //     >
    //       Count is {count}
    //     </button>
    //     <h1>Hallo World</h1>
    //   </section>

    //   <div className="ticks"></div>



    //   <div className="ticks"></div>
    //   <section id="spacer"></section>
    // </>
  )
}

export default App
