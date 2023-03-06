import { useState } from 'react'
// components
import { HeaderGame } from '../../components'

export default function EasyGame() {

  // Inserir Numeros - array
  // Rodar a "Roleta"
  // Verificar se ganhou ou perdeu
  // Retornar feedback na tela

  const [ numberSort, setNumberSort] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [getUserBet, setGetUserBet] = useState({state: true, bet_1: 0, bet_2: 0})

  const getUserNumbers = [4, 8] 
  
  function sortNumber() {
    const random = () => Math.floor(Math.random() * (10 - 1) + 1)
    const randomNumber = random()

    if(getUserNumbers.includes(randomNumber)) {
      setFeedback('Você ganhou a aposta!')
    } else {
      setFeedback('Você perdeu a aposta!')
    }
    setNumberSort(randomNumber)
  }

  function handleInputChange(e) {

    return
  }

  function addInputValue(e) {

  }

  function handleClearInput(index) {

  }

  console.log(getUserBet.bet)

  const inputsBet = [
    {value: getUserBet.bet[0], title: 'Aposta 1'},
    {value: getUserBet.bet[1], title: 'Aposta 2'},
  ]


  return (
    <>
      { getUserBet.state &&
        <div className='absolute h-screen w-full p-10 backdrop-blur-sm z-20'>
          <div className='w-full h-full bg-gray-700 px-6 pt-20'>
            <h2 className='font-bold text-yellow-400 text-5xl'>Faça sua aposta:</h2>
            <div className='flex flex-col mt-16'>
              {
                inputsBet.map((item, index) =>
                  <div key={index} className='flex flex-col mb-6'>
                    <span className='text-gray-500'>{item.title}</span>
                    <div className='flex flex-row items-center'>
                      <input
                        value={item.value}
                        onChange={handleInputChange}
                        placeholder='Digite aqui...'
                        className='p-3 mt-2 w-[70%] text-white bg-gray-600 border-2 border-yellow-600 outline-none text-sm placeholder:text-sm rounded-lg'
                      />
                      <button
                        onClick={() => handleClearInput(index)}
                        className='text-sm text-gray-500 ml-2 hover:text-white focus:outline-none'
                      >
                        Refazer
                      </button>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      }

      <div className='px-5 py-14'>
        <HeaderGame
          backPage='/'
          title='Jogo Seguro'
        />


        <div className='flex flex-col mt-14 w-full'>
          <div className='flex flex-col justify-center items-center w-full bg-gray-400 py-16 rounded-xl drop-shadow-2xl'>
            <span className='text-8xl font-bold'>{numberSort}</span>
            <h1 className='mt-5 text-gray-700'>{feedback}</h1>
          </div>
          <button
            onClick={sortNumber}
            className='mt-14 py-4 bg-green-400 w-full text-gray-800 text-lg font-semibold drop-shadow-xl'
          >
            Apostar
          </button>
        </div>
      </div>
    </>

  )
}