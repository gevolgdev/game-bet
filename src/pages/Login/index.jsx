import { useContext } from 'react'
import { Link } from 'react-router-dom'
// context
import { MyContext } from '../../context/MyContext'



export default function Index(){

  const { count, setCount } = useContext(MyContext)

  return (
    <>
      <h1>Login {count}</h1>
      <button 
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Add +
      </button>
      <Link to='/'>Home</Link>
    </>
  ) 
}