import { HiArrowSmLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function HeaderGame(props) {

  return (
    <>
      <Link to={props.backPage} className='flex flex-row text-xl items-center mb-8 text-gray-700'>
        <HiArrowSmLeft className="mr-3 text-gray-700"/>
        Voltar
      </Link>
      <header className='flex flex-col'>
        <span className='flex flex-row items-center w-full text-2xl text-gray-600 font-semibold'> Bem-vindo(a) ao, 
          <span className='text-sm ml-auto text-yellow-600'>🪙 100 Pontos</span>
        </span>
        <h1 className='mt-3 text-5xl font-bold text-gray-800'>{props.title}</h1>
      </header>
    </>
  )
}