import { useState, type ReactNode } from 'react'
import Child from './Child'

function App(): ReactNode {
  const [count, setCount] = useState<number | undefined>()

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col items-center p-2 m-4 border text-blue-500">
          <div>{count}</div>
          <button
            className="rounded-md border px-20"
            onClick={() => setCount((count ?? 0) + 1)}
          >
            +
          </button>
        </div>

        <Child />
      </div>
    </>
  )
}

export default App
