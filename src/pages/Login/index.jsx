import { useContext } from 'react'
import { Link } from 'react-router-dom'
// context
import { MyContext } from '../../context/MyContext'



export default function Index(){

  const { name, setName } = useContext(MyContext)

  return (
    <div className='flex flex-col px-8 py-14'>
      <h1 className='mt-2 text-6xl font-bold text-gray-800'>Login</h1>
      <input
        className='mt-16 p-3 outline-yellow-500'
        placeholder='digite seu nome...'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button className='w-full bg-yellow-400 py-3 text-gray-700 text-sm mt-5'>
        <Link to='/'>Entrar</Link>
      </button>
    </div>
  ) 
}