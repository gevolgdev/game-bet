import { useContext } from 'react'
// context
import { MyContext } from '../../context/MyContext'

export default function Index(){

  const { count } = useContext(MyContext)

  return (
    <>
      <h1>Home {count}</h1>
    </>
  ) 
}