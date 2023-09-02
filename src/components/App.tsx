import React, { useEffect, useState } from 'react'
import { Post } from './types'
import axios from 'axios'

type Props = {
  value?: number
}
const MyCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value)
  const [data, setData] = useState<Post[]>([])

  const onMinus = () => {
    setCounter((prev) => prev - 1)
  }

  const onPlus = () => {
    setCounter((prev) => prev + 1)
  }

  const fetchPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((json) => setData(json.data))
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      {data &&
        data.map((item, index) => {
          return (
            <div key={index}>
              <p>{item?.title}</p>
            </div>
          )
        })}
      <h1>Counter: {counter}</h1>
      <button onClick={onMinus}>-</button>
      <button onClick={onPlus}>+</button>
    </div>
  )
}

export default MyCounter
