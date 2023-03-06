import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRightShort } from 'react-icons/bs'
// import {  } 
// context
import { MyContext } from '../../context/MyContext'

export default function Index(){

  const { name } = useContext(MyContext)

  const games = [
    {
      subTitle: '0 - 10', 
      title: 'Jogue seguro', 
      description: 'Não perca muito dinheiro, jogue fácil.',
      link: '/jogo-seguro'
    },
    {
      subTitle: '0 - 20', 
      title: 'Ganhe dinheiro', 
      description: 'Ganhe mais pontos na dificuldade alta.',
      link: '/jogo-dificil'
    },
  ]

  return (
    <div className='px-5 py-14'>
      <header className='flex flex-col'>
        <span className='flex flex-row items-center w-full text-2xl text-gray-600 font-semibold'> Olá 👋, 
          <span className='text-sm ml-auto text-yellow-600'>🪙 100 Pontos</span>
        </span>
        <h1 className='mt-2 text-6xl font-bold text-gray-800'>{name}</h1>
      </header>

      <div className='flex flex-col mt-20'>
        <p className='text-xl font-semibold text-gray-600 mb-7'>Qual você deseja jogar hoje?</p>
        <div className='flex flex-row gap-4'>
          { games.map((item, index) => 
            <Link key={index} to={item.link} className='flex flex-col items-center py-5 px-3 w-full rounded-xl bg-gray-600'>
              <div className=''>
                <span className='text-yellow-400 text-sm'>{item.subTitle}</span>
                <h2 className='text-2xl font-bold text-white'>{item.title}</h2>
                <p className='w-full text-sm mt-2 text-gray-200'>{item.description}</p>
              </div>
              <div className='flex flex-row py-2 mt-5 items-center justify-center w-full rounded-lg bg-yellow-400 text-gray-700 text-sm'>
                Jogar <BsArrowRightShort className='text-[24px] text-gray-700 ml-2'/>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  ) 
}