import { useState } from 'react'
// components
import { HeaderGame } from '../../components'
import Bets from './Bets'

export default function EasyGame() {
  // Inserir Numeros - array
  // Rodar a "Roleta"
  // Verificar se ganhou ou perdeu
  // Retornar feedback na tela

  const [numberSort, setNumberSort] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [getUserBet, setGetUserBet] = useState({state: false, bet: []})
  console.log(getUserBet.bet)

  const getUserNumbers = [4, 8] 
  
  function handleInputChange(e) {
    const value = e.target.value
    let newBets = [...getUserBet.bet, value]

    setGetUserBet((prevState) => ({...prevState, bet: newBets}))
  }

  function handleClearInput() {
    let deleteBets = [...getUserBet.bet]
    deleteBets = []
    
    setGetUserBet((prevState) => ({...prevState, bet: deleteBets}))
  }

  function sortNumber() {
    let feedbackMessage
    const random = () => Math.floor(Math.random() * (10 - 1) + 1)
    const randomNumber = JSON.stringify(random())
    setNumberSort(randomNumber)

    if(getUserBet.bet.includes(randomNumber)) {
      feedbackMessage = `🎉 Você GANHOU a aposta! 🎉`
    } else {
      feedbackMessage = `⚠️ Você PERDEU a aposta! ⚠️`
    }
    
    setFeedback(feedbackMessage)
  }


  const openBets = () => setGetUserBet((prev) => ({...prev, state: true}))
    
  const buttons = [
    {clickFunction: openBets, text: 'Registrar aposta', class: 'bg-transparent border-2 border-gray-700'},
    {clickFunction: sortNumber, text: 'Iniciar roleta', class: 'bg-green-400'},
  ]

  return (
    <>
      { getUserBet.state &&
        <Bets
          getUserBet={getUserBet}
          setGetUserBet={setGetUserBet}
          handleInputChange={handleInputChange}
          handleClearInput={handleClearInput}
        />
      }

      <div className='flex flex-col h-screen p-4'>
        <HeaderGame
          backPage='/'
          title='Jogo Seguro'
        />

        <div className='flex flex-col mt-6 w-full h-full'>
          <div className='flex flex-col justify-center items-center w-full bg-gray-400 py-16 rounded-xl drop-shadow-2xl'>
            <span className='text-8xl font-bold'>{numberSort}</span>
            <h1 className='mt-5 text-gray-700'>{feedback}</h1>
          </div>
          { getUserBet.bet.length > 0 &&
            <span className='text-gray-700 mt-1'>Minha aposta é de: {getUserBet.bet[0]} e {getUserBet.bet[1]}</span>
          }
          <div className='flex flex-col gap-4 mt-auto'>
            { buttons.map((item, index) => 
              <button
                onClick={item.clickFunction}
                key={index}
                className={`${item.class} py-4 w-full text-gray-800 text-lg font-semibold drop-shadow-xl rounded-lg`}
              >
                {item.text}
              </button>
            )}
          </div>
        </div>
      </div>
    </>

  )
}