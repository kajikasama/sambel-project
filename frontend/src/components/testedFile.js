import React, { useState } from "react"

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount)
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>
        Reset
      </button>
      <button
        onClick={() =>
          setCount((prevCount) => prevCount - 1)
        }>
        -
      </button>
      <button
        onClick={() =>
          setCount((prevCount) => prevCount + 1)
        }>
        +
      </button>
    </>
  )
}

const testedFile = () => {
  return <div>testedFile</div>
}

export default testedFile
